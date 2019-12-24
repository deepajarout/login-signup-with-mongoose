var express = require('express');
var router = express.Router();
var User = require('../model/userModel');


router.get('/', function (req, res) {
  res.render('login', {
    title: "myapp-login"

  })
});
router.get('/dashboard', function (req, res) {
  res.render('index', {
    title: "myapp-dashboard"

  })
});

router.post('/', function (req, res, next) {

  if ( !req.body.username && !req.body.password) {
    console.log("Please enter the detail")
    res.render('login', {
      title : "myapp - login",
      msz : "Please enter the detail"
    })
  } else{
    var username = req.body.username;
    var password = req.body.password;
    User.find({
      'username': username,
      'password': password
    }, function (err, data) {
      if (err) {
        res.render('login', {
          title : "myapp - login",
          msz:"user not found"
        })
      } else {
        res.redirect('/dashboard')
      }
    })
  }
})


router.get('/signup', function (req, res) {
  res.render('signup', {
    title: "myapp-signup"
  })
});

router.post('/signup', function (req, res, next) {
  console.log("data", req.body);
  var newuser = new User()
  newuser.name = req.body.name;
  newuser.password = req.body.password;
  newuser.mobile = req.body.mobile;
  newuser.email = req.body.email;
  newuser.username = req.body.username;

  console.log("useri", newuser);
  newuser.save(function (err, data) {
    if (err) {
      console.log(err);
      res.render({
        title: "myapp-signup"
      })
    }
    res.redirect('/')
  })

})

module.exports = router;