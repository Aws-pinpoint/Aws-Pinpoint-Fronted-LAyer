/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest } from 'next'
import pinpoint from '../pinpoint/client'
import {
  CreateCampaignRequest,
  CreateSegmentRequest,
  HandlerRes,
} from './models'

// GET `/api/segments`
export const getSegmentsGETHandler = async (): Promise<HandlerRes> => {
  try {
    const segments = await pinpoint.getSegments()
    return {
      status: 200,
      json: { msg: 'Segments got!', data: segments },
    }
  } catch (err) {
    return {
      status: 500,
      json: { msg: 'Error getting segments ;(' },
    }
  }
}

// POST `/api/segments`
export const createSegmentPOSTHandler = async (
  req: NextApiRequest
  // res: NextApiResponse
): Promise<HandlerRes> => {
  const reqBody: CreateSegmentRequest = req.body
  try {
    await pinpoint.createSegment(reqBody.segment)
    return {
      status: 201,
      json: { msg: 'Segment created!' },
    }
  } catch (err) {
    return {
      status: 500,
      json: { msg: 'Error creating segment ;(' },
    }
  }
}

// POST `/api/campaigns`
export const createCampaignPOSTHandler = async (
  req: NextApiRequest
  // res: NextApiResponse
): Promise<HandlerRes> => {
  const reqBody: CreateCampaignRequest = req.body
  try {
    await pinpoint.createCampaign(reqBody.campaignDetails)
    return {
      status: 201,
      json: { msg: 'Campaign created!' },
    }
  } catch (err) {
    console.error(err)
    return {
      status: 500,
      json: { msg: 'Error creating campaign ;(' },
    }
  }
}

// GET `/api/campaigns`
export const getCampaignGETHandler = async (
  req: NextApiRequest
  // res: NextApiResponse
): Promise<HandlerRes> => {
  const id = req.query.id as string
  try {
    console.log('id ->', id)
    await pinpoint.getCampaign(id)
    return {
      status: 201,
      json: { msg: 'Campaign got!' },
    }
  } catch (err) {
    return {
      status: 500,
      json: { msg: 'Error getting campaign ;(' },
    }
  }
}
