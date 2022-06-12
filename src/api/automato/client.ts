import { CreateSegmentRequest } from './models'
import { Segment } from '../../components/Segments/models'

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

const automatoApi = {
  createSegment,
}

export default automatoApi
