# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [To be deprecated]
- Deprecate options "features" and "feature".
- Remove "/features" api path.
- Remove Server and Cli constructors. Use @mocks-server/core instead

## [unreleased]
### Added
### Changed
### Fixed
### Removed

## [1.4.0] -
### Changed
- Core code migrated to @mocks-server/core

## [1.3.0] - 2019-11-17
### Added
- Add programmatic Classes end-to-end tests
- Add files watcher end-to-end tests

### Changed
- Full refactor for making it pluggable.
- Split code into core, cli and api main Classes, which are intended to be published separately.

## [1.2.0] - 2019-11-13
### Added
- Add api acceptance tests

### Changed
- Upgrade dependencies

### Fixed
- Catch server.listen error and reject start method promise with it when occurs.

## [1.1.1] - 2019-11-12
### Changed
- Change readme. Add links to docs website.

## [1.1.0] - 2019-11-08
### Changed
- Change "feature" concept by "behavior". Maintain old "feature" options and urls as aliases for maintaining compatibility.
- Upgrade dependencies

## [1.0.3] - 2019-11-08
### Fixed
- Fix examples and badges in readme.

## [1.0.2] - 2019-11-08
### Changed
- Project forked from xbyorange/mocks-server. Fixed license. Read NOTICE for further details

### Fixed
- Fix some minor Sonar bugs and code smells.

## [1.0.1] - 2019-06-04
### Fixed
- Upgrade dependencies to fix potential security vulnerability
- Bind winston tracer methods to winston tracer instance to fix an issue produced by new Winston version as described in: https://github.com/winstonjs/winston/issues/1577

## [1.0.0] - 2019-06-04
### Changed
- Forked from xbyorange mocks-server gitlab private repository.
