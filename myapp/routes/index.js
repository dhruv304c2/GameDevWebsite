var express = require('express');
var router = express.Router();
var Project = require('../models/project')

const ProjectParser = require('../libs/projectparser'); 

/* GET home page. */
router.get('/', async function(req, res, next) {
  const proProjects = ProjectParser. parseProjectGroupMarkdowns(await Project.find({type: 'Professional'}));
  const personalProjects =  ProjectParser. parseProjectGroupMarkdowns(await Project.find({type: 'Personal'}));
  const gamejamProjects =  ProjectParser. parseProjectGroupMarkdowns(await Project.find({type: 'Gamejam'}));
  res.render('index', { title: 'Dhruv Pant', proProjects: proProjects, personalProjects: personalProjects, gamejamProjects: gamejamProjects });
});

module.exports = router;
