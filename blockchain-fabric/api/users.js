var log4js = require("log4js");
var logger = log4js.getLogger("SampleWebApp");
const user = require('./db/models/user');
const mongo = require('mongoose');
const md5 = require("md5");

const register = async (body,orgName)=> {
    return new Promise((resolve, reject) => {
        const db = "mongodb://localhost:27017/CertificateVerification";
        mongo.connect(db,{useNewUrlParser:true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })
        .then(async () => {
            console.log(body);
            if(body.role === "student"){
                console.log("Database Connected!!-student");
                const newstudent =  new user({
                    firstName: body.firstName,
                    middleName: body.middleName,
                    lastName: body.lastName,
                    email: body.email,
                    phoneNumber: body.phoneNumber,
                    password: md5(body.password),
                    role: body.role,
                    orgName: orgName
                });
                newstudent.save().then(item => resolve(item)).catch(err => reject(err));
            }
            else{
                console.log("Database Connected!!");
                const newcompany =  new user({
                    companyName: body.companyName,
                    email: body.email,
                    password: md5(body.password),
                    orgName: orgName,
                    role: body.role
                });
                newcompany.save().then(item => resolve(item)).catch(err => reject(err));
            }
        })
        .catch((error)=>{reject(error)});
    });
}

 const login = (body) => {
     return new Promise( async (resolve,reject) => {
        const db = "mongodb://localhost:27017/CertificateVerification"
        mongo.connect(db,{useNewUrlParser:true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })
        .then(async ()=>{
            console.log("Database Connected!!")
            const info = await user.findOne({email: body.email}).catch((error) => { reject(error) });
            if(!info){
                let response = {};
                response.message = "user does not exists";
                response.status = "failure";
                reject(response);
            }
           else{
               if(info.password === md5(body.password))
                    resolve(info);
               else{
                let response = {};
                response.message = "Passwords dont match";
                response.status = "failure";
                reject(response);
               }
           }
        })
        .catch((error)=>{
            console.log(error);
            reject(error);
        });
    });
 }
module.exports = {
    register: register,
    login: login
}