import { emailReg, phoneReg } from "@/utils/constant";

export async function POST(req: any) {
  let res: ApplyData | null;

  const data = await req.formData();
  const name = data.get("name");
  const lastName = data.get("last-name");
  const email = data.get("email");
  const phone = data.get("phone");
  const resume = data.get("resume");
  const coverLetter = data.get("cover-letter");

  if (
    !(name.trim().length > 1) ||
    !(lastName.trim().length > 1) ||
    !emailReg.test(email) ||
    !(coverLetter.trim().length > 99) ||
    !resume ||
    !(phone === "" || phoneReg.test(phone))
  ) {
    res = null;
  } else {
    res = {
      status: "success",
      data: {
        name: name,
        "last-name": lastName,
        email: email,
        phone: phone,
        resume: resume,
        "cover-letter": coverLetter,
      },
    };
  }

  return Response.json(res);
}
