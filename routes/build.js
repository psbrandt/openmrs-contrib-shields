/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 */
var Bamboo = require('bamboo-api');
var request = require('request');

var OPENMRS_BAMBOO_URL = 'http://ci.openmrs.org';
var SHEILDS_IO_BASE = 'http://img.shields.io/badge/'; // http://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg

exports.build = function(req, res) {
  var project = req.params.project;
  var plan = req.params.plan;
  var bamboo = new Bamboo(OPENMRS_BAMBOO_URL);
  var url = SHEILDS_IO_BASE;

  bamboo.getLatestBuildStatus(project + '-' + plan, function(error, result) {
    if (error) {
      url += 'build-unknown-lightgrey.svg?style=flat-square';
    } else if (result === "Successful") {
      url += 'build-passing-green.svg?style=flat-square';
    } else if (result === "Failed") {
      url += 'build-failing-red.svg?style=flat-square';
    } else {
      url += 'build-unknown-lightgrey.svg?style=flat-square';
    }
    request(url).pipe(res);
  });
};
