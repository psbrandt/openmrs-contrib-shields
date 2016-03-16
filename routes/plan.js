/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 */
var Bamboo = require('bamboo-api');
var request = require('request');
var constants = require('./constants');

function sanitize(str) {
  return str.replace(new RegExp('-', 'g'), '--');
}

exports.plan = function(req, res) {
  var project = req.params.project;
  var plan = req.params.plan;

  var logo = req.query.logo;
  var style = req.query.style;

  var bamboo = new Bamboo(constants.OPENMRS_BAMBOO_URL);
  var url = constants.SHEILDS_IO_BASE;

  bamboo.getLatestBuildStatus(project + '-' + plan, function(error, result) {
    var label = project + ' ' + plan;
    if (error) {
      url += sanitize(label) + '-unknown-lightgrey.svg';
    } else if (result === "Successful") {
      url += sanitize(label) + '-passing-green.svg';
    } else if (result === "Failed") {
      url += sanitize(label) + '-failing-red.svg';
    } else {
      url += sanitize(label) + '-unknown-lightgrey.svg';
    }

    url += '?' + constants.buildQueryParams(logo, style);

    request(url).pipe(res);
  });
};
