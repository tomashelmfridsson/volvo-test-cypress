# volvo-test-cypress
Test framework for one volvocar webpage using cypress

## Requirements
- Node v ≥ 16 (if you use nvm, run `nvm use`)
- Javascript editor

## Setup environment
Install all dependencies:
```
$ npm install
```

## Run tests
There are different way to run the test
- Local on my computer, use `npm run test:local`
- With a docker compose yml file, use `npm run test:docker`
- Using cypress dashboard, use `npm run test:dashboard` (login to dashboard needed)
- Using a Dockerfile use `npm run test:build` and `npm run test:run`
- Start test with a shellscript `.cy-run.sh`

## Testcases
### Campaign
In this spec file we test functional flow tests

### Lighthouse
This testcase do an audit for performance and accessibility for the webpage

Happy testing! :heart:
