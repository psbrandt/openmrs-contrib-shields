/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 */
var request = require('request');
var constants = require('./constants');

exports.custom = function(req, res) {
  var label = req.params.label;
  var value = req.params.value;
  var color = req.params.color;

  var logo = req.query.logo;
  var style = req.query.style;

  var url = constants.SHEILDS_IO_BASE;

  url += encodeURI(constants.sanitize(label)) + '-' + encodeURI(constants.sanitize(value)) + '-' + color + '.svg';
  url += '?' + constants.buildQueryParams(logo, style);

  request(url).pipe(res);
};
