const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  CourseId: String,
  CourseInstructor: String,
  CourseName: String,
  CourseDescription: String,
  CourseDuration: Number,
  CoursePrice: Number,
  CourseBought: Number,
});

const Course = mongoose.model('Course', courseSchema, "Course");

module.exports = Course;