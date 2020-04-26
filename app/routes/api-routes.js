const db = require("./models");
// List of Routes from api.js
`
"/api/workouts" -- GET/FETCH, getLastWorkout
"/api/workouts/" + id -- POST, addExcercise
"/api/workouts" -- POST, createWorkout
"/api/workouts/range"  -- GET/FETCH, getWorkoutsInRange


`
module.exports = function(app){
    app.get("/api/workouts/:id"), (req, res)=>{
        
    }
}