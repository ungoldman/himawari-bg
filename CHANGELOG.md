# himawari-bg change log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.0](https://github.com/ungoldman/himawari-bg/releases/tag/v2.0.0) - 2022-04-18

[view diff](https://github.com/ungoldman/himawari-bg/compare/v1.0.2...v2.0.0)

### Breaking
- breaking: convert to async function (#15)
- breaking: pkg(engines): set min node to 12

### Features
- feat: add screen & scale options

### Misc
- deps: progress@2
- deps: mkdirp@1
- deps: untildify@4
- ci: add actual test, use gh actions

## [1.0.2](https://github.com/ungoldman/himawari-bg/releases/tag/v1.0.2) - 2022-04-14

[view diff](https://github.com/ungoldman/himawari-bg/compare/v1.0.1...v1.0.2)

### Fixes
- fix: switch to @ungoldman/himawari to fix breaking underlying bug

The source for the image tiles, Japan's NICT (National Institute of Information
and Communications Technology), switched to HTTPS only. The library that fetches
those tiles, [himawari.js](https://github.com/jakiestfu/himawari.js/) hasn't been updated in 6 years. In an effort to get my old himawari
projects working again, I forked himawari.js, fixed it, and republished it as
@ungoldman/himawari.

This program should now work again! Apologies to anyone who has been
unsuccessfully trying to update their wallpaper for the last 2 or 3 years.

## [1.0.1](https://github.com/ungoldman/himawari-bg/releases/tag/v1.0.1) - 2016-10-03

[view diff](https://github.com/ungoldman/himawari-bg/compare/v1.0.0...v1.0.1)

### Fixes
- bugfix: allow omitting options object ([#10](https://github.com/ungoldman/himawari-bg/issues/10))

## [1.0.0](https://github.com/ungoldman/himawari-bg/releases/tag/v1.0.0) - 2016-09-17

[view diff](https://github.com/ungoldman/himawari-bg/compare/v1.0.0-beta...v1.0.0)

- lint: bump standard to latest version (^8), use snazzy
- site: add scripts for generating a gh-pages site
- ci: target node 6 only

## 1.0.0-beta
* parallelize downloads by default
* add version option
* add resources, contributing sections to readme
* expand contributing guidelines

## 1.0.0-alpha.3
* use himawari@^1.2.3 (ETIMEDOUT bug fix for [#5](https://github.com/ungoldman/himawari-bg/issues/5))
* improve docs, add links
* add example script

## 1.0.0-alpha.2
* improve documentation based on feedback

## 1.0.0-alpha.1
* add warning about magick
* add install instructions for imagemagick, graphicsmagick
* improve docs

## 1.0.0-alpha
* alpha release
