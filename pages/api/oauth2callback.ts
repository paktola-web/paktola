import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

type Data = {
  code: string;
};

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  console.log("MADE IT TO THE CALLBACK");
};

export default handler;
