const mongoose = require("mongoose");
const Schema = mongoose.Schema;

`        type: "resistance",
name: "Bicep Curl",
duration: 20,
weight: 100,
reps: 10,
sets: 4`

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
},
  exercises:[{
    type:{
      type: String,
      enum: ["resistance", "cardio"] 
    },
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
