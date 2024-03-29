/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */

const schemaTemplateManager = require("template-application-schema/template/template");
const feedTemplateManager = require("template-application-feed/template/template");
const uiAngularjsTemplateManager = require("template-application-ui-angular/template/template");
const odataTemplateManager = require("template-application-odata/template/template");
const generateUtils = require("ide-generate-service/template/generateUtils");
const parameterUtils = require("ide-generate-service/template/parameterUtils");

exports.generate = function (model, parameters) {
    model = JSON.parse(model).model;
    let templateSources = exports.getTemplate(parameters).sources;
    parameterUtils.process(model, parameters)
    return generateUtils.generateFiles(model, parameters, templateSources);
};

exports.getTemplate = function (parameters) {
    let schemaTemplate = schemaTemplateManager.getTemplate(parameters);
    let feedTemplate = feedTemplateManager.getTemplate(parameters);
    let uiAngularjsTemplate = uiAngularjsTemplateManager.getTemplate(parameters);
    let odataTemplate = odataTemplateManager.getTemplate(parameters);

    let templateSources = [];
    templateSources = templateSources.concat(schemaTemplate.sources);
    templateSources = templateSources.concat(feedTemplate.sources);
    templateSources = templateSources.concat(uiAngularjsTemplate.sources);
    templateSources = templateSources.concat(odataTemplate.sources);

    odataTemplate.parameters.push({
        name: "generateOData",
        label: "OData",
        type: "checkbox"
    });
    odataTemplate.parameters.forEach(e => {
        if (e.name === "odataNamespace") {
            e.ui = {
                hide: {
                    property: "generateOData",
                    value: false
                }
            };
        }
    });

    return {
        name: "Application - Full Stack",
        description: "Application - full stack with a Database Schema, a set of REST Services and an AngularJS User Interfaces",
        extension: "model",
        sources: templateSources,
        parameters: parameterUtils.getUniqueParameters(schemaTemplate.parameters, feedTemplate.parameters, uiAngularjsTemplate.parameters, odataTemplate.parameters)
    };
};
