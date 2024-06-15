import type { NextApiRequest } from "next";

import connectDB from "@/config/database";
import Job from "@/models/Job";

// GET /api
export const GET = async (req: NextApiRequest) => {
  try {
    await connectDB();

    const devjobs = await Job.find({});

    return new Response(JSON.stringify(devjobs), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
