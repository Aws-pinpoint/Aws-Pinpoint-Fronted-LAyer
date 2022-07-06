import {
  AttributeDimension,
  CampaignEventFilter,
  Message,
  MessageConfiguration,
  MetricDimension,
  Schedule,
  SetDimension,
  WriteCampaignRequest,
} from '@aws-sdk/client-pinpoint'
import {
  CampaignChannel,
  CampaignPriority,
} from '../../../../components/Campaigns/CreateCampaign/models/Step1'
import {
  MetricOperator,
  OnEventAttribute,
  OnEventMetric,
  SendingType,
} from '../../../../components/Campaigns/CreateCampaign/models/Step4'
import {
  CampaignDetails,
  OnEventSchedule,
  SpecificTimeSchedule,
} from '../../../../components/Campaigns/CreateCampaign/models/Step5'

export const toWriteCampaignRequest = (
  campaignDetails: CampaignDetails
): WriteCampaignRequest => {
  const res: WriteCampaignRequest = {
    Name: campaignDetails.name,
    SegmentId: campaignDetails.segment.id,
    HoldoutPercent: campaignDetails.segment.holdoutPercent,
    Priority: toPinpointPriority(
      campaignDetails.message.channel,
      campaignDetails.priority
    ),
    Schedule: toPinpointSchedule(
      'on-event',
      campaignDetails.message.channel,
      campaignDetails.schedule
    ),
    MessageConfiguration: toPinpointMessageConfiguration(
      campaignDetails.message
    ),
  }

  return res
}

const toPinpointPriority = (
  campaignChannel: CampaignChannel,
  p: CampaignPriority
): number => {
  if (campaignChannel === 'in-app' || p === null) {
    if (p === 'very-important') {
      return 1
    }
    if (p === 'fairly-important') {
      return 2
    }
    if (p === 'important') {
      return 3
    }
    if (p === 'slightly-important') {
      return 4
    }
    if (p === 'less-important') {
      return 5
    }
  } else {
    return undefined
  }
}

// Message Configuration
const toPinpointMessageConfiguration = (
  message: CampaignDetails['message']
): MessageConfiguration => {
  let res: MessageConfiguration
  if (message.channel === 'in-app') {
    res = {
      InAppMessage: {
        Content: [
          {
            BackgroundColor: '#FFFFFF',
            HeaderConfig: {
              Alignment: 'LEFT',
              Header: message.header,
              TextColor: '#000000',
            },
            BodyConfig: {
              Alignment: 'LEFT',
              Body: message.body,
              TextColor: '#000000',
            },
          },
        ],
        Layout: 'TOP_BANNER',
      },
    }
  } else if (message.channel === 'push-notification') {
    const x: Message = {
      Title: message.header,
      Body: message.body,
      Action: 'URL',
      SilentPush: false,
      Url: message.pushNotificationUrl,
    }

    res = {
      ADMMessage: x,
      APNSMessage: x,
      BaiduMessage: x,
      GCMMessage: x,
    }
  }

  return res
}

// Schedule
const toPinpointSchedule = (
  scheduleType: 'specific-time' | 'on-event',
  channel: CampaignChannel,
  schedule: OnEventSchedule | SpecificTimeSchedule
): Schedule => {
  const res: Schedule = {
    StartTime: new Date(schedule.startTime * 1000).toISOString(),
    EndTime: new Date(schedule.endTime * 1000).toISOString(),
    // Timezone: schedule.timezone,
  }
  if (scheduleType === 'on-event') {
    schedule = schedule as OnEventSchedule
    res.EventFilter = toPinpointScheduleEventFilter(schedule)

    if (channel === 'in-app') res.Frequency = 'IN_APP_EVENT'
    else if (channel === 'push-notification') res.Frequency = 'EVENT'
  } else {
    // if (scheduleType === 'specific-time')
    schedule = schedule as SpecificTimeSchedule
    res.Frequency = toPinpointScheduleFrequency(schedule.frequency)
  }
  return res
}

const toPinpointScheduleFrequency = (frequency: SendingType): string => {
  if (frequency === 'Immediately') {
    return 'IMMEDIATELY'
  }
  if (frequency === 'Daily') {
    return 'DAILY'
  }
  if (frequency === 'Weekly') {
    return 'WEEKLY'
  }
  if (frequency === 'Monthly') {
    return 'MONTHLY'
  }
  if (frequency === 'Hourly') {
    return 'HOURLY'
  }
  if (frequency === 'Once') {
    return 'ONCE'
  }
}

const toPinpointScheduleEventFilter = (
  schedule: OnEventSchedule
): CampaignEventFilter => {
  return {
    Dimensions: {
      Attributes: toPinpointScheduleAttributes(schedule.attributes),
      EventType: toPinpointScheduleEventType(schedule.triggerEvent),
      Metrics: toPinpointScheduleMetrics(schedule.metric),
    },
    FilterType: 'ENDPOINT',
  }
}
const toPinpointScheduleAttributes = (
  attributes: OnEventAttribute[]
): Record<string, AttributeDimension> => {
  const res: Record<string, AttributeDimension> = {}
  attributes.forEach(a => {
    res[a.attribute] = {
      Values: [a.value],
      AttributeType: 'INCLUSIVE',
    }
  })
  return res
}

const toPinpointScheduleEventType = (triggerEvent: string): SetDimension => {
  return {
    DimensionType: 'INCLUSIVE',
    Values: [triggerEvent],
  }
}

const toPinpointScheduleMetrics = (
  metric: OnEventMetric
): Record<string, MetricDimension> => {
  const res: Record<string, MetricDimension> = {}

  res[metric.metric] = {
    ComparisonOperator: toPinpointComparisonOperator(metric.operator),
    Value: metric.value,
  }

  return res
}

const toPinpointComparisonOperator = (
  metricOperator: MetricOperator
): string => {
  if (metricOperator === 'greater-than') {
    return 'GREATER_THAN'
  }
  if (metricOperator === 'less-than') {
    return 'LESS_THAN'
  }
  if (metricOperator === 'equal-to') {
    return 'EQUAL'
  }
  if (metricOperator === 'greater-than-or-equal-to') {
    return 'GREATER_THAN_OR_EQUAL'
  }
  if (metricOperator === 'less-than-or-equal-to') {
    return 'LESS_THAN_OR_EQUAL'
  }
}
