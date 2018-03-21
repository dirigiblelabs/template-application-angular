exports.getTemplate = function() {
	return {
		"name": "Full-stack Application (AngularJS)",
		"description": "Full-stack Application with a Database Schema, a set of REST Services and an AngularJS User Interfaces",
		"model":"true",
		"sources": [
		{
			"location": "/template-application-angular/application.schema.template", 
			"action": "generate",
			"rename": "{{fileName}}.schema"
		},
		{
			"location": "/template-application-angular/application.js.template", 
			"action": "generate",
			"rename": "{{fileName}}.js",
			"iterate": "entities"
		},
		{
			"location": "/template-application-angular/index.html.template", 
			"action": "generate",
			"rename": "{{fileName}}.html",
			"start" : "[[",
			"end" : "]]"
		}],
		"parameters": []
	};
};
