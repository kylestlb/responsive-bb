How to build:

`npm install`

`bower install`

Then, need to compile JSX into pure JS (when we decide to do extreme tooling, this can be avoided).

`jsx --extension jsx client/components client/components/build`

`npm start`

Project tracking in the README for now because lazy...

Todos:
- "Learn" basics of Express + React
- Wire up simple 'hello world' homepage from front to back 
- Build React components for pieces of discussion board

Decisions:
- Implement Flux architecture?
- Database choice?
- Unit test framework?
- Wiredep for auto-injection of bower components?
- Use NPM to track all deps and then browserify to pack all css and js?
- Grunt/gulp for builds / task running?
