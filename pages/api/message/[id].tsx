import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/prismaClient";

async function Handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  const id = query.id;

  const message = await client.message.findMany({
    where: {
      id: `${id}`,
    },
  });
  return res.json({
    message: message,
  });
}

export default Handler;
