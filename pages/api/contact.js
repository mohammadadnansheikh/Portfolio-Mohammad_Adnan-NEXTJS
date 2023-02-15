// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodemailer";



const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `${CONTACT_MESSAGE_FIELDS[key]}:\n${val}\n \n}`);
  }, "");
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1><p>${val}</p>`);
  }, "");
  return {
    text: stringData,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Contact Form</h1>
        <div>
            ${htmlData}
        </div>
    </body>
    </html>`,
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ message: "Bad Request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
      });
      return res.status(200).json({ message: "success" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad Request" });
};
export default handler;
