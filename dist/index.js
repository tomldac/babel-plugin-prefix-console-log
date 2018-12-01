"use strict";

/**
 * Pre append a text to the console.log. the default value for the prefix is "Bonify rocks" + rest of console.log.
 *
 * @author Tomasz Dacewicz
 */
module.exports = function () {
  return {
    name: "babel-plugin-prefix-console-log",
    visitor: {
      CallExpression: function CallExpression(path, state) {
        var opts = state.opts;
        var node = path.node;

        if (node.callee.object && node.callee.object.name === 'console') {
          var prefix = 'Bonify Rocks'; // Default value for the console.log

          if (opts && opts.prefix) {
            // If the prefix value is set then the prefix is changed to one in the options
            prefix = opts.prefix;
          }

          node.arguments.forEach(function (argument) {
            argument.value = "".concat(prefix).concat(argument.value);
          });
        }
      }
    }
  };
};