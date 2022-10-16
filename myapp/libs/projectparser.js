const MarkdownIt = require('markdown-it');
md = new MarkdownIt();

//=====================TOOL LOGOS==================//

//Embedds for tool logos
let UnityEmb = '![Alt text](https://i.ibb.co/zmMQsS0/unity.png "Unity")';
let CSEmb = '![Alt text](https://i.ibb.co/Y22hN2n/c.png "C#")';


//Takes a tool string and converts it into html
function convetToolsToHtml(tools){
    let markdown = '';

    if(tools.includes('unity') === true){ markdown += UnityEmb};
    if(tools.includes('c#') === true){ markdown += CSEmb};

    return md.render(markdown);
}


//====================PROJECT PARSER===============//

//Takes project data and converts into renderable form for index and details pages by
//Converting markdown to html
//Converting tools string to html
class ProjectParser{
    parseProjectMarkdowns(project){
        let rend_project = project; 
        rend_project.details = md.render(project.details);
        rend_project.contributions = md.render(project.contributions);
        rend_project.tools = convetToolsToHtml(project.tools);
        
        return rend_project;
    };

    parseProjectGroupMarkdowns(projects){
        let parsed_projects = projects;
        parsed_projects.forEach(function(project){
            project.details = md.render(project.details);
            project.contributions = md.render(project.contributions);
            project.tools = convetToolsToHtml(project.tools);
        });

        return parsed_projects;
    };
}

module.exports = new ProjectParser();