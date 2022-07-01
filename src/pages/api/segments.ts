import { NextApiRequest, NextApiResponse } from 'next'
import {
  createSegmentPOSTHandler,
  getSegmentsGETHandler,
} from '../../api/automato/server'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const r = await getSegmentsGETHandler()
    res.status(r.status).json(r.json)
  } else if (req.method === 'POST') {
    const r = await createSegmentPOSTHandler(req)
    res.status(r.status).json(r.json)
  } else {
    res.status(501).json({ msg: 'Not implemented' })
  }
}
