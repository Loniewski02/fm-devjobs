"use server";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function fetchAllJobs() {
  try {
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchSingleJob(id: string) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
