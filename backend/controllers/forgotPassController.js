const Sib = require('sib-api-v3-sdk');
require('dotenv').config()

exports.forgotPassword = async(req,res) => {
    try{

        
        const client = Sib.ApiClient.instance

        const apiKey = client.authentications['api-key']
        apiKey.apiKey = process.env.FORGOT_PASS_API_KEY;
        const tranEmailApi =  new Sib.TransactionalEmailsApi()

        const sender = {
            email: 'mufeedppm@gmail.com'
        }

        const receivers = [
            {
                email: req.body.email
            },
        ]
        
        
        const data = await tranEmailApi.sendTransacEmail({
            sender,
            to: receivers,
            subject:'Forgot Password',
            textContent:`777777`
        })
        res.status(200).json({data:data})

    }catch(err){
        console.log('ERROR IN FORGOT PASS',err);

        throw new Error(JSON.stringify(err))
    }
}