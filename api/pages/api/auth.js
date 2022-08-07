import { PrismaClient } from '@prisma/client'

export default function handler(req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      status: 'Please provide username and password'
    })
  }
  const prisma = new PrismaClient()
  const findAccount = async (username, password) => {
    const account = await prisma.account.findFirst({
      where: {
        username,
        password: password,
      },
    })
    if (!account) {
      return res.json({
        status: 'error authentication failed'
      })
    } else {
      return res.json({
        status: 'authorized',
        accountAuthorized: username
      })
    }
  }
  findAccount(req.body.username, req.body.password)
}
