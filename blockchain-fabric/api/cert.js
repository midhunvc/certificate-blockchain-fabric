var log4js = require("log4js");
var logger = log4js.getLogger("SampleWebApp");
const cert = require('./db/models/cert');
const gdb = require('./db/models/cpadata');
const mongo = require('mongoose');

const applyCert = async (body)=> {
    return new Promise((resolve, reject) => {
        const db = "mongodb://localhost:27017/CertificateVerification";
        mongo.connect(db,{useNewUrlParser:true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })
        .then(async () => {
            console.log("Database Connected!!");
            const newcert =  new cert({
                name: body.name,
                age: body.age,
                email: body.email,
                provider: body.provider,
                owner: body.owner,
                type: body.type
            });
            newcert.save().then(item => resolve(item)).catch(err => reject(err));
        }).catch((error)=>{reject(error)});
    });
}

const pendingCert = async ()=> {
    return new Promise((resolve, reject) => {
        const db = "mongodb://localhost:27017/CertificateVerification";
        mongo.connect(db,{useNewUrlParser:true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })
        .then(async () => {
            const pendingcerts = await cert.find({status: 0})
           if(!pendingcerts){
              reject({"status" : "no pending certificats"});
           }
           console.log(pendingcerts);
           resolve(pendingcerts);       
        }).catch((error)=>{reject(error)});
    });
}

const approvedCert = async ()=> {
    return new Promise((resolve, reject) => {
        const db = "mongodb://localhost:27017/CertificateVerification";
        mongo.connect(db,{useNewUrlParser:true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })
        .then(async () => {
            const approvedcerts = await cert.find({status: 1})
           if(!approvedcerts){
              reject({"status" : "no rejected certificats"});
           }
           console.log(approvedcerts);
           resolve(approvedcerts);       
        }).catch((error)=>{reject(error)});
    });
}

const nameCert = async ()=> {
    return new Promise((resolve, reject) => {
        const db = "mongodb://localhost:27017/CertificateVerification";
        mongo.connect(db,{useNewUrlParser:true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })
        .then(async () => {
            const namecerts = await cert.findOne({name})
           if(!namecerts){
              reject({"status" : "no such certificate"});
           }
           console.log(namecerts);
           resolve(namecerts);       
        }).catch((error)=>{reject(error)});
    });
}

const rejectedCert = async ()=> {
    return new Promise((resolve, reject) => {
        const db = "mongodb://localhost:27017/CertificateVerification";
        mongo.connect(db,{useNewUrlParser:true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })
        .then(async () => {
            const rejectedcerts = await cert.find({status: -1})
           if(!rejectedcerts){
              reject({"status" : "no approved certificats"});
           }
           console.log(rejectedcerts);
           resolve(rejectedcerts);       
        }).catch((error)=>{reject(error)});
    });
}

const approve = async (body) =>{
    return new Promise((resolve,reject) => {
        const db = "mongodb://localhost:27017/CertificateVerification";
        mongo.connect(db,{useNewUrlParser:true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })
        .then(async () => {
            console.log({name: body.args[0], age: body.args[1], email: body.args[2], provider: body.args[3]});
            const info = await gdb.findOne({name: body.args[0], age: body.args[1], email: body.args[2]})
            .catch((error) => {
                reject(false)
            });
           if(!info)
              reject(false);
           else {
                const data = await cert.findOneAndUpdate({name: body.args[0], age: body.args[1], email: body.args[2]}, { $set: {status : 1} },{new: true, passRawResult: true, useFindAndModify:false}).catch((error) => { reject(error); });
               if(!data)
                  reject(false)
               else {
                resolve(true);       
               }
           }
         }).catch((error)=>{reject(error)});
    });
}

const reject = async () =>{
    return new Promise((resolve,reject) => {
        const db = "mongodb://localhost:27017/CertificateVerification";
        mongo.connect(db,{useNewUrlParser:true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })
        .then(async () => {
            const info = await cert.findOneAndUpdate({name: body.name, age: body.age, email: body.email, provider: body.provider}, { $set: {status : -1} },{new: true, passRawResult: true, useFindAndModify:false}).catch((error) => { reject(error); });
            if(!info)
              reject({"status" : "Invalid certificate details"});
           else {
            console.log(info);
            resolve(info);        
           }
        }).catch((error)=>{reject(error)});
    });
}

module.exports = {
    applyCert: applyCert,
    pendingCert: pendingCert,
    approvedCert: approvedCert,
    rejectedCert: rejectedCert,
    approve: approve,
    reject: reject,
    nameCert: nameCert
}