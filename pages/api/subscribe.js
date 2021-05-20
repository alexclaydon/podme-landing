var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = process.env.sendinblue_key;
let apiInstance = new SibApiV3Sdk.ContactsApi()

export default function handler(req, res) {
  let createContact = new SibApiV3Sdk.CreateContact()
  createContact.email = req?.query?.email;

  return new Promise(async (resolve, reject) => {
    apiInstance.createContact(createContact).then(
      (response) => {
        res.status(200).end(JSON.stringify(response))
        resolve();
      },
      (error) => {
        res.status(400).end(JSON.stringify(error))
        return resolve();
      }
    )
  });
  
}
