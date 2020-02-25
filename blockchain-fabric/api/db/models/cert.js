const validator = require('validator');
const mongo = require('mongoose');

const Schema = mongo.Schema;
const CertSchema = new Schema({
    name: {
        type: String,
        required:true,
        validate(value){
            if(!validator.isAlpha(value))
                throw new Error("Last name is Invalid");
        }
    },
    age: {
        type: String,
        required:true,
        validate(value){
            if(!validator.isNumeric(value))
                throw new Error("Age should be a number");
        }
    },
    email: {
        type: String,
        required:true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("Email is Invalid");
        }
    },
    yearofReceival: {
        type: String
    },    
    provider: {
        type: String,
        required:true,
        validate(value){
            if(!validator.isAlpha(value))
                throw new Error("Last name is Invalid");
        }
    },
    status: {
        type: Number,
        default: 0
    },
    owner: {
        type: String,
        required:true,
        validate(value){
            if(!validator.isAlpha(value))
                throw new Error("Last name is Invalid");
        }
    },
    type: {
        type: String,
        required:true,
        validate(value){
            if(!validator.isAlpha(value))
                throw new Error("Last name is Invalid");
        }
    }
});

module.exports = mongo.model('certs',CertSchema);