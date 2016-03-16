/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 */
var request = require('request');
var constants = require('./constants');

exports.version = function(req, res) {
  var moduleid = req.params.moduleid;

  var logo = req.query.logo;
  var style = req.query.style;

  var url = constants.SHEILDS_IO_BASE;

  request(constants.OPENMRS_MODULUS_URL + moduleid + '/releases' + constants.OPENMRS_MODULUS_ARGS, {
    json: true
  }, function(error, response, releases) {

    if (error || response.statusCode !== 200) {
      url += 'version-unknown-lightgrey.svg';
    } else {
      var latestRelease = releases[0];

      if (latestRelease !== null && latestRelease.moduleVersion !== null && latestRelease.moduleVersion !== 'undefined') {
        url += 'version-' + encodeURI(constants.sanitize(latestRelease.moduleVersion)) + '-' + constants.OPENMRS_VERSION_BADGE_COLOR + '.svg';
      } else {
        url += 'version-unknown-lightgrey.svg';
      }
    }

    url += '?' + constants.buildQueryParams(logo, style);

    request(url).pipe(res);
  });
};

exports.omrsversion = function(req, res) {
  var moduleid = req.params.moduleid;

  var logo = req.query.logo;
  var style = req.query.style;

  var url = constants.SHEILDS_IO_BASE;

  request(constants.OPENMRS_MODULUS_URL + moduleid + '/releases' + constants.OPENMRS_MODULUS_ARGS, {
    json: true
  }, function(error, response, releases) {

    if (error || response.statusCode !== 200) {
      url += 'version-unknown-lightgrey.svg';
    } else {
      var latestRelease = releases[0];

      if (latestRelease !== null && latestRelease.requiredOMRSVersion !== null && latestRelease.requiredOMRSVersion !== 'undefined') {
        url += 'openmrs_version-' + encodeURI(constants.sanitize(latestRelease.requiredOMRSVersion)) + '-' + constants.OPENMRS_VERSION_BADGE_COLOR + '.svg';
      } else {
        url += 'version-unknown-lightgrey.svg';
      }
    }

    url += '?' + constants.buildQueryParams(logo, style);

    request(url).pipe(res);
  });
};
