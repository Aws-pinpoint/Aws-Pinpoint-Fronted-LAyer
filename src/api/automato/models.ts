import { Segment } from '../../components/Segments/models'

export interface CreateSegmentRequest {
  segment: Segment
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HandlerRes = { status: number; json: any }
