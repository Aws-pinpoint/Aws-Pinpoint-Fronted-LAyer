import {
  SegmentBehaviors,
  SegmentDimensions,
  SegmentGroup as PinpointSegmentGroup,
  SegmentResponse,
  SetDimension,
} from '@aws-sdk/client-pinpoint'
import {
  ActivityFilter,
  ActivityFilterValue,
  Criteria,
  GroupsLogic,
  Inclusion,
  Segment,
  SegmentGroup,
  StandardFilter,
  StandardFilterAttribute,
} from '../../../../components/Segments/CreateSegment/models'
import { objIsEmpty } from '../../../../utils/utils'
import { PinpointDuration, PinpointInclusion } from '../models'

export const toAutomatoSegment = (pSegment: SegmentResponse): Segment => {
  const automatoLogic = toAutomatoInclusion(
    'logic',
    pSegment.SegmentGroups.Include as PinpointInclusion
  ) as GroupsLogic

  const segmentGroups: SegmentGroup[] = pSegment.SegmentGroups.Groups.map(
    pSegmentGroup => toAutomatoSegmentGroup(pSegmentGroup)
  )

  return {
    name: pSegment.Name,
    logic: automatoLogic,
    segmentGroups: segmentGroups,
  }
}

const toAutomatoInclusion = (
  type: 'logic' | 'inclusion',
  x: PinpointInclusion
): GroupsLogic | Inclusion => {
  if (type === 'logic')
    if (x === 'ANY') {
      return 'AND'
    } else if (x === 'ALL') {
      return 'OR'
    } else return 'NOR'
  else if (type === 'inclusion')
    if (x === 'ANY') {
      return 'any'
    } else if (x === 'ALL') {
      return 'all'
    } else return 'none'
}

const toAutomatoSegmentGroup = (
  pSegmentGroup: PinpointSegmentGroup
): SegmentGroup => {
  const includeAudiences = toAutomatoInclusion(
    'inclusion',
    pSegmentGroup.Type as PinpointInclusion
  ) as Inclusion
  const criteriasLogic = toAutomatoInclusion(
    'logic',
    pSegmentGroup.SourceType as PinpointInclusion
  ) as GroupsLogic

  const criterias: Criteria[] = pSegmentGroup.Dimensions.map(pDimension =>
    toAutomatoCriteria(pDimension)
  )

  return {
    includeAudiences,
    criteriasLogic,
    criterias,

    //TODO: change this
    baseSegments: [],
  }
}

const toAutomatoCriteria = (pDimension: SegmentDimensions): Criteria => {
  const res: Criteria = {
    filters: [],
  }

  console.log('pDimension ->', pDimension)
  if (
    !(
      objIsEmpty(pDimension.Behavior) || objIsEmpty(pDimension.Behavior.Recency)
    )
  )
    res.filters.push(toAutomatoActivityFilter(pDimension.Behavior))

  if (!objIsEmpty(pDimension.Demographic)) {
    const d = pDimension.Demographic

    if (!objIsEmpty(d.AppVersion))
      res.filters.push(toAutomatoStandardFilter(d.AppVersion, 'AppVersion'))

    if (!objIsEmpty(d.Platform))
      res.filters.push(toAutomatoStandardFilter(d.Platform, 'Platform'))

    if (!objIsEmpty(d.Make))
      res.filters.push(toAutomatoStandardFilter(d.Make, 'Make'))

    if (!objIsEmpty(d.Model))
      res.filters.push(toAutomatoStandardFilter(d.Model, 'Model'))
  }

  return res
}

const toAutomatoActivityFilter = (
  pBehavior: SegmentBehaviors
): ActivityFilter => {
  const attribute =
    pBehavior.Recency.RecencyType === 'ACTIVE' ? 'Active' : 'Inactive'
  return {
    attribute,
    operator: 'During',
    value: toAutomatoActivityFilterValue(
      pBehavior.Recency.Duration as PinpointDuration
    ),
  }
}

const toAutomatoActivityFilterValue = (
  pDuration: PinpointDuration
): ActivityFilterValue => {
  if (pDuration === 'HR_24') {
    return 'last_day'
  } else if (pDuration === 'DAY_7') {
    return 'last_7days'
  } else if (pDuration === 'DAY_14') {
    return 'last_14days'
  } else if (pDuration === 'DAY_30') {
    return 'last_30days'
  }
}

const toAutomatoStandardFilter = (
  pSetDimension: SetDimension,
  attribute: StandardFilterAttribute
): StandardFilter => {
  return {
    attribute,
    operator: pSetDimension.DimensionType === 'INCLUSION' ? 'Is' : 'Is not',

    //TODO: change this
    value: pSetDimension.Values[0],
  }
}
