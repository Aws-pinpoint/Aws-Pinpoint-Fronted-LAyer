/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest } from 'next'
import { defaultCampaign } from '../../components/Campaigns/CreateCampaign/models/models'
import pinpoint from '../pinpoint/client'
import { CreateSegmentRequest, HandlerRes } from './models'

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
      json: { success: 'Segment created!' },
    }
  } catch (err) {
    return {
      status: 500,
      json: { error: 'Error creating segment ;(' },
    }
  }
}

// POST `/api/campaigns`
export const createCampaignPOSTHandler = async (
  _req: NextApiRequest
  // res: NextApiResponse
): Promise<HandlerRes> => {
  // const reqBody: CreateSegmentRequest = req.body
  try {
    await pinpoint.createCampaign(defaultCampaign)
    return {
      status: 201,
      json: { success: 'Campaign created!' },
    }
  } catch (err) {
    console.error(err)
    return {
      status: 500,
      json: { error: 'Error creating campaign ;(' },
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
      json: { success: 'Campaign got!' },
    }
  } catch (err) {
    return {
      status: 500,
      json: { error: 'Error getting campaign ;(' },
    }
  }
}
