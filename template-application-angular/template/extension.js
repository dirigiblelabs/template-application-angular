exports.getSources = function(parameters) {
	var sources = [];
	sources = sources.concat(getExtensionPerspectives(parameters));
	sources = sources.concat(getExtensionPrimaryModels(parameters));
	sources = sources.concat(getExtensionListModels(parameters));
	sources = sources.concat(getExtensionManageModels(parameters));
	sources = sources.concat(getExtensionListMasterDetailModels(parameters));
	sources = sources.concat(getMenu(parameters));
	return sources;
};

function getExtensionPerspectives(parameters) {
	return [{
		'location': '/template-application-angular/ui/perspectives/extensions/perspective/perspective.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/extensions/perspective/perspective.extension',
		'collection': 'uiPerspectives'
	}, {
		'location': '/template-application-angular/ui/perspectives/extensions/perspective/perspective.js.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/extensions/perspective/perspective.js',
		'engine': 'velocity',
		'collection': 'uiPerspectives'
	}, {
		'location': '/template-application-angular/ui/perspectives/views/manage/extensions/view.extensionpoint.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/extensions/view.extensionpoint',
		'collection': 'uiPerspectives'
	}];
}

function getExtensionPrimaryModels(parameters) {
	return [{
		'location': '/template-application-angular/ui/perspectives/extensions/tile/tile.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/{{name}}/extensions/tile/tile.extension',
		'collection': 'uiPrimaryModels'
	}, {
		'location': '/template-application-angular/ui/perspectives/extensions/tile/tile.js.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/{{name}}/extensions/tile/tile.js',
		'engine': 'velocity',
		'collection': 'uiPrimaryModels'
	}];
}

function getExtensionListModels(parameters) {
	return [{
		'location': '/template-application-angular/ui/perspectives/views/list/extensions/entity.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/{{fileName}}/extensions/view.extension',
		'collection': 'uiListModels'
	}];
}

function getExtensionManageModels(parameters) {
	return [{
		'location': '/template-application-angular/ui/perspectives/views/manage/extensions/entity.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/{{fileName}}/extensions/view.extension',
		'collection': 'uiManageModels'
	}];
}

function getExtensionListMasterDetailModels(parameters) {
	return [{
		'location': '/template-application-angular/ui/perspectives/views/master-list/extensions/entity-view.extensionpoint.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/master/{{fileName}}/master/extensions/view.extensionpoint',
		'collection': 'uiListMasterModels'
	}, {
		'location': '/template-application-angular/ui/perspectives/views/master-list/extensions/entity.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/master/{{fileName}}/extensions/view.extension',
		'collection': 'uiListMasterModels'
	}, {
		'location': '/template-application-angular/ui/perspectives/views/master-list/master/extensions/entity-view-master.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/master/{{fileName}}/master/extensions/view-master.extension',
		'collection': 'uiListMasterModels'
	}, {
		'location': '/template-application-angular/ui/perspectives/views/master-list/details/extensions/entity-view-detail.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/master/details/{{fileName}}/extensions/view-detail.extension',
		'collection': 'uiListDetailsModels',
		'engine': 'velocity'
	}];
}

function getExtensionManageMasterDetailModels(parameters) {
	return [{
		'location': '/template-application-angular/ui/perspectives/views/master-manage/extensions/entity-view.extensionpoint.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/master/{{fileName}}/master/extensions/view.extensionpoint',
		'collection': 'uiManageMasterModels'
	}, {
		'location': '/template-application-angular/ui/perspectives/views/master-manage/extensions/entity.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/master/{{fileName}}/extensions/view.extension',
		'collection': 'uiManageMasterModels'
	}, {
		'location': '/template-application-angular/ui/perspectives/views/master-manage/master/extensions/entity-view-master.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/master/{{fileName}}/master/extensions/view-master.extension',
		'collection': 'uiManageMasterModels'
	}, {
		'location': '/template-application-angular/ui/perspectives/views/master-manage/details/extensions/entity-view-detail.extension.template', 
		'action': 'generate',
		'rename': 'ui/{{perspectiveName}}/views/master/details/{{fileName}}/extensions/view-detail.extension',
		'collection': 'uiManageDetailsModels',
		'engine': 'velocity'
	}];
}

function getMenu(parameters) {
	return [{
		'location': '/template-application-angular/extensions/menu.extensionpoint.template', 
		'action': 'generate',
		'rename': 'extensions/menu.extensionpoint'
	}];
}