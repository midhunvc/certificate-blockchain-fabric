
var log4js = require("log4js");
var logger = log4js.getLogger("SampleWebApp");
const cpadata = require('./db/models/cpadata');
const mongo = require('mongoose');

const certData = async (body)=> {
    return new Promise((resolve, reject) => {
        const db = "mongodb://localhost:27017/CertificateVerification";
        mongo.connect(db,{useNewUrlParser:true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })
        .then(async () => {
            console.log("Database Connected!!");
            const certdata =  new cpadata({
                name: body.name,
                age: body.age,
                email: body.email,
                provider: body.provider,
                owner: body.owner,
                type: body.type
            });
            certdata.save().then(item => resolve(item)).catch(err => reject(err));
        }).catch((error)=>{reject(error)});
    });
}

module.exports =  { certData: certData }