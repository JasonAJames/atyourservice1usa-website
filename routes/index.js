var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'At Your Service', pagetitle: 'AtYourService1USA.com',
    imagelocation: '/images/AYS-Headquarters.png',
    phonenumber: '(909) 329-2404',
    service1: 'Window Cleaning',
    service2: 'Window Screen Repair',
    service3: 'Pressure Washing',
    service4: 'Christmas Light Installation',
    service5: 'Construction CleanUp',
    location1: 'Eastvale',
    location2: 'Fontana',
    location3: 'San Dimas'
   });
});

/* GET Fontana page. */
router.get('/fontana', function(req, res, next) {
  res.render('index', { title: 'At Your Service', city: 'Fontana', pagetitle: 'AtYourService1USA.com Fontana',
    imagelocation: '/images/AYS-Fontana.png',
    phonenumber: '(909) 329-2404',
    service1: 'Window Cleaning',
    service2: 'Window Screen Repair',
    service3: 'Pressure Washing',
    service4: 'Christmas Light Installation',
    service5: 'Construction CleanUp',
    location1: 'Eastvale',
    location2: 'Fontana',
    location3: 'San Dimas'
   });
});

/* GET San Dimas page. */
router.get('/san-dimas', function(req, res, next) {
  res.render('index', { title: 'At Your Service', city: 'San Dimas', pagetitle: 'AtYourService1USA.com San Dimas',
    imagelocation: '/images/AYS-SanDimas.png',
    phonenumber: '(626) 387-3336',
    service1: 'Window Cleaning',
    service2: 'Window Screen Repair',
    service3: 'Pressure Washing',
    service4: 'Christmas Light Installation',
    service5: 'Construction CleanUp',
    location1: 'Eastvale',
    location2: 'Fontana',
    location3: 'San Dimas'
   });
});

/* GET Mira Loma page. */
router.get('/eastvale', function(req, res, next) {
  res.render('index', { title: 'At Your Service', city: 'Eastvale', pagetitle: 'AtYourService1USA.com Eastvale',
    imagelocation: '/images/AYS-Eastvale.png',
    phonenumber: '(909) 329-2404',
    service1: 'Window Cleaning',
    service2: 'Window Screen Repair',
    service3: 'Pressure Washing',
    service4: 'Christmas Light Installation',
    service5: 'Construction CleanUp',
    location1: 'Eastvale',
    location2: 'Fontana',
    location3: 'San Dimas'
   });
});

module.exports = router;
