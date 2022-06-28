import { Schedule, WriteCampaignRequest } from '@aws-sdk/client-pinpoint'
import {
  CampaignDetails,
  OnEventSchedule,
  SpecificTimeSchedule,
} from '../../../components/Campaigns/CreateCampaign/models/Step5'

export const toWriteCampaignRequest = (
  campaignDetails: CampaignDetails
): WriteCampaignRequest => {
  const res: WriteCampaignRequest = {
    Name: campaignDetails.name,
    SegmentId: campaignDetails.segment.id,
  }

  return res
}

const toPinpointSchedule = (
  scheduleType: 'specific-time' | 'on-event',
  schedule: OnEventSchedule | SpecificTimeSchedule
): Schedule => {
  let res: Schedule

  if (scheduleType === 'on-event') {
    schedule = schedule as OnEventSchedule
    res = {
      EventFilter: {
        EventType: schedule.triggerEvent,
        Attributes: schedule.attributes,
        Metrics: schedule.metric,
      },
      StartTime: schedule.startTime,
      EndTime: schedule.endTime,
      // Timezone: schedule.timezone,
    }
  }
  return res
}
