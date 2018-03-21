exports.getTemplate = function() {
	return {
		"name": "Full-stack Application (AngularJS)",
		"description": "Full-stack Application with a Database Schema, a set of REST Services and an AngularJS User Interfaces",
		"model":"true",
		"sources": [
		{
			"location": "/template-application-angular/application.schema.template", 
			"action": "generate",
			"rename": "{{fileName}}.schema",
			"type": "db-schema"
		},
		{
			"location": "/template-application-angular/application.js.template", 
			"action": "generate",
			"rename": "{{fileName}}.js",
			"collection": "services",
			"type": "rest-service"
		},
		{
			"location": "/template-application-angular/index.html.template", 
			"action": "generate",
			"rename": "{{fileName}}.html",
			"start" : "[[",
			"end" : "]]",
			"type": "ui-index"
		},
		{
			"location": "/template-application-angular/manage.html.template", 
			"action": "generate",
			"rename": "{{fileName}}.html",
			"start" : "[[",
			"end" : "]]",
			"collection": "collectionManage",
			"type": "ui-manage"
		},
		{
			"location": "/template-application-angular/list.html.template", 
			"action": "generate",
			"rename": "{{fileName}}.html",
			"start" : "[[",
			"end" : "]]",
			"collection": "collectionList",
			"type": "ui-list"
		}

		],
		"parameters": []
	};
};
