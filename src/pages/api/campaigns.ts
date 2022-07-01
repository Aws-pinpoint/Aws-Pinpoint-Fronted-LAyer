import { NextApiRequest, NextApiResponse } from 'next'
import { createCampaignPOSTHandler } from '../../api/automato/server'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const r = await createCampaignPOSTHandler(req)
    res.status(r.status).json(r.json)
  } else {
    res.status(501).json({ msg: 'Not implemented' })
  }
}
