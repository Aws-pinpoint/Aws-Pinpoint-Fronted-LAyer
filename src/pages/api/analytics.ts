import { NextApiRequest, NextApiResponse } from 'next'
import { authorize } from '../../api/auth/auth'
import pinpoint from '../../api/pinpoint/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const pinpointProjectId = await authorize(req, res)
      const analytics = await pinpoint.getAnalytics(
        pinpointProjectId,
        req.query.kpi as string,
        new Date(req.query.from as string),
        new Date(req.query.to as string)
      )
      res.status(200).json({ msg: 'Analytics got!', data: analytics })
    } catch (err) {
      res.status(500).json({ msg: 'Error getting Analytics ;(' })
    }
  } else {
    res.status(501).json({ msg: 'Not implemented' })
  }
}
