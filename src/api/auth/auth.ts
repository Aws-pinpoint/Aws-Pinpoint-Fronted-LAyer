import { NextApiRequest, NextApiResponse } from 'next'
import { SessionRequest } from 'supertokens-node/framework/express'
import { superTokensNextWrapper } from 'supertokens-node/nextjs'
import { verifySession } from 'supertokens-node/recipe/session/framework/express'
import postgres from '../postgres/client'

export const authorize = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<string> => {
  // Supertokens authorization
  const spReq = req as unknown as SessionRequest
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spRes = res as unknown as any
  await superTokensNextWrapper(
    async next => {
      await verifySession()(
        spReq,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        spRes,
        next
      )
    },
    spReq,
    spRes
  )

  // Automato / Pinpoint authorization
  const supertokensId = spReq.session!.getUserId()
  const { activeAccount, pinpointProjectId } =
    await postgres.getAccountActiveStatusAndPinpointProjectId(supertokensId)
  if (!activeAccount) {
    res.status(403).json({ msg: 'Account not activated' })
  }

  return pinpointProjectId
}
