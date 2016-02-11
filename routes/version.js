/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 */
var request = require('request');

var OPENMRS_MODULUS_URL = 'https://modules.openmrs.org/modulus/api/modules/';
var OPENMRS_MODULUS_ARGS = '?order=desc&sort=dateCreated&max=1';
var OPENMRS_VERSION_BADGE_COLOR = '009384';
var SHEILDS_IO_BASE = 'http://img.shields.io/badge/'; // http://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg

function sanitize(str) {
  return str.replace(new RegExp('-', 'g'), '--');
}

exports.version = function(req, res) {
  var moduleid = req.params.moduleid;
  var url = SHEILDS_IO_BASE;

  request(OPENMRS_MODULUS_URL + moduleid + '/releases' + OPENMRS_MODULUS_ARGS, {
    json: true
  }, function(error, response, releases) {

    if (error || response.statusCode !== 200) {
      url += 'version-unknown-lightgrey.svg?style=flat-square';
    } else {
      var latestRelease = releases[0];

      if (latestRelease !== null && latestRelease.moduleVersion !== null && latestRelease.moduleVersion !== 'undefined') {
        url += 'version-' + encodeURI(sanitize(latestRelease.moduleVersion)) + '-' + OPENMRS_VERSION_BADGE_COLOR + '.svg?style=flat-square';
      } else {
        url += 'version-unknown-lightgrey.svg?style=flat-square';
      }
    }
    request(url).pipe(res);
  });
};

exports.omrsversion = function(req, res) {
  var moduleid = req.params.moduleid;
  var url = SHEILDS_IO_BASE;

  request(OPENMRS_MODULUS_URL + moduleid + '/releases' + OPENMRS_MODULUS_ARGS, {
    json: true
  }, function(error, response, releases) {

    if (error || response.statusCode !== 200) {
      url += 'version-unknown-lightgrey.svg?style=flat-square';
    } else {
      var latestRelease = releases[0];

      if (latestRelease !== null && latestRelease.requiredOMRSVersion !== null && latestRelease.requiredOMRSVersion !== 'undefined') {
        url += 'openmrs_version-' + encodeURI(sanitize(latestRelease.requiredOMRSVersion)) + '-' + OPENMRS_VERSION_BADGE_COLOR + '.svg?style=flat-square';
      } else {
        url += 'version-unknown-lightgrey.svg?style=flat-square';
      }
    }

    request(url).pipe(res);
  });
};
