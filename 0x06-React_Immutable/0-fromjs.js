const { fromJS, Map } = require('immutable');

function getImmutableObject (obj) {
    if (typeof obj !== 'object' || obj === null) {
        throw new Error('Input must be a valid object')
    }

    return fromJS(obj);
}

const inputObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
  };

const immutableMap = getImmutableObject(inputObject);

console.log(immutableMap.toString());
