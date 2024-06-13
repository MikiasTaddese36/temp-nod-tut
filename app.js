//npm global command comes with the code
//npm --version (to check the installed version)

//local dependecy - use it only on the current project
//npm -i <packagename>


//global dependency use it on any projects
//npm install -g <packagename>
//sudo install -g <packagename>

//package.json - manifest file (stores important file or info about the project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y(everything by default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);