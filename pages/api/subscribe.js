var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.sendinblue_key;
let apiInstance = new SibApiV3Sdk.ContactsApi()

export default function handler(req, res) {
  let createContact = new SibApiV3Sdk.CreateContact()
  createContact.email = JSON.parse(req.body);

  apiInstance.createContact(createContact).then((data) => {
    res.end('Submitted successfully')
  }, (error) => {
    console.error(error);
    res.end(error)
  });

  res.end()
}
