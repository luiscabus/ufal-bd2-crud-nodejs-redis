// CRUD REDIS - Server Connection
var redis = require('redis');
var client = redis.createClient('127.0.0.1','6379');

client.on('connect', function () {
	console.log('connected to redis');
});


// CREATE
client.set('total', '1800');

client.hmset('languages', 'portugues', 'ingles', 'espanhol', 'alemao');

client.rpush(['frameworks', 'angular', 'react', 'vue'], function (err, reply) {
	console.log(reply); 
});

client.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], function (err, reply) {
	console.log(reply);
});


// RETRIEVE
console.log(client.get('total'));

client.hgetall('languages', function (err, object) {
	console.log(object);
});

client.lrange('frameworks', 0, -1, function (err, reply) {
	console.log(reply); 
});

client.smembers('tags', function (err, reply) {
	console.log(reply);
});


// UPDATE
// client.expire('total', 10);


// DELETE
// client.del('languages', function(err, reply) {
// 	console.log(reply);
// });
// client.del('frameworks', function(err, reply) {
// 	console.log(reply);
// });
// client.del('tags', function (err, reply) {
// 	console.log(reply);
// }); 