
const _ = require('lodash');

module.exports = function (context) {
    //if(_isEmpty(context)) return 'SEX'
    return context.data.root.query.name +''+ context.data.root.query.suffix;
}