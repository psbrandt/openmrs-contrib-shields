/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 */
var express = require('express');
var app = express();
var build = require('./routes/build');
var version = require('./routes/version');
var plan = require('./routes/plan');

app.get('/build/:project/:plan', build.build);
app.get('/plan/:project/:plan', plan.plan);
app.get('/version/:moduleid', version.version);
app.get('/omrsversion/:moduleid', version.omrsversion);

app.listen(process.env.OMRS_SHEILDS_PORT || 3033, function() {});
