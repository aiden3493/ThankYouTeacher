import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../libs/prismaClient";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;

  const update = await client.message.update({
    where: {
      Name: "이소연",
    },

    data: {
      message: `${query.msg}`,
      photo: `${query.fiels}`,
    },
  });

  return res.json({
    msg: query.msg,
    files: query.files,
  });
}

export default handler;
