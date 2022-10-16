var express = require('express');
var router = express.Router();
var Project = require('../models/project')

//Including markdown for parsing
const MdParser = require('../libs/mdparser'); 

//Project type enum
const ProjectType = {
    Professional: 'professional',
    Personal : 'personal',
    Gamejam : 'gamejam'
}

/* GET Project */
router.get('/add', function(req, res, next) {
    res.render('projects/newproject', {projectTypes: ProjectType});
});

/* GET Project by id */
router.get('/:id', async function(req,res){
    try {
        const project = await Project.findById(req.params.id);
        
        //creting a renderable project
        let rend_project = project;

        //parsing markdowntexts before rendering
        rend_project = MdParser.parseProjectMarkdowns(project);

        res.render('projects/details', {project: rend_project});
    } catch (error) {
        res.redirect('error', {error: error});   
    }
})

/* GET Project edit page by id */
router.get('/edit/:id', async function(req, res){
    try {
        const project = await Project.findById(req.params.id);
        res.render('projects/editproject', {project: project, projectTypes: ProjectType});
    } catch (error) {
        res.redirect('error', {error: error});   
    }  
});

// POST project
router.post('/add',async function(req,res,next) {
    const project = new Project({
        title: req.body.title,
        details: req.body.details,
        thumbnailUrl: req.body.thumbnailUrl,
        contributions : req.body.contributions,
        year: req.body.year,
        type: req.body.projectType
    })
    try {
        await project.save();
        res.redirect('/');
    } catch (error) {
        res.redirect('error', {error: error});  
    } 
});

// edit project
router.post('/edit/:id', async function(req, res){
    try {
        const project = await Project.findById(req.params.id);
        project.title = req.body.title;
        project.details = req.body.details;
        project.thumbnailUrl = req.body.thumbnailUrl;
        project.contributions = req.body.contributions;
        project.year = req.body.year;
        project.type = req.body.projectType;
        
        await project.save();
        res.redirect('/');
    } catch (error) {
        res.redirect('error', {error: error});   
    }  
});

module.exports = router;
