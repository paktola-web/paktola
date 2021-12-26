// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
const stripe = require('stripe')('sk_test_51Hat3lCVMq9HG80ZtsmhsWfDrDh15XHGjGYva1mFMXUx8MtIdJqZdgIGp1JGl2CyJei5U2nV8QzK8CWBHThsCnaQ00J109CU55');

type Data = {
  //accountLink: string,
  url: string
}

const handler: NextApiHandler = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {

console.log("USER", req.body.user)

const account = await stripe.accounts.create({
  country: 'US',
  type: 'express',
  capabilities: {
    card_payments: {requested: true},
    transfers: {requested: true},
  },
  business_type: 'individual',
});
console.log("*********", account.id)

const result = await stripe.accountLinks.create({
 account: account.id,
  refresh_url: 'http://localhost:3000',
  return_url: 'http://localhost:3000',
  type: 'account_onboarding',
});
console.log("account link", result)
  //return res.status(200).json(result)
  //res.redirect(307, result.url)
  res.json({url: result.url})
}

export default handler
