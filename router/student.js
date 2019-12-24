var express = require('express');
var router = express.Router();
var middleware = require('../middleware/middleware');
var crypto = require('crypto');




router.get('/',function(req,res,next){
  res.render('index',{
      title:"Student Information",
      greeting :"Welcome here"
  })

})

// router.get('/',function(req,res,next,err){
//     // res.render('index',{
//     //     title:"Student Information",
//     //     greeting :"Welcome in Thruskills"
//     // })
//     // res.send("hello");
//     next();
//   });

//   router.get('/',function(req,res,next){
//     // res.render('index',{
//     //     title:"Student Information",
//     //     greeting :"Keeep smiling"
//     // })
  
//   });

router.get('/getdata/:id',function(req,res,next){

        var user ={
            "username" :req.query['name'],
            "age":req.query['age']
        }
        res.render('index',{
            title:"Student Information",
            "user": user
        })

}
);

// router.get('/postdata',middleware.print, function(req,res){
   
//     res.send("Welcome in post data page");
//     // res.render('index',{
//     //     title:"Student Information",
//     //     "user": user
//     // })
// });

router.post('/postdata',function(req,res){

    const cipher = crypto.createCipher('aes192','myapp');  
    var encrypted = cipher.update(req.body.name, 'utf8', 'hex');  
    encrypted += cipher.final('hex');

    var user ={
        "username" :req.body.name,
        "age": encrypted

    }
    console.log(JSON.stringify(user));
   
   
    res.render('index',{
        title:"Student Information",
        "user": user
    })
});


router.put('/postdata',function(req,res){
    var user ={
        "username" :req.body.name,
        "age":req.body.age

    }
    res.render('index',{
        title:"Student Information",
        "user": user
    })
});


module.exports = router;