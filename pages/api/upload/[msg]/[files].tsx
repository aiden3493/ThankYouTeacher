import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../libs/prismaClient";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  var json = query.files as Prisma.JsonArray;

  await client.message.update({
    where: {
      Name: "이소연",
    },

    data: {
      message: `${query.msg}`,
      photo: `${json}`,
    },
  });

  return res.json({
    msg: query.msg,
    files: json,
  });
}

export default handler;
