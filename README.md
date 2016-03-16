<img src="https://talk.openmrs.org/uploads/default/original/2X/f/f1ec579b0398cb04c80a54c56da219b2440fe249.jpg" alt="OpenMRS"/>

# OpenMRS Shields <a href="http://openmrs.org" alt="OpenMRS"><img src="https://img.shields.io/badge/openmrs-%E2%99%A5_shields-F26522.svg?style=flat-square" alt="OpenMRS"/></a>

> [shields.io](http://shields.io/) badges for [OpenMRS](http://openmrs.org) repositories

This tool looks up build and version information for OpenMRS repositories and generates shields.

## Usage

### Build Status

To get a shield for the build status of a project, look up the `PROJECT-KEY` and `PLAN-KEY` on [the CI server](https://ci.openmrs.org/) and then request:

````
https://omrs-shields.psbrandt.io/build/PROJECT-KEY/PLAN-KEY
````

If you prefer the `PROJECT-KEY` and `PLAN-KEY` to appear on the shield, substitute
`plan` for `build` in the URL:

````
https://omrs-shields.psbrandt.io/plan/PROJECT-KEY/PLAN-KEY
````

### Latest Module Version

To get the latest version of a module, visit the module page on [Modulus](https://modules.openmrs.org/) to find the `MODULE-ID` (numeric value in the URL) and request:

````
https://omrs-shields.psbrandt.io/version/MODULE-ID
````

### Module OpenMRS Version

To get the required OpenMRS version for a module, request:

````
https://omrs-shields.psbrandt.io/omrsversion/MODULE-ID
````

### Custom Shields

Shields with custom labels and values can be generated at the `/custom` endpoint by adding `label`, `value` and `color` to the path. For example:

````
https://omrs-shields.psbrandt.io/custom/openmrs/rules/green
````

The value of `color` can be any of `brightgreen` , `green`, `yellowgreen`, `yellow`, `orange`, `red`, `lightgrey`, or `blue`, or a 6 character hex color code like `6a0888` or `81bef7`.

### Parameters

Shields can be customized using the following query parameters.

#### Logo

Use the `logo` query parameter to add either the `openmrs` or [`esaude`](http://esaude.org) logo to your sheild.

#### Style

The `style` query parameter can be used to set the style of the sheild to one of `flat-square` (default), `flat` or `plastic`.

:pushpin: **Due to [badges/shields#671](https://github.com/badges/shields/issues/671), it is not currently possible to use the `style` and `logo` parameters together.**

## Examples

<table>
  <tr>
    <th>Description</th>
    <th>URL</th>
    <th>Result</th>
  </tr>
  <tr>
    <td>Platform 2.0.x Build Status</td>
    <td><a href="https://omrs-shields.psbrandt.io/build/TRUNK/OC2">/build/TRUNK/OC2</a></td>
    <td><img src="https://omrs-shields.psbrandt.io/build/TRUNK/OC2"/></td>
  </tr>
  <tr>
    <td>Logic Module Build Status</td>
    <td><a href="https://omrs-shields.psbrandt.io/build/LOGIC/LOGIC">/build/LOGIC/LOGIC</a></td>
    <td><img src="https://omrs-shields.psbrandt.io/build/LOGIC/LOGIC"/></td>
  </tr>
  <tr>
    <td>FHIR Module Build Status</td>
    <td><a href="https://omrs-shields.psbrandt.io/plan/FHIR/FM">/plan/FHIR/FM</a></td>
    <td><img src="https://omrs-shields.psbrandt.io/plan/FHIR/FM"/></td>
  </tr>
	<tr>
    <td>Rest Latest Version</td>
    <td><a href="https://omrs-shields.psbrandt.io/version/153">/version/153</a></td>
    <td><img src="https://omrs-shields.psbrandt.io/version/153"/></td>
  </tr>
  <tr>
    <td>Rest OpenMRS Version</td>
    <td><a href="https://omrs-shields.psbrandt.io/omrsversion/153">/omrsversion/153</a></td>
    <td><img src="https://omrs-shields.psbrandt.io/omrsversion/153"/></td>
  </tr>
  <tr>
    <td>Legacy UI Build Status</td>
    <td><a href="https://omrs-shields.psbrandt.io/plan/LU/LU?style=flat">/plan/LU/LU?style=flat</a></td>
    <td><img src="https://omrs-shields.psbrandt.io/plan/LU/LU?style=flat"/></td>
  </tr>
  <tr>
    <td>RefApp Build Status</td>
    <td><a href="https://omrs-shields.psbrandt.io/plan/REFAPP/OMODDISTRO?style=plastic">/plan/REFAPP/OMODDISTRO?style=plastic</a></td>
    <td><img src="https://omrs-shields.psbrandt.io/plan/REFAPP/OMODDISTRO?style=plastic"/></td>
  </tr>
  <tr>
    <td>App Framework Build Status</td>
    <td><a href="https://omrs-shields.psbrandt.io/plan/AF/AF?logo=openmrs">/plan/AF/AF?logo=openmrs</a></td>
    <td><img src="https://omrs-shields.psbrandt.io/plan/AF/AF?logo=openmrs"/></td>
  </tr>
  <tr>
    <td>Custom Message</td>
    <td><a href="https://omrs-shields.psbrandt.io/custom/custom/message/green?style=flat">/custom/custom/message/green?style=flat</a></td>
    <td><img src="https://omrs-shields.psbrandt.io/custom/custom/message/green?style=flat"/></td>
  </tr>
  <tr>
    <td>eSaude Version</td>
    <td><a href="https://omrs-shields.psbrandt.io/custom/esaude/v1.2.0/brightgreen?logo=esaude">/custom/esaude/v1.2.0/brightgreen?logo=esaude</a></td>
    <td><img src="https://omrs-shields.psbrandt.io/custom/esaude/v1.2.0/brightgreen?logo=esaude"/></td>
  </tr>
  <tr>
    <td>Unicorn Approved</td>
    <td><a href="https://omrs-shields.psbrandt.io/custom/unicorn/🦄_approved/ff69b4?logo=openmrs">/custom/unicorn/🦄_approved/ff69b4?logo=openmrs</a></td>
    <td><img src="https://omrs-shields.psbrandt.io/custom/unicorn/%F0%9F%A6%84_approved/ff69b4?logo=openmrs"/></td>
  </tr>
</table>

## Development

To run an OpenMRS Shields server locally, clone this repo, then install the dependencies:

````
npm install
````

Then run the server:

````
node index.js
````

Access the server at [http://localhost:3033/build/TRUNK/OC2](http://localhost:3033/build/TRUNK/OC2).

## License

[MPL-2.0 w/ HD](http://openmrs.org/license/)
