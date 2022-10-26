# volvo-test-cypress
Test framework for one volvocar webpage using cypress

## Requirements
- Node v ≥ 16 
- Javascript editor
- Docker

## Setup environment
Install all dependencies:
```
$ npm install
```

## Environment variables
- Dashboard varable 

## Run tests
There are different way to run the test
- Local on my computer, use `npm run test:local`
- With a docker compose yml file, use `npm run test:docker`
- Using cypress dashboard, use `npm run test:dashboard` (login to dashboard needed)
- Using a Dockerfile use `npm run docker:build` and `npm run docker:run` or to run Performance test thru lighthouse use `npm run docker:lighthouse`
- Start test with a shellscript `.cy-run.sh`

## Testcases
### Campaign
In this spec file we test functional flow tests.
Rigth now just the trust pop up.

### Lighthouse
This testcase do an audit for performance and accessibility for the webpage. An audit report is included report_volvo.html

Happy testing! :heart:
