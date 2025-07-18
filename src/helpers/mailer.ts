import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId,{
        $set:{
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      }
    });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set:{
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      }});
    }

    const key = "bf1a096a40052b7149cf41c279856ced";

    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });
    const mailOptions = {
      from: "akhil@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>click  <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a>
       or copy paste the link in your processor <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`,
    };
    const mailRespone = await transport.sendMail(mailOptions);
    return mailRespone;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
