

var friendsData = require("../data/friends");



module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  
  app.post("/api/friends", function(req, res) {
  var closestScore =100
  var closestName =""
  var closestPhoto=""
  
  friendsData.forEach(function (friend){
    var tempScore =0
    console.log(friend.name)
    console.log(friend.scores)
    for (i =0; i < friend.scores.length; i++) {
        tempScore+=Math.abs(friend.scores[i] - req.body.scores[i])
    }
     console.log("Temp score for " + friend.name+ " is " + tempScore)
     if (tempScore < closestScore) {
         closestScore=tempScore
         closestName=friend.name
         closestPhoto=friend.photo
     }
        
  })   



  console.log(req.body)  
  console.log("The closest match is " + closestName + " photo " + closestPhoto)
  var data = {"name" : closestName, "photo" : closestPhoto}
  res.json(data)

  friendsData.push(req.body)
 
  });

}
