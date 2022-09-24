const config = {
  user: process.env.NODEMAILER_USER,
  password: process.env.NODEMAILER_PW,
  sender: process.env.NODEMAILER_SENDER,
  customerEmail: process.env.CUSTOMER_EMAIL,
  customerDomain: process.env.CUSTOMER_DOMAIN,
}

export default config
