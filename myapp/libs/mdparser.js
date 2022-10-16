const MarkdownIt = require('markdown-it');
md = new MarkdownIt();

class MdParser{
    parseProjectMarkdowns(project){
        let rend_project = project; 
        rend_project.details = md.render(project.details);
        rend_project.contributions = md.render(project.contributions);
        
        return rend_project;
    };

    parseProjectGroupMarkdowns(projects){
        let parsed_projects = projects;
        parsed_projects.forEach(function(project){
            project.details = md.render(project.details);
            project.contributions = md.render(project.contributions);
        });

        return parsed_projects;
    };
}

module.exports = new MdParser();