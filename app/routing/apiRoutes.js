// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

 

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

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
