# AstroBrowser

## Instalation

- Install Node.js
- Clone repo:
```
git clone https://github.com/fab77/astrobrowser.git
```
- Move into the astrobrowser folder:
```
cd astrobrowser
```
- Install the required `dev` module:
```
$ npm i
```
- Compile the project:
```
$ npm run all
```

## Usage

- Move into the astrobrowser folder:
```
cd astrobrowser
```
- Run the application:
```
$ npm run devstart
```
- To navigate the sky, open your browser and point to:
 <http://localhost:4000>
- To directly retrieve a FITS cutout, you may query the URL:
```
  http://localhost:4000/api/cutout?radiusasec=<radiusasec>&pxsizeasec=<pxsizeasec>&radeg=<radeg>&decdeg=<decdeg>&hipsbaseuri=<hipsbareuri>
```
with:
	- `<radiusasec>`: radius of the field of view, in arcsec
	- `<pxsizeasec>`: pixel size, in arcsec
	- `<radeg>`: right ascension of the image centre, in deg
	- `<decdeg>`: declination of the image centre, in deg
	- `<hipsbareuri>`: base URL of the desired HiPS map (see the [aggregator list](https://aladin.cds.unistra.fr/hips/list) and/or [MOC query](http://alasky.cds.unistra.fr/MocServer/query) services)

