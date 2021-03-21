// const core = require('@actions/core');
// const github = require('@actions/github');
// const fileChanges = require('trilom/file-changes-action@v1.2.3');

// try {
//   // `who-to-greet` input defined in action metadata file
//   const nameToGreet = core.getInput('who-to-greet');
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
//   core.setOutput("time", time);
//   // Get the JSON webhook payload for the event that triggered the workflow
//   // const payload = JSON.stringify(github.context, undefined, 2)
//   console.log(`fileChanges: \n${fileChanges}`);
//   console.log(`github: \n${github}`);
// } catch (error) {
//   core.setFailed(error.message);
// }

const argv = process.argv
console.log('Parametros Recibidos: ', argv)
