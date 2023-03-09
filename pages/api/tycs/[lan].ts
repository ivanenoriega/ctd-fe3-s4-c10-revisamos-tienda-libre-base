import { NextApiRequest, NextApiResponse } from "next";
import { isString } from "util";
import { locales } from "../../../locale/constants";
import { tycs } from "../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { lan } = req.query;

  // Validate Language
  if (
    !lan ||
    !isString(lan) ||
    !Object.values(locales).includes(lan as string)
  ) {
    return res.status(400).json({
      error: "Invalid Language",
    });
  }

  res.status(200).json(tycs[lan]);
}
