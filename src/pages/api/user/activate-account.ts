import { NextApiRequest, NextApiResponse } from 'next'
import { userActivateAccountPOSTHandler } from '../../../api/automato/server'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const r = await userActivateAccountPOSTHandler(req, res)
    res.status(r.status).json(r.json)
  } else {
    res.status(501).json({ msg: 'Not implemented' })
  }
}
