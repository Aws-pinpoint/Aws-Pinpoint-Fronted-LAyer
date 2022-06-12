import {
  WriteSegmentRequest,
  SegmentGroup as PinpointSegmentGroup,
  SegmentDimensions,
} from '@aws-sdk/client-pinpoint'
import {
  GroupsLogic,
  SegmentGroup,
  Criteria,
} from '../../components/Segments/models'

export const toWriteSegmetRequest = (
  segmentName: string,
  segmentGroupsLogic: GroupsLogic,
  srcSegmentGroups: SegmentGroup[]
): WriteSegmentRequest => {
  const pinpointSegmentGroups: PinpointSegmentGroup[] = srcSegmentGroups.map(
    srcSegmentGroup => toPinpointSegmentGroup(srcSegmentGroup)
  )

  const sgInclude = toPinpointInclusion(segmentGroupsLogic)
  const res: WriteSegmentRequest = {
    Name: segmentName,
    SegmentGroups: {
      Groups: pinpointSegmentGroups,
      Include: sgInclude,
    },
  }

  return res
}

type PinpointInclusion = 'any' | 'all' | 'none'
const toPinpointInclusion = (x: GroupsLogic): PinpointInclusion => {
  if (x === 'AND') {
    return 'any'
  } else if (x === 'OR') {
    return 'all'
  } else return 'none'
}

const toPinpointSegmentGroup = (
  srcSegmentGroup: SegmentGroup
): PinpointSegmentGroup => {
  const sgSourceType = srcSegmentGroup.includeAudiences
  const sgType = toPinpointInclusion(srcSegmentGroup.criteriasLogic)
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
  return {
    Attributes: {
      Platform: { Values: [], AttributeType: '' },
    },
  }
}
