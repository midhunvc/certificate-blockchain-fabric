var log4js = require("log4js");
const gdb = require('./db/models/gdb');
const mongo = require('mongoose');

const exist = async (req,res,next) => {
    try {

    }
    catch (error) {
        res.send({response:{status:"400",}})
    }
}