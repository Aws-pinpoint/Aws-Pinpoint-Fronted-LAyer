import {
  ActivateAccountRequest,
  CreateCampaignRequest,
  CreateSegmentRequest,
} from './models'
import { Segment } from '../../components/Segments/CreateSegment/models'
import { CampaignDetails } from '../../components/Campaigns/CreateCampaign/models/Step5'
import { SegmentsList } from '../../components/Segments/models'
import { UserDetails } from '../../store/models'
import {
  CampaignsList,
  CustomAttributesList,
} from '../../components/Campaigns/models'
import { ResultRow } from '@aws-sdk/client-pinpoint'

const BASE_API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_BASE_API_URL
    : 'http://localhost:3000/api'

const getCustomAttributes = async (): Promise<CustomAttributesList[]> => {
  try {
    const res = await fetch(`${BASE_API_URL}/customAttributes/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resJson = await res.json()
    if (res.status !== 200) {
      throw new Error(resJson.msg)
    }

    return resJson.data as CampaignsList[]
  } catch (err) {
    throw new Error(`Failed getting customAttributes: "${err.message}"`)
  }
}

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

const getCampaigns = async (): Promise<CampaignsList[]> => {
  try {
    const res = await fetch(`${BASE_API_URL}/campaigns/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resJson = await res.json()
    if (res.status !== 200) {
      throw new Error(resJson.msg)
    }

    return resJson.data as CampaignsList[]
  } catch (err) {
    throw new Error(`Failed getting campaigns: "${err.message}"`)
  }
}

const getCampaign = async (id: string): Promise<CampaignDetails> => {
  try {
    const res = await fetch(`${BASE_API_URL}/campaign?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resJson = await res.json()
    if (res.status !== 200) {
      throw new Error(resJson.msg)
    }

    return resJson.data as CampaignDetails
  } catch (err) {
    throw new Error(`Failed getting campaigns: "${err.message}"`)
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

const getAnalytics = async (
  kpi: string,
  from: Date,
  to: Date
): Promise<ResultRow[]> => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/analytics?kpi=${encodeURIComponent(
        kpi
      )}&from=${encodeURIComponent(from.toISOString())}&to=${encodeURIComponent(
        to.toISOString()
      )}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const resJson = await res.json()
    if (res.status !== 200) {
      throw new Error(resJson.msg)
    }

    return resJson.data
  } catch (err) {
    throw new Error(`Failed getting campaigns: "${err.message}"`)
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
  getAnalytics,
  getSegments,
  getSegment,
  getCustomAttributes,
  createSegment,
  getCampaign,
  getCampaigns,
  createCampaign,
  getUserDetails,
  activateAccount,
}

export default automatoApi
