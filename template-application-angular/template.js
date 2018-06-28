var apiTemplate = require('template-application-angular/template/api');
var dataTemplate = require('template-application-angular/template/data');
var extensionTemplate = require('template-application-angular/template/extension');
var uiTemplate = require('template-application-angular/template/ui');

exports.getTemplate = function(parameters) {
	return {
		'name': 'Full-stack Application (AngularJS)',
		'description': 'Full-stack Application with a Database Schema, a set of REST Services and an AngularJS User Interfaces',
		'model':'true',
		'sources': getSources(parameters),
		'parameters': [{
			'name': 'extensionName',
			'label': 'Extension'
		}, {
			'name': 'launchpadName',
			'label': 'Launchpad'
		}, {
			'name': 'includeLaunchpad',
			'label': 'Embedded',
			'type': 'checkbox'
		}, {
			'name': 'brand',
			'label': 'Brand'
		}]
	};
};

function getSources(parameters) {
	var sources = [];
	sources = sources.concat(apiTemplate.getSources(parameters));
	sources = sources.concat(dataTemplate.getSources(parameters));
	sources = sources.concat(extensionTemplate.getSources(parameters));
	sources = sources.concat(uiTemplate.getSources(parameters));
	return sources;
}
