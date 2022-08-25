import {
  ActivateAccountRequest,
  CreateCampaignRequest,
  CreateSegmentRequest,
} from './models'
import { Segment } from '../../components/Segments/CreateSegment/models'
import { CampaignDetails } from '../../components/Campaigns/CreateCampaign/models/Step5'
import { SegmentsList } from '../../components/Segments/models'
import { UserDetails } from '../../store/models'

const BASE_API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_BASE_API_URL
    : 'http://localhost:3000/api'

const getSegments = async (): Promise<SegmentsList[]> => {
  try {
    const res = await fetch(`${BASE_API_URL}/segments/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resJson = await res.json()
    if (res.status !== 200) {
      throw new Error(resJson.msg)
    }

    return resJson.data as SegmentsList[]
  } catch (err) {
    throw new Error(`Failed getting segments: "${err.message}"`)
  }
}

const getSegment = async (id: string): Promise<Segment> => {
  try {
    const res = await fetch(`${BASE_API_URL}/segment?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resJson = await res.json()
    if (res.status !== 200) {
      throw new Error(resJson.msg)
    }

    return resJson.data as Segment
  } catch (err) {
    throw new Error(`Failed getting segments: "${err.message}"`)
  }
}

const createSegment = async (segment: Segment) => {
  try {
    const reqBody: CreateSegmentRequest = {
      segment,
    }
    const res = await fetch(`${BASE_API_URL}/segments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
    const resJson = await res.json()
    if (res.status !== 201) {
      throw new Error(resJson.msg)
    }
  } catch (err) {
    throw new Error(`Failed creating segment: "${err.message}"`)
  }
}

const createCampaign = async (campaignDetails: CampaignDetails) => {
  try {
    const reqBody: CreateCampaignRequest = {
      campaignDetails,
    }
    const res = await fetch(`${BASE_API_URL}/campaigns/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
    const resJson = await res.json()
    if (res.status !== 201) {
      throw new Error(resJson.msg)
    }
  } catch (err) {
    throw new Error(`Failed creating campaign: "${err.message}"`)
  }
}

const getUserDetails = async (
  supertokensId: string
): Promise<UserDetails | null> => {
  try {
    console.log(`${BASE_API_URL}/user?supertokensid=${supertokensId}`)

    const res = await fetch(
      `${BASE_API_URL}/user?supertokensid=${supertokensId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const resJson = await res.json()
    if (res.status === 404) return null
    if (res.status !== 200) {
      throw new Error(resJson.msg)
    }

    console.log(resJson)
    return resJson.userDetails as UserDetails
  } catch (err) {
    throw new Error(`Failed getting userDetails: "${err}"`)
  }
}

const activateAccount = async (
  supertokensId: string,
  activationCode: string
) => {
  try {
    const reqBody: ActivateAccountRequest = {
      supertokensId,
      activationCode,
    }
    const res = await fetch(`${BASE_API_URL}/user/activate-account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
    const resJson = await res.json()
    if (res.status !== 200) {
      throw new Error(resJson.msg)
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

const automatoApi = {
  getSegments,
  getSegment,
  createSegment,
  createCampaign,
  getUserDetails,
  activateAccount,
}

export default automatoApi
