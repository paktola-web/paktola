// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
const stripe = require('stripe')('sk_test_51Hat3lCVMq9HG80ZtsmhsWfDrDh15XHGjGYva1mFMXUx8MtIdJqZdgIGp1JGl2CyJei5U2nV8QzK8CWBHThsCnaQ00J109CU55');

type Data = {
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
  // this will be the url for the influencers link to share
  //business_profile: {url: 'https://example.com'},
});

const result = await stripe.accountLinks.create({
 account: account.id,
  refresh_url: 'https://paktola.com/influencer/dashboard',
  return_url: 'https://paktola.com/influencer/dashboard',
  type: 'account_onboarding',
});
  res.json({url: result.url})
}

export default handler
