/*
 * Copyright (c) 2010-2019 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */

exports.getSources = function(parameters) {
	var sources = [];
	sources = sources.concat(getFeed(parameters));
	return sources;
};

function getFeed(parameters) {
	return [{
		location: "/template-application-angular/feed/entityFeedSynchronizer.js.template", 
		action: "generate",
		rename: "feed/{{perspectiveName}}/{{fileName}}FeedSynchronizer.js",
		engine: "velocity",
		collection: "models"
	}, {
		location: "/template-application-angular/feed/entityFeed.job.template", 
		action: "generate",
		rename: "feed/{{perspectiveName}}/{{fileName}}Feed.job",
		engine: "velocity",
		collection: "models"
	}];
}