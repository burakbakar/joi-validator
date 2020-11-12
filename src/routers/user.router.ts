import express from 'express'
import Joi from 'joi'
import * as testController from '../controllers/joi.controller'



const router = express.Router();

const schema = Joi.object({

  name: Joi.string()
        .min(3)
        .max(25),

  lastname: Joi.string()
        .min(3)
        .max(25),

  fathersname: Joi.string()
        .min(3)
        .max(25),

  mothersname: Joi.string()
        .min(3)
        .max(25),
        
  email : Joi.string()
        .email(),

  username : Joi.string()
        .min(3)
        .max(25),

  password : Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  age : Joi.number()
        .positive()
        .integer(),

  city : Joi.string(),

  country : Joi.string(),

  birthday : Joi.date(),

  identification : Joi.number()
        .min(11),
  
  telephone : Joi.number()
        .integer(),

  domain : Joi.string()
        .domain(),

          
  mac : Joi.string(),

  firstDate : Joi.date(),

  lastDate : Joi.date(),

  profession : Joi.equal('engineer'),

  salary : Joi.number(),


})

schema.validate({ name: 'ab', lastname: 'faw' });

console.time("Result Time: ");

try {
  const value =  schema.validateAsync({ 
    name: 'a3c', 
    lastname: "awd" ,
    fathersname : "deneme",
    mothersname : "deneme",
    email : "asfasdq@fasda.com",
    username : "sadaw124fasd",
    password : "1251dad",
    age : 12,
    city : "izmir",
    country : "turkey",
    birthday : "2020-10-10",
    identification : 89645235684,
    telephone : 5555555555,
    domain : "www.google.com",
    mac : "12:ab:42:fc:12",
    firstDate : "2020-01-01",
    lastDate : "2021-01-01",
    profession : "engineer",
    salary : 1200

  });
}
catch (err) { }

console.timeEnd("Result Time: ");

const check = Joi.compile(schema);

router.get('/test',testController.deneme)

router.post('/test',[
  
    


  ],testController.postDeneme)
  

  
  



export default router;