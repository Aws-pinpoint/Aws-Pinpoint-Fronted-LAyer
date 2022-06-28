import { CreateCampaignRequest, CreateSegmentRequest } from './models'
import { Segment } from '../../components/Segments/models'
import { CampaignDetails } from '../../components/Campaigns/CreateCampaign/models/Step5'

const BASE_API_URL = 'http://localhost:3000/api'

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
    const resMsg = await res.json()
    if (res.status !== 201) {
      throw new Error(resMsg.error)
    }
  } catch (err) {
    throw new Error(`Failed creating segment: "${err}"`)
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
    const resMsg = await res.json()
    if (res.status !== 201) {
      throw new Error(resMsg.error)
    }
  } catch (err) {
    throw new Error(`Failed creating segment: "${err}"`)
  }
}

const automatoApi = {
  createSegment,
  createCampaign,
}

export default automatoApi
