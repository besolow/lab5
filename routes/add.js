var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var newFriend = {};
    newFriend['name'] = req.query.name;
    newFriend['description'] = req.query.description;
    newFriend['imageURL'] = 'http://lorempixel.com/400/400/people';
    data['friends'].push(newFriend);
    console.log(newFriend);
    res.render('add', data);
 }