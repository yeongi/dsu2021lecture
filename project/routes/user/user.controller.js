var express = require('express');
var router = express.Router();
const pool = require("../../config/dbConfig");

const UserService = require('./user.service');

/* GET home page. */

router.post('/', async (req, res)=> {
  try {   
    const result = await UserService.insertUser(req.body);
    return  res.status(200).json({status:200, data:result, message:"성공"});
  } catch (error) {
    return res.status(200).json({status:500,message:error});
  }
});

router.get('/', async ( req, res)=>{
  try {   
    const result = await UserService.getUserList();
    return  res.status(200).json({status:200, data:result, message:"성공"});
  } catch (error) {
    return res.status(200).json({status:500,message:error});
  }
});

module.exports = router;
