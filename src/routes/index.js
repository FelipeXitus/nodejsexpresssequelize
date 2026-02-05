const express = require('express');
const people = require('./peopleRoute');
const categories = require('./categoriesRoute');
const courses = require('./coursesRoute');
const enrollments = require('./enrollmentsRoute');

module.exports = app => {
  app.use(
    express.json(),
    people,
    categories,
    courses,
    enrollments
  );
};