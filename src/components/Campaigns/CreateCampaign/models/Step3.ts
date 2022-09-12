// ==========================================================================
// ==                              Step 3                                 ==
// ==========================================================================

export interface Step3 {
  templateType: TemplateType
  templateName: string

  messageHeader: string
  messageBody: string
  pushNotificationUrl: string | null

  testMessageType: TestMessageType
  testMessage: TestSegmentName | EndpointIDs
}
export type TemplateType = 'existing' | 'create'
export type TestMessageType = 'segment-name' | 'endpoint-ids'
type TestSegmentName = string
type EndpointIDs = string

//Options
export const templateTypeOptions = [
  {
    value: 'existing',
    label: 'Choose an existing in-app messaging template',
  },
  {
    value: 'create',
    label: 'Create a new in-app message',
  },
]

export const testMessageTypeOptions = [
  {
    value: 'segment-name',
    label: 'A segment',
  },
  {
    value: 'endpoint-ids',
    label: 'Endpoint IDs',

    // TODO: implement this
    disabled: true,
  },
]

export const defaultStep3: Step3 = {
  templateType: 'existing',
  templateName: '',
  messageHeader: '',
  messageBody: '',
  pushNotificationUrl: null,
  testMessageType: 'segment-name',
  testMessage: '',
}
