import { useState } from 'react'
import {
  EuiButton,
  EuiButtonIcon,
  EuiFieldText,
  EuiRadioGroup,
  EuiSelect,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui'

import {
  includeAudiencesOptions,
  attributeOptions,
  defaultSegmentGroup,
  SegmentGroup,
  standardOperatorOptions,
  defaultStandardFilter,
  defaultCriteria,
} from '../models'

import cloneDeep from 'clone-deep'

const CreateSegment = () => {
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
    const segmentGroupsRes = cloneDeep(segmentGroups)
    segmentGroupsRes[segmentGroupIndex].includeAudiences = newValue

    setSegmentGroups(segmentGroupsRes)
  }

  const handleAddCriteria = (sgIndex: number) => {
    const segmentGroupsRes = cloneDeep(segmentGroups)
    segmentGroupsRes[sgIndex].criterias = [
      ...segmentGroupsRes[sgIndex].criterias,
      defaultCriteria,
    ]

    setSegmentGroups(segmentGroupsRes)
  }
  const handleRemoveCriteria = (sgIndex: number, criteriaIndex: number) => {
    const segmentGroupsRes = cloneDeep(segmentGroups)
    segmentGroupsRes[sgIndex].criterias = segmentGroupsRes[
      sgIndex
    ].criterias.filter((_, i) => i !== criteriaIndex)

    setSegmentGroups(segmentGroupsRes)
  }

  const handleAddFilter = (sgIndex: number, criteriaIndex: number) => {
    const segmentGroupsRes = cloneDeep(segmentGroups)
    segmentGroupsRes[sgIndex].criterias[criteriaIndex].filters = [
      ...segmentGroupsRes[sgIndex].criterias[criteriaIndex].filters,
      defaultStandardFilter,
    ]

    setSegmentGroups(segmentGroupsRes)
  }
  const handleRemoveFilter = (
    sgIndex: number,
    criteriaIndex: number,
    filterIndex: number
  ) => {
    const segmentGroupsRes = cloneDeep(segmentGroups)
    segmentGroupsRes[sgIndex].criterias[criteriaIndex].filters =
      segmentGroupsRes[sgIndex].criterias[criteriaIndex].filters.filter(
        (_, i) => i !== filterIndex
      )

    setSegmentGroups(segmentGroupsRes)
  }

  const handleFilterAttribute = (
    newValue: string,
    sgIndex: number,
    criteriaIndex: number,
    filterIndex: number
  ) => {
    // const segmentGroupsRes = [...segmentGroups]
    const segmentGroupsRes = cloneDeep(segmentGroups)
    segmentGroupsRes[sgIndex].criterias[criteriaIndex].filters[
      filterIndex
    ].attribute = newValue
    setSegmentGroups(segmentGroupsRes)
  }
  return (
    <>
      <EuiTitle size="s" className="mb-2">
        <h4>Segment Name</h4>
      </EuiTitle>
      <EuiFieldText
        placeholder="Segment Name"
        value={segmentName}
        onChange={handleSegmentName}
      />
      <EuiSpacer size="xxl" />

      {segmentGroups.map((segmentGroup, sgIndex) => (
        <div
          key={`segmentGroup-${sgIndex}`}
          className="border-slate-300 border-solid border-2 p-2 mb-4"
        >
          <div className="flex w-full">
            <EuiTitle size="s" className="mb-2">
              <h4>Segment group {sgIndex + 1}</h4>
            </EuiTitle>

            {sgIndex !== 0 && (
              <EuiButtonIcon
                // display="fill"
                size="s"
                iconType="trash"
                color="danger"
                aria-label="Remove segment group"
                className="justify-self-end"
                onClick={() => {
                  handleRemoveSegmentGroup(sgIndex)
                }}
              />
            )}
          </div>
          <EuiTitle size="xs" className="mb-2">
            <h5>Base Segments</h5>
          </EuiTitle>
          <EuiRadioGroup
            options={includeAudiencesOptions.map(item => ({
              id: `includeAudiencesOption-${item.value}-${sgIndex}`,
              ...item,
            }))}
            idSelected={`includeAudiencesOption-${segmentGroup.includeAudiences}-${sgIndex}`}
            onChange={(_, newValue: 'any' | 'all') => {
              handleIncludeAudiences(newValue, sgIndex)
            }}
            name={`include-audiences-${sgIndex}`}
          />
          <EuiSpacer size="l" />

          {segmentGroup.criterias.length === 0 && (
            <EuiTitle size="xs" className="mb-2">
              <h5>
                Criteria - <i>optional</i>
              </h5>
            </EuiTitle>
          )}
          {segmentGroup.criterias.map((criteria, criteriaIndex) => (
            <>
              <div className="flex w-full items-center">
                <EuiTitle size="xs" className="">
                  <h5>Criteria {criteriaIndex + 1}</h5>
                </EuiTitle>
                <EuiButtonIcon
                  // display="fill"
                  size="s"
                  iconType="trash"
                  color="danger"
                  aria-label="Remove segment group"
                  onClick={() => {
                    handleRemoveCriteria(sgIndex, criteriaIndex)
                  }}
                />
              </div>
              <div
                className="border-slate-300 border-solid border-2 p-2 mb-8"
                key={`criteria-${criteriaIndex}`}
              >
                {criteria.filters.map((filter, filterIndex) => (
                  <div key={`filter-${filterIndex}`} className="mb-4 flex">
                    <div className="mr-8">
                      {filterIndex === 0 && (
                        <p>
                          <b>Attribute</b>
                        </p>
                      )}
                      <EuiSelect
                        options={attributeOptions}
                        value={filter.attribute}
                        onChange={e => {
                          handleFilterAttribute(
                            e.target.value,
                            sgIndex,
                            criteriaIndex,
                            filterIndex
                          )
                        }}
                      />
                    </div>
                    <div className="mr-8">
                      {filterIndex === 0 && (
                        <p>
                          <b>Operator</b>
                        </p>
                      )}
                      <EuiSelect options={standardOperatorOptions} />
                    </div>
                    <div>
                      {filterIndex === 0 && (
                        <p>
                          <b>Values</b>
                        </p>
                      )}
                      <EuiFieldText
                        placeholder="Placeholder text"
                        // onChange={onChange}
                      />
                    </div>
                    {filterIndex !== 0 && (
                      <EuiButtonIcon
                        // display="fill"
                        size="s"
                        iconType="trash"
                        color="danger"
                        aria-label="Remove segment group"
                        className="self-end ml-2"
                        onClick={() => {
                          handleRemoveFilter(
                            sgIndex,
                            criteriaIndex,
                            filterIndex
                          )
                        }}
                      />
                    )}
                  </div>
                ))}
                <EuiButton
                  size="s"
                  fill
                  onClick={() => {
                    handleAddFilter(sgIndex, criteriaIndex)
                  }}
                >
                  Add filter
                </EuiButton>
              </div>
            </>
          ))}
          {/* <div className="w-32">
              <EuiSelect options={criteriaLogicOptions} />
            </div> */}
          <EuiButton
            className=""
            size="s"
            fill
            onClick={() => {
              handleAddCriteria(sgIndex)
            }}
          >
            Add criteria
          </EuiButton>
        </div>
      ))}

      <EuiButton fill onClick={handleAddSegmentGroup}>
        Add another segment group
      </EuiButton>
    </>
  )
}

export default CreateSegment
