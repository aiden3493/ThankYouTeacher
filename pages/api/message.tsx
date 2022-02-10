import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/prismaClient";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const message = await client.message.findMany();
  return res.json({
    message: message,
  });
}

export default handler;
