import {
  AttributeDimension,
  CampaignResponse,
  MessageConfiguration,
  MetricDimension,
  Schedule,
} from '@aws-sdk/client-pinpoint'
import {
  CampaignChannel,
  CampaignPriority,
} from '../../../../components/Campaigns/CreateCampaign/models/Step1'
import {
  MetricOperator,
  OnEventAttribute,
  OnEventMetric,
} from '../../../../components/Campaigns/CreateCampaign/models/Step4'
import {
  CampaignDetails,
  CampaignMessage,
  CampaignSchedule,
  OnEventSchedule,
} from '../../../../components/Campaigns/CreateCampaign/models/Step5'

export const toAutomatoCampaign = (
  pCampaign: CampaignResponse
): CampaignDetails => {
  const campaignChannel = guessCampaignChannel(pCampaign.MessageConfiguration)
  if (!['in-app', 'push-notification'].includes(campaignChannel))
    throw new Error(`campaign channel of ${campaignChannel} is not supported`)

  const automatoCampaignMessage = toAutomatoCampaignMessage(
    campaignChannel,
    pCampaign.MessageConfiguration
  )

  const automatoCampaignSchedule = toAutomatoCampaignSchedule(
    pCampaign.Schedule
  )
  if (automatoCampaignSchedule.type === 'specific-time')
    throw new Error('campaigh schedule of specific time is not supported')

  return {
    name: pCampaign.Name,

    //TODO: change this when implementing AB campaign type
    type: 'standard',

    segment: {
      id: pCampaign.SegmentId,
      holdoutPercent: pCampaign.HoldoutPercent,
      //TODO: get segment name and put it here
      name: 'WIP',
    },

    schedule: automatoCampaignSchedule,
    message: automatoCampaignMessage,
    priority: toAutomatoPriority(campaignChannel, pCampaign.Priority),
  }
}

// `guess` because we don't know for sure based on this
// must test on more campaigns
const guessCampaignChannel = (
  pMessageConfiguration: MessageConfiguration
): CampaignChannel => {
  if (pMessageConfiguration.InAppMessage !== undefined) {
    return 'in-app'
  } else if (pMessageConfiguration.EmailMessage !== undefined) {
    return 'email'
  } else if (pMessageConfiguration.SMSMessage !== undefined) {
    return 'sms'
  } else if (pMessageConfiguration.CustomMessage !== undefined) {
    return 'custom'
  } else {
    return 'push-notification'
  }
}

const toAutomatoPriority = (
  campaignChannel: CampaignChannel,
  p: number
): CampaignPriority => {
  if (campaignChannel === 'in-app') {
    if (p === 1) {
      return 'very-important'
    }
    if (p === 2) {
      return 'fairly-important'
    }
    if (p === 3) {
      return 'important'
    }
    if (p === 4) {
      return 'slightly-important'
    }
    if (p === 5) {
      return 'less-important'
    }
  } else {
    return null
  }
}

const toAutomatoCampaignMessage = (
  campaignChannel: CampaignChannel,
  pMessageConfiguration: MessageConfiguration
): CampaignMessage => {
  if (campaignChannel === 'in-app') {
    return {
      header: pMessageConfiguration.InAppMessage.Content[0].HeaderConfig.Header,
      body: pMessageConfiguration.InAppMessage.Content[0].BodyConfig.Body,
      pushNotificationUrl: null,
      channel: campaignChannel,
    }
  } else if (campaignChannel === 'push-notification') {
    // Picked ADMMessage arbitrarily
    // TODO: test on more campaigns with push-notifications and see which
    // MessageConfiguration is used
    return {
      header: pMessageConfiguration.ADMMessage.Title,
      body: pMessageConfiguration.ADMMessage.Body,
      pushNotificationUrl: pMessageConfiguration.ADMMessage.Url,
      channel: campaignChannel,
    }
  } else {
    return undefined
  }
}

const toAutomatoCampaignSchedule = (pSchedule: Schedule): CampaignSchedule => {
  //guess campaign schedule type
  let campaignScheduleType: 'on-event' | 'specific-time'
  if (['EVENT', 'IN_APP_EVENT'].includes(pSchedule.Frequency)) {
    campaignScheduleType = 'on-event'
  } else {
    campaignScheduleType = 'specific-time'
  }

  if (campaignScheduleType === 'on-event') {
    return {
      type: campaignScheduleType,
      onEventSchedule: toAutomatoOnEventSchedule(pSchedule),
    }
  } else {
    return {
      type: campaignScheduleType,

      // TODO: changes this when we implement specific time schedule
      specificTimeSchedule: undefined,
    }
  }
}

const toAutomatoOnEventSchedule = (pSchedule: Schedule): OnEventSchedule => {
  pSchedule.EventFilter.Dimensions.Attributes
  return {
    startTime: new Date(pSchedule.StartTime).getTime() / 1000,
    endTime: new Date(pSchedule.EndTime).getTime() / 1000,
    // TODO: change this when implementing timezone
    timezone: '',

    // Hopefully triggerEvent always contains one value
    triggerEvent: pSchedule.EventFilter.Dimensions.EventType.Values[0],
    attributes: toAutomatoOnEventAttribute(
      pSchedule.EventFilter.Dimensions.Attributes
    ),
    metric: toAutomatoOnEventMetric(pSchedule.EventFilter.Dimensions.Metrics),
  }
}

const toAutomatoOnEventAttribute = (
  pEventDimensionsAttributes: Record<string, AttributeDimension>
): OnEventAttribute[] => {
  return Object.entries(pEventDimensionsAttributes).map(
    ([key, value]): OnEventAttribute => {
      return {
        attribute: key,
        //TODO: change this when we implement multiple values for one attribute
        value: value.Values[0],
      }
    }
  )
}

const toAutomatoOnEventMetric = (
  pEventDimensionsMetrics: Record<string, MetricDimension>
): OnEventMetric => {
  // TODO: maybe change this? if we implement multiple metric values
  const metric = Object.entries(pEventDimensionsMetrics)[0]
  return {
    metric: metric[0],
    operator: toAutomatoMetricOperator(metric[1].ComparisonOperator),
    value: metric[1].Value,
  }
}

const toAutomatoMetricOperator = (pOperator: string): MetricOperator => {
  if (pOperator === 'GREATER_THAN') {
    return 'greater-than'
  }
  if (pOperator === 'LESS_THAN') {
    return 'less-than'
  }
  if (pOperator === 'EQUAL') {
    return 'equal-to'
  }
  if (pOperator === 'GREATER_THAN_OR_EQUAL') {
    return 'greater-than-or-equal-to'
  }
  if (pOperator === 'LESS_THAN_OR_EQUAL') {
    return 'less-than-or-equal-to'
  }
}
