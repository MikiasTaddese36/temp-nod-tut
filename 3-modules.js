//Common Js every file is a module by default
//Modules - Encapsulated Code (Only share Minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
sayHi('Susan');
sayHi(names.John);
sayHi(names.Peter);
