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
    location3: 'San Dimas',
    keywords: 'Window Cleaning, Window Screen Repair, Pressure Washing, Construction CleanUp, Christmas Light Installation, at your service, home remodeling, home repair, window screen install, window screen service, at your service, ays',
    metadesc: 'At Your Service (AYS) offers Window cleaning, window screen repair, power washing, construction cleanup, and Christmas light installation services to the Inland Empire and Surrounding Areas.'
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
    location3: 'San Dimas',
    keywords: 'Window Cleaning, Window Screen Repair, Pressure Washing, Construction CleanUp, Christmas Light Installation, at your service, home remodeling, home repair, window screen install, window screen service, at your service, ays, fontana',
    metadesc: 'At Your Service (AYS) Fontana offers Window cleaning, window screen repair, power washing, construction cleanup, and Christmas light installation services to Fontana and Surrounding Areas.'

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
    location3: 'San Dimas',
    keywords: 'Window Cleaning, Window Screen Repair, Pressure Washing, Construction CleanUp, Christmas Light Installation, at your service, home remodeling, home repair, window screen install, window screen service, at your service, ays, san dimas',
    metadesc: 'At Your Service (AYS) San Dimas offers Window cleaning, window screen repair, power washing, construction cleanup, and Christmas light installation services to San Dimas and Surrounding Areas.'

   });
});

/* GET Eastvale page. */
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
    location3: 'San Dimas',
    keywords: 'Window Cleaning, Window Screen Repair, Pressure Washing, Construction CleanUp, Christmas Light Installation, at your service, home remodeling, home repair, window screen install, window screen service, at your service, ays, eastvale',
    metadesc: 'At Your Service (AYS) Eastvale offers Window cleaning, window screen repair, power washing, construction cleanup, and Christmas light installation services to Eastvale and Surrounding Areas.'

   });
});

module.exports = router;
