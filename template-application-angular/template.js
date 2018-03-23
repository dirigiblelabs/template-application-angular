exports.getTemplate = function() {
	return {
		"name": "Full-stack Application (AngularJS)",
		"description": "Full-stack Application with a Database Schema, a set of REST Services and an AngularJS User Interfaces",
		"model":"true",
		"sources": [
		{
			"location": "/template-application-angular/data/application.schema.template", 
			"action": "generate",
			"rename": "data/{{fileName}}.schema"
		},
		{
			"location": "/template-application-angular/api/application.js.template", 
			"action": "generate",
			"rename": "api/{{fileName}}.js",
			"collection": "dataModels"
		},
		{
			"location": "/template-application-angular/ui/index.html.template", 
			"action": "generate",
			"rename": "ui/index.html",
			"start" : "[[",
			"end" : "]]",
			"type": "ui-index"
		},
		{
			"location": "/template-application-angular/ui/index.html.template", 
			"action": "generate",
			"rename": "ui/{{fileName}}/index.html",
			"start" : "[[",
			"end" : "]]",
			"collection": "uiManageModels"
		},
		{
			"location": "/template-application-angular/ui/manage.html.template", 
			"action": "generate",
			"rename": "ui/{{fileName}}/manage.html",
			"start" : "[[",
			"end" : "]]",
			"collection": "uiManageModels"
		},
		{
			"location": "/template-application-angular/ui/list.html.template", 
			"action": "generate",
			"rename": "ui/{{fileName}}.html",
			"start" : "[[",
			"end" : "]]",
			"collection": "uiListModels"
		},
		{
			"location": "/template-application-angular/ui/display.html.template", 
			"action": "generate",
			"rename": "ui/{{fileName}}.html",
			"start" : "[[",
			"end" : "]]",
			"collection": "uiDisplayModels"
		}
		],
		"parameters": []
	};
};
