var Product = require('../models/product');

var mongoose = require('mongoose');  // Import Mongoose

mongoose.Promise = global.Promise;  // Plugging in my own promise library

mongoose.connect('localhost:27017/shopping')  // Mongoose connection

var products = [
    new Product({
        imagePath: '../public/images/gothic.jpg',
        title: 'Gothic video game',
        description: 'Awesome game !!!!!!!!!!!!',
        price: 10
    }),
    new Product({
        imagePath: '../public/images/uncharted.jpg',
        title: 'Gothic video game',
        description: 'Awesome game !!!!!!!!!!!!',
        price: 20
    }),
    new Product({
        imagePath: '../public/images/pes2018.jpg',
        title: 'Gothic video game',
        description: 'Awesome game !!!!!!!!!!!!',
        price: 30
    }),
    new Product({
        imagePath: '../public/images/hitman.jpg',
        title: 'Gothic video game',
        description: 'Awesome game !!!!!!!!!!!!',
        price: 40
    }),
    new Product({
        imagePath: '../public/images/Grand_Theft_Auto_V',
        title: 'Gothic video game',
        description: 'Awesome game !!!!!!!!!!!!',
        price: 50
    }),
];

var done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function (err, result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
