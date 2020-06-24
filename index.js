const stejs = require('stejs');
const path = require('path');
const { getOptions } = require('loader-utils');

module.exports = function(content)
{
    const options = getOptions(this);

    let context;

    if(options.data == null)
    {
        context = {};
    }
    if(typeof options.data == 'object')
    {
        context = options.data;
    }
    else if(typeof options.data == 'function')
    {
        context = options.data();
    }
    else if(typeof options.data == 'string')
    {
        const p = path.resolve(options.data);

        this.addDependency(p);
        context = require(p);
    }
    else
    {
        throw new Errorconsole.error('data options needs to be an object, function or string');
    }

    return stejs(content, context);
}