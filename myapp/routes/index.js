var express = require('express');
var router = express.Router();
var Project = require('../models/project')

const MdParser = require('../libs/mdparser'); 

/* GET home page. */
router.get('/', async function(req, res, next) {
  const proProjects = MdParser. parseProjectGroupMarkdowns(await Project.find({type: 'Professional'}));
  const personalProjects =  MdParser. parseProjectGroupMarkdowns(await Project.find({type: 'Personal'}));
  const gamejamProjects =  MdParser. parseProjectGroupMarkdowns(await Project.find({type: 'Gamejam'}));
  res.render('index', { title: 'Dhruv Pant', proProjects: proProjects, personalProjects: personalProjects, gamejamProjects: gamejamProjects });
});

module.exports = router;
