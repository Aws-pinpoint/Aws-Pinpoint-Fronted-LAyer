import { NextApiRequest, NextApiResponse } from 'next'
import { createSegmentPostHandler } from '../../api/server/handlers'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const r = await createSegmentPostHandler(req)
    res.status(r.status).json(r.json)
  } else {
    res.status(501).json({ error: 'Not implemented' })
  }
}
