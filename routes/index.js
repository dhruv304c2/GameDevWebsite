var express = require('express');
var router = express.Router();
var Project = require('../models/project')

const ProjectParser = require('../libs/projectparser'); 

/* GET home page. */
router.get('/', async function(req, res, next) {
  const proProjects = ProjectParser. parseProjectGroupMarkdowns(await Project.find({type: 'Professional'})).sort((a,b) => {return a.year - b.year;});
  const personalProjects =  ProjectParser. parseProjectGroupMarkdowns(await Project.find({type: 'Personal'})).sort((a,b) => {return a.year - b.year;});
  const gamejamProjects =  ProjectParser. parseProjectGroupMarkdowns(await Project.find({type: 'Gamejam'})).sort((a,b) => {return a.year - b.year;});

  res.render('index', { title: 'Dhruv Pant', proProjects: proProjects, personalProjects: personalProjects, gamejamProjects: gamejamProjects });
});

module.exports = router;
