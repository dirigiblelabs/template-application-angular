exports.getSources = function(parameters) {
	return [{
		'location': '/template-application-angular/api/http.js.template', 
		'action': 'copy',
		'rename': 'api/http.js',
	}, {
		'location': '/template-application-angular/api/entity.js.template', 
		'action': 'generate',
		'rename': 'api/{{fileName}}.js',
		'collection': 'models',
		'engine': 'velocity'
	}];
};