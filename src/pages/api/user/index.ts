import { NextApiRequest, NextApiResponse } from 'next'
import { userGETHandler } from '../../../api/automato/server'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const r = await userGETHandler(req)
    res.status(r.status).json(r.json)
  } else {
    res.status(501).json({ msg: 'Not implemented' })
  }
}
