/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from 'next'
import { authorize } from '../auth/auth'
import cognito from '../cognito/client'
import pinpoint from '../pinpoint/client'
import postgres from '../postgres/client'
import {
  ActivateAccountRequest,
  CreateCampaignRequest,
  CreateSegmentRequest,
  HandlerRes,
} from './models'

// GET `/api/segments`
export const getSegmentsGETHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<HandlerRes> => {
  try {
    const pinpointProjectId = await authorize(req, res)

    const segments = await pinpoint.getSegments(pinpointProjectId)
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

// GET `/api/segment/<id>`
export const getSegmentGETHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<HandlerRes> => {
  try {
    const pinpointProjectId = await authorize(req, res)
    const segmentId = req.query.id as string

    const automatoSegment = await pinpoint.getSegment(
      pinpointProjectId,
      segmentId
    )
    return {
      status: 200,
      json: { msg: 'Segment got!', data: automatoSegment },
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
  req: NextApiRequest,
  res: NextApiResponse
): Promise<HandlerRes> => {
  try {
    const pinpointProjectId = await authorize(req, res)
    const reqBody: CreateSegmentRequest = req.body

    await pinpoint.createSegment(pinpointProjectId, reqBody.segment)
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

// GET `/api/campaigns`
export const getCampaignsGETHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<HandlerRes> => {
  try {
    const pinpointProjectId = await authorize(req, res)

    const campaignsList = await pinpoint.getCampaigns(pinpointProjectId)
    return {
      status: 200,
      json: { msg: 'Campaigns got!', data: campaignsList },
    }
  } catch (err) {
    return {
      status: 500,
      json: { msg: 'Error getting campaigns ;(' },
    }
  }
}

// GET `/api/campaign`
export const getCampaignGETHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<HandlerRes> => {
  try {
    const pinpointProjectId = await authorize(req, res)

    const id = req.query.id as string
    const campaignDetails = await pinpoint.getCampaign(pinpointProjectId, id)
    return {
      status: 200,
      json: { msg: 'Campaign got!', data: campaignDetails },
    }
  } catch (err) {
    return {
      status: 500,
      json: { msg: 'Error getting campaign ;(' },
    }
  }
}

// POST `/api/campaigns`
export const createCampaignPOSTHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<HandlerRes> => {
  try {
    const pinpointProjectId = await authorize(req, res)

    const reqBody: CreateCampaignRequest = req.body
    await pinpoint.createCampaign(pinpointProjectId, reqBody.campaignDetails)
    return {
      status: 201,
      json: { msg: 'Campaign created!' },
    }
  } catch (err) {
    console.error(err.message)
    return {
      status: 500,
      json: { msg: err.message },
    }
  }
}

export const userGETHandler = async (
  req: NextApiRequest,
  _res: NextApiResponse
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
  req: NextApiRequest,
  _res: NextApiResponse
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
      `automato-${userDetails.supertokensId}`
    )
    const cognitoIdentityPoolId = await cognito.createIdentityPool(
      `automato-${userDetails.supertokensId}`
    )

    // Set pinpoint project id in user table
    const ok2 = await postgres.addAWScongigsToAccount(
      userDetails.supertokensId,
      pinpointProjectId,
      cognitoIdentityPoolId
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
