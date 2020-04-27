const mongoose = require("mongoose");
const Schema = mongoose.Schema;

` type: "resistance",
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
    name: {
      type: String,
      trim: true,
      required: "Enter name of exercise"
    },
    duration: {
      type: Number,
      required: "Must enter a duration"
    },
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
},
{
  toJSON:{
    virtual: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;