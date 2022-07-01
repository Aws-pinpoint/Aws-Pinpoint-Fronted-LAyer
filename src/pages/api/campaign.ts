import { NextApiRequest, NextApiResponse } from 'next'
import { getCampaignGETHandler } from '../../api/automato/server'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const r = await getCampaignGETHandler(req)
    res.status(r.status).json(r.json)
  } else {
    res.status(501).json({ msg: 'Not implemented' })
  }
}
