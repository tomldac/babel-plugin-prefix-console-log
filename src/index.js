/**
 * Pre append a text to the console.log. the default value for the prefix is "Bonify rocks" + rest of console.log.
 *
 * @author Tomasz Dacewicz
 */
module.exports = () => {
    return {
        name: "babel-plugin-prefix-console-log",
        visitor: {
            CallExpression(path, state) {
                const {opts} = state;
                const { node } = path;

                if (node.callee.object && node.callee.object.name === 'console') {
                    let prefix = 'Bonify Rocks'; // Default value for the console.log
                    if (opts && opts.prefix) {

                        // If the prefix value is set then the prefix is changed to one in the options
                        prefix = opts.prefix;
                    }

                    node.arguments.forEach(argument => {
                        //Only append to string Literal not to objects or arrays
                        if (argument.type === 'StringLiteral') {
                            argument.value = `${prefix}${argument.value}`;
                        }
                    })
                }
            }
        }
    }
};