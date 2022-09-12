import { CampaignDetails } from './CreateCampaign/models/Step5'
import { Title } from '../../ui-kit/Form'

const CampaignDetailsComponent = ({
  campaignDetails,
}: {
  campaignDetails: CampaignDetails
}) => {
  return (
    <div className="mt-4">
      <Title disableMb value="Name" />
      <p>{campaignDetails.name}</p>

      <Title disableMb className="mt-4" value="Type" />
      <p>{campaignDetails.type}</p>

      {/* TODO: add status here */}

      {campaignDetails.schedule.type === 'on-event' && (
        <div>
          <Title className="mt-16" size="m" value="Schedule" />
          <div className="flex gap-6">
            <div>
              <Title className="mt-4" value="Trigger event" disableMb />
              <p>{campaignDetails.schedule.onEventSchedule.triggerEvent}</p>

              <Title className="mt-4" value="Attributes" disableMb />
              {campaignDetails.schedule.onEventSchedule.attributes.map(
                (attribute, index) => {
                  return (
                    <p key={`schedule-attribute-${index}`}>
                      {`${attribute.attribute}: ${attribute.value}`}
                    </p>
                  )
                }
              )}

              <Title className="mt-4" value="Metrics" disableMb />
              <p>
                {`${campaignDetails.schedule.onEventSchedule.metric.metric} ${campaignDetails.schedule.onEventSchedule.metric.operator} ${campaignDetails.schedule.onEventSchedule.metric.value}`}
              </p>
            </div>
            <div className="border-0 border-l border-solid border-slate-300 pl-2">
              <Title className="mt-4" size="xs" value="Start date" disableMb />
              <p>
                {new Date(
                  campaignDetails.schedule.onEventSchedule.startTime * 1000
                ).toString()}
              </p>
              <Title className="mt-4" size="xs" value="End date" disableMb />
              <p>
                {new Date(
                  campaignDetails.schedule.onEventSchedule.endTime * 1000
                ).toString()}
              </p>
            </div>
            <div className="border-0 border-l border-solid border-slate-300 pl-2">
              <Title className="mt-4" size="xs" value="Time zone" />
              {campaignDetails.schedule.onEventSchedule.timezone}
            </div>
          </div>
        </div>
      )}

      <div>
        <Title className="mt-16" size="m" value="Message details" />
        <div className="flex gap-6">
          <div>
            <Title className="mt-4" value="Channel" disableMb />
            <p>{campaignDetails.message.channel}</p>
          </div>
          <div className="border-0 border-l border-solid border-slate-300 pl-2">
            <Title className="mt-4" size="xs" value="Content type" disableMb />
            <p>Message</p>
            {/* TODO: implement this */}
          </div>
        </div>
      </div>

      {campaignDetails.message.pushNotificationUrl !== null ? (
        <div>
          <Title
            className="mt-16"
            size="m"
            value="Push notifications details"
          />
          <div className="flex gap-6">
            <div>
              <Title
                className="mt-4"
                value="Action triggered on open"
                disableMb
              />
              <p>{`Go to URL ${campaignDetails.message.pushNotificationUrl}`}</p>
            </div>
            <div className="border-0 border-l border-solid border-slate-300 pl-2">
              <Title className="mt-4" size="xs" value="Title" disableMb />
              <p>{campaignDetails.message.header}</p>
              <Title
                className="mt-4"
                size="xs"
                value="Message body"
                disableMb
              />
              <p>{campaignDetails.message.body}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Title className="mt-16" size="m" value="In-app messaging details" />
          <Title className="mt-4" size="xs" value="Title" disableMb />
          <p>{campaignDetails.message.header}</p>
          <Title className="mt-4" size="xs" value="Message body" disableMb />
          <p>{campaignDetails.message.body}</p>
        </div>
      )}
    </div>
  )
}

export default CampaignDetailsComponent
