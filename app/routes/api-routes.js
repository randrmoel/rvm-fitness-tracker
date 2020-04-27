const db = require("../../models");
// List of Routes from api.js
`
"/api/workouts" -- GET/FETCH, getLastWorkout
"/api/workouts/" + id -- POST, addExcercise
"/api/workouts" -- POST, createWorkout
"/api/workouts/range"  -- GET/FETCH, getWorkoutsInRange


`
module.exports = function(app){
    //last workout
    app.get("/api/workouts", (req, res)=>{
        db.Workout.find({})
        .then(dbWO =>{
            res.json(dbWO)
        })
        .catch(err=>{
            res.json(err);
        });
    });

    //new workout
    app.post("/api/workouts", (req,res)=>{
        db.Workout.create({})
        .then(data => res.json(data))
        .catch(err =>{
            console.log(err);
            res.json(err)
        });
    });
    
    //add excersise
    app.put("/api/workouts/:id", ({body, params}, res) =>{
        db.Workout.findByIdAndUpdate(
            params.id,
            {$push: {exercises:body}},
            {
                new:true,
                runValidators:true
            }

        )
        .then(data => res.json(data))
        .catch(err =>{
            console.log(err);
            res.json(err);
        });
    });

    // get workouts in range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7)
          .then(dbWO => {
            console.log(dbWO)
            res.json(dbWO);
          })
          .catch(err => {
            res.json(err);
          });
      });
} // end of module exports