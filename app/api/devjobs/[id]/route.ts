import connectDB from "@/config/database";
import Job from "@/models/Job";
import { NextRequest } from "next/server";

// GET /api/[id]
export const GET = async (
  req: Request | NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    await connectDB();

    const jobDetail = await Job.findById(params.id);

    return new Response(JSON.stringify(jobDetail), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
