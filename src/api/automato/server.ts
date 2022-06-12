/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest } from 'next'
import pinpoint from '../pinpoint/client'
import { CreateSegmentRequest } from './models'

export const createSegmentPostHandler = async (
  req: NextApiRequest
  // res: NextApiResponse
): Promise<{ status: number; json: any }> => {
  const reqBody: CreateSegmentRequest = req.body
  try {
    pinpoint.createSegment(reqBody.segment)
    return {
      status: 201,
      json: { success: 'Segment created!' },
    }
  } catch (err) {
    return {
      status: 500,
      json: { error: 'Error creating segment ;(' },
    }
  }
}
