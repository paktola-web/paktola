import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  console.log("MADE IT TO THE CALLBACK");
  // This will provide an object with the access_token and refresh_token.
  // Save these somewhere safe so they can be used at a later time.
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
};

export default handler;
