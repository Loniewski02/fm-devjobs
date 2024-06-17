"use server";
import nodemailer from "nodemailer";

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

export async function FormSubmit(
  prevState: any,
  formData: any,
  id: number,
  company: string,
  position: string,
) {
  const res = await fetch(`${apiDomain}/${id}/apply`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (!data) return prevState;

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const lastName = formData.get("last-name");
  const resume = formData.get("resume");
  const coverLetter = formData.get("cover-etter");

  if (!process.env.EMAIL || !process.env.PASS) return prevState;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const content = `Hi ${name}, <br /><br />
      Thank you for applying to the ${position} position at ${company}.<br /><br />
      I’d like to inform you that we received your application. Our hiring team is currently reviewing all applications. If you are among qualified candidates, you will receive an email from one of our recruiters to schedule a short phone interview. <br /><br />
      In any case, we will keep you posted on the status of your application.<br /><br />
      Thank you, again, for taking the time to apply for this role at ${company}.<br /><br />
      Best regards, <br />
      <a href="https://miloszloniewski-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer"><i>Loniewski02</i></a>
    `;

  const info = {
    from: process.env.EMAIL,
    to: email,
    subject: `${company} | ${position}`,
    html: content,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(info, (err) => {
      if (err) {
        console.error("Error: ", err);
        reject(err);
      } else {
        resolve(null);
      }
    });
  });

  return data;
}
