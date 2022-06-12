/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest } from 'next'
import pinpoint from '../pinpoint/client'

export const createSegmentPostHandler = async (
  _req: NextApiRequest
  // res: NextApiResponse
): Promise<{ status: number; json: any }> => {
  // const body: MeilisearchRequestBody = req.body
  try {
    pinpoint.createSegment({})
    return {
      status: 200,
      json: { success: 'Yay!' },
    }
  } catch (err) {
    return {
      status: 500,
      json: { error: 'Error creating segment ;(' },
    }
  }
}
