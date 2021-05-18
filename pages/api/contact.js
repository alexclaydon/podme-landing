const sgMail = require('@sendgrid/mail')

export default function handler(req, res) {
  let message = JSON.parse(req.body);
  sgMail.setApiKey(process.env.sendgrid_contact_key)
  message.from = process.env.sendgrid_contact_email; // Reciever will reply to this email address

  sgMail
    .send(message)
    .then(() => {
      res.end("Submitted successfully");
    })
    .catch((error) => {
      console.error(error)
      res.end("Error submitting form");
    })

    res.end();
}
