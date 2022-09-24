import nodemailer from 'nodemailer'
import config from './config'

export default async function sendClientFormData(values) {
  values.submitted = new Date().toLocaleString()

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: config.user,
      pass: config.password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  transporter
    .sendMail({
      from: config.sender,
      to: config.customerEmail,
      subject: `New Form Submission on ${config.customerDomain}`,
      text: `
      Somebody submitted a form on ${config.customerDomain}! \n
      The following data was submitted \n
      ${Object.keys(values).map((k, i) => `${k}: ${values[k]} \n`)} 
      If the data submitted appears to be spam please notify our response team at response@mysite.com
     `,
      html: `
      <h1>Somebody submitted a form on ${config.customerDomain}!</h1><br/>
      <h3>The following information was submitted</h3>
      ${Object.keys(values).map(
        (k, i) =>
          `<span style="font-size: 18px;"><b>${k}:</b> ${values[k]} <br/></span>`
      )}
      <p style="margin-top: 50px">If the data submitted appears to be spam please notify our response team at response@mysite.com</p>    
     `,
    })
    .then((r) => {
      return { sent: true }
    })
    .catch((e) => {
      return { error: `Failed to send: ${e}` }
    })
}
