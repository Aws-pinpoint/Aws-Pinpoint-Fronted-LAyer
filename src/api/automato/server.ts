/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest } from 'next'
import pinpoint from '../pinpoint/client'
import postgres from '../postgres/client'
import {
  ActivateAccountRequest,
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

export const userGETHandler = async (
  req: NextApiRequest
  // res: NextApiResponse
): Promise<HandlerRes> => {
  try {
    const supertokensId = req.query.supertokensid as string
    const userDetails = await postgres.getUserBySupertokensId(supertokensId)

    if (userDetails === null)
      return {
        status: 404,
        json: { msg: 'User does not exist by this supertokensId' },
      }

    return {
      status: 200,
      json: { userDetails },
    }
  } catch (err) {
    console.error(err)
    return {
      status: 500,
      json: { msg: 'Error getting account ;(' },
    }
  }
}

export const userActivateAccountPOSTHandler = async (
  req: NextApiRequest
  // res: NextApiResponse
): Promise<HandlerRes> => {
  try {
    const reqBody = req.body as ActivateAccountRequest
    const userDetails = await postgres.getUserBySupertokensId(
      reqBody.supertokensId
    )

    if (userDetails === null)
      return {
        status: 404,
        json: { msg: 'User does not exist by this supertokensId' },
      }
    if (userDetails.activeAccount)
      return {
        status: 400,
        json: { msg: 'User is already active' },
      }

    const ok = await postgres.activateAccount(
      reqBody.supertokensId,
      reqBody.activationCode
    )

    if (!ok)
      return {
        status: 400,
        json: { msg: 'Invalid activation code' },
      }

    // Create pinpoit project
    const pinpointProjectId = await pinpoint.createProject(
      `automato~${userDetails.supertokensId}`
    )

    // Set pinpoint project id in user table
    const ok2 = await postgres.addPinpointProjectIdToAccount(
      userDetails.supertokensId,
      pinpointProjectId
    )
    if (!ok2)
      return {
        status: 500,
        json: { msg: '[E001] Error activating account' },
      }

    return {
      status: 200,
      json: { msg: 'Account activated!' },
    }
  } catch (err) {
    console.error(err)
    return {
      status: 500,
      json: { msg: '[E000] Error activating account' },
    }
  }
}
