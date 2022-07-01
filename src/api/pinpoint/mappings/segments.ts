import {
  WriteSegmentRequest,
  SegmentGroup as PinpointSegmentGroup,
  SegmentDimensions,
  SegmentBehaviors,
  SegmentDemographics,
  SetDimension,
} from '@aws-sdk/client-pinpoint'
import {
  GroupsLogic,
  SegmentGroup,
  Criteria,
  Segment,
  Inclusion,
  ActivityFilter,
  StandardFilter,
  StandardFilterOperator,
  ActivityFilterValue,
} from '../../../components/Segments/CreateSegment/models'

export const toWriteSegmetRequest = (segment: Segment): WriteSegmentRequest => {
  const pinpointSegmentGroups: PinpointSegmentGroup[] =
    segment.segmentGroups.map(srcSegmentGroup =>
      toPinpointSegmentGroup(srcSegmentGroup)
    )

  const sgInclude = toPinpointInclusion('logic', segment.logic)
  const res: WriteSegmentRequest = {
    Name: segment.name,
    SegmentGroups: {
      Groups: pinpointSegmentGroups,
      Include: sgInclude,
    },
  }

  return res
}

type PinpointInclusion = 'ANY' | 'ALL' | 'NONE'
const toPinpointInclusion = (
  type: 'logic' | 'inclusion',
  x: GroupsLogic | Inclusion
): PinpointInclusion => {
  if (type === 'logic')
    if (x === 'AND') {
      return 'ANY'
    } else if (x === 'OR') {
      return 'ALL'
    } else return 'NONE'
  else if (type === 'inclusion')
    if (x === 'any') {
      return 'ANY'
    } else if (x === 'all') {
      return 'ALL'
    } else return 'NONE'
}

const toPinpointSegmentGroup = (
  srcSegmentGroup: SegmentGroup
): PinpointSegmentGroup => {
  const sgSourceType = toPinpointInclusion(
    'inclusion',
    srcSegmentGroup.includeAudiences
  )
  const sgType = toPinpointInclusion('logic', srcSegmentGroup.criteriasLogic)
  const sgDimensions = srcSegmentGroup.criterias.map(srcCriteria =>
    toPinpointSegmentDimensions(srcCriteria)
  )

  return {
    Type: sgType,
    SourceType: sgSourceType,
    Dimensions: sgDimensions,
    /* SourceSegments: [{
          Id: ""
      }] */
  }
}

const toPinpointSegmentDimensions = (
  srcCriteria: Criteria
): SegmentDimensions => {
  const res: SegmentDimensions = {
    Demographic: {},
  }
  srcCriteria.filters.forEach(filter => {
    // A very basic way to check `filter` type
    if (filter.operator === 'During') {
      // typeof filter === ActivityFilter
      // Only one can be set per criteria
      res.Behavior = toPinpointSegmentBehavior(filter)
    } else {
      // typeof filter === StandardFilter
      const newSgDemographics = toPinpointSegmentDemographics(filter)
      res.Demographic = {
        ...res.Demographic,
        ...newSgDemographics,
      }
    }
  })
  return res
}

const toPinpointSegmentBehavior = (
  activityFilter: ActivityFilter
): SegmentBehaviors => {
  const duration = toPinpointDuration(activityFilter.value)
  let recencyType: string
  if (activityFilter.attribute === 'Active') {
    recencyType = 'ACTIVE'
  } else {
    recencyType = 'INACTIVE'
  }

  return { Recency: { RecencyType: recencyType, Duration: duration } }
}

type PinpointDuration = 'HR_24' | 'DAY_7' | 'DAY_14' | 'DAY_30'
const toPinpointDuration = (x: ActivityFilterValue): PinpointDuration => {
  if (x === 'last_day') {
    return 'HR_24'
  } else if (x === 'last_7days') {
    return 'DAY_7'
  } else if (x === 'last_14days') {
    return 'DAY_14'
  } else if (x === 'last_30days') {
    return 'DAY_30'
  }
}

const toPinpointSegmentDemographics = (
  filter: StandardFilter
): SegmentDemographics => {
  const res: SegmentDemographics = {}
  if (filter.attribute === 'AppVersion') {
    res.AppVersion = toPinpointSetDimentsion(filter.operator, [filter.value])
  } else if (filter.attribute === 'Platform') {
    res.Platform = toPinpointSetDimentsion(filter.operator, [filter.value])
  } else if (filter.attribute === 'Make') {
    res.Make = toPinpointSetDimentsion(filter.operator, [filter.value])
  } else if (filter.attribute === 'Model') {
    res.Model = toPinpointSetDimentsion(filter.operator, [filter.value])
  }
  return res
}

// type PinpointDimensionType = 'INCLUSIVE' | 'EXCLUSIVE'
const toPinpointSetDimentsion = (
  operator: StandardFilterOperator,
  values: string[]
): SetDimension => {
  console.log(operator)

  const res: SetDimension = {
    Values: values,
  }
  if (operator === 'Is') {
    res.DimensionType = 'INCLUSIVE'
  } else if (operator === 'Is not') {
    res.DimensionType = 'EXCLUSIVE'
  }

  return res
}
