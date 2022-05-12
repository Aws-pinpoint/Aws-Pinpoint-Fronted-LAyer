import { FunctionComponent, useState } from 'react'
import Head from 'next/head'
import {
  EuiButton,
  EuiButtonIcon,
  EuiFieldText,
  EuiRadioGroup,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui'

const standardAttributeOptions = [
  'Platform',
  'AppVersion',
  'Make',
  'Model',
  'Country',
  'Locale',
]
const standardOperatorOptions = ['Is', 'Is not']

interface StandardFilter {
  attribute: string
  operator: 'Is' | 'Is not'
  value: string
}

const activityAttributeOptions = ['Active', 'Inactive']
interface ActivityFilter {
  attribute: 'Active' | 'Inactive'
  operator: 'During'
  value: 'last_day' | 'last_7days' | 'last_14days' | 'last_30days'
}

interface Criteria {
  filters: (StandardFilter | ActivityFilter)[]
  logic: 'AND' | 'OR' | 'NOR'
}

const includeAudiencesOptions = [
  { id: 'any', label: 'Include any audiences' },
  { id: 'all', label: 'Include all audiences' },
]
interface SegmentGroup {
  includeAudiences: 'all' | 'any'
  baseSegments: 'all' | SegmentGroup[]
  criterias: Criteria[]
}

const defaultSegmentGroup: SegmentGroup = {
  includeAudiences: 'any',
  baseSegments: 'all',
  criterias: [],
}

const CreateSegment: FunctionComponent = () => {
  const [segmentName, setSegmentName] = useState('')
  const [segmentGroups, setSegmentGroups] = useState<SegmentGroup[]>([
    defaultSegmentGroup,
  ])

  const handleSegmentName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSegmentName(e.target.value)
  }

  const handleAddSegmentGroup = () => {
    setSegmentGroups([...segmentGroups, defaultSegmentGroup])
  }
  const handleRemoveSegmentGroup = (segmentGroupIndex: number) => {
    let segmentGroupsRes = [...segmentGroups]
    segmentGroupsRes = segmentGroupsRes.filter(
      (_, i) => segmentGroupIndex !== i
    )
    console.log(segmentGroupsRes)
    setSegmentGroups(segmentGroupsRes)
  }

  const handleIncludeAudiences = (
    newValue: 'any' | 'all',
    segmentGroupIndex: number
  ) => {
    const segmentGroupsRes = [...segmentGroups]
    segmentGroupsRes[segmentGroupIndex].includeAudiences = newValue
    setSegmentGroups(segmentGroupsRes)
  }

  return (
    <>
      <Head>
        <title>Create a Segment</title>
      </Head>

      <div>
        <EuiTitle size="l">
          <h2>Create a Segment</h2>
        </EuiTitle>

        <EuiTitle size="s" className="mb-2">
          <h4>Segment Name</h4>
        </EuiTitle>
        <EuiFieldText
          placeholder="Segment Name"
          value={segmentName}
          onChange={handleSegmentName}
        />
        <EuiSpacer size="xxl" />

        {segmentGroups.map((segmentGroup, i) => {
          return (
            <div
              key={i}
              className="border-slate-300 border-solid border-2 p-2 mb-4"
            >
              <div className="flex w-full">
                <EuiTitle size="s" className="mb-2">
                  <h4>Segment group {i + 1}</h4>
                </EuiTitle>

                {i !== 0 && (
                  <EuiButtonIcon
                    // display="fill"
                    size="s"
                    iconType="trash"
                    color="danger"
                    aria-label="Remove segment group"
                    className="justify-self-end"
                    onClick={() => {
                      handleRemoveSegmentGroup(i)
                    }}
                  />
                )}
              </div>
              <EuiTitle size="xs" className="mb-2">
                <h5>Base Segments</h5>
              </EuiTitle>
              <EuiRadioGroup
                options={includeAudiencesOptions}
                idSelected={segmentGroup.includeAudiences}
                onChange={(e: 'any' | 'all') => {
                  handleIncludeAudiences(e, i)
                }}
                name={`include-audiences-${i}`}
              />
              <EuiSpacer size="l" />

              <EuiTitle size="xs" className="mb-2">
                <h5>
                  Criteria - <i>optional</i>
                </h5>
              </EuiTitle>
              <EuiButton fill>Add criteria</EuiButton>
            </div>
          )
        })}

        <EuiButton fill onClick={handleAddSegmentGroup}>
          Add another segment group
        </EuiButton>
      </div>
    </>
  )
}

export default CreateSegment
