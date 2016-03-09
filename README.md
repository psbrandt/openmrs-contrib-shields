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

## Examples

<table>
  <tr>
    <th>Description</th>
    <th>URL</th>
    <th>Result</th>
  </tr>
  <tr>
    <td>Platform 2.0.x Build Status</td>
    <td>https://omrs-shields.psbrandt.io/build/TRUNK/OC2</td>
    <td><img src="https://omrs-shields.psbrandt.io/build/TRUNK/OC2"/></td>
  </tr>
  <tr>
    <td>Logic Module Build Status</td>
    <td>https://omrs-shields.psbrandt.io/build/LOGIC/LOGIC</td>
    <td><img src="https://omrs-shields.psbrandt.io/build/LOGIC/LOGIC"/></td>
  </tr>
  <tr>
    <td>FHIR Module Build Status</td>
    <td>https://omrs-shields.psbrandt.io/plan/FHIR/FM</td>
    <td><img src="https://omrs-shields.psbrandt.io/plan/FHIR/FM"/></td>
  </tr>
	<tr>
    <td>Rest Web Services Latest Version</td>
    <td>https://omrs-shields.psbrandt.io/version/153</td>
    <td><img src="https://omrs-shields.psbrandt.io/version/153"/></td>
  </tr>
  <tr>
    <td>Rest Web Services OpenMRS Version</td>
    <td>https://omrs-shields.psbrandt.io/omrsversion/153</td>
    <td><img src="https://omrs-shields.psbrandt.io/omrsversion/153"/></td>
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

[MPL-2.0](http://openmrs.org/license/)
