/*!
 * name: next-group-by-limit
 * url: https://github.com/afeiship/next-group-by-limit
 * version: 1.0.0
 * date: 2019-09-20T08:20:07.189Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var RETURN_VALUE = function(inArray,inIndex) { return inArray[inIndex]; };
  var DEFAULT_OPTIONS = {
    limitWidth: 1000,
    value: RETURN_VALUE
  };

  nx.groupByLimit = function(inArray, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var limit = options.limitWidth;
    if (!inArray || !inArray.length) return [];
    var len = inArray.length;
    var result = [];
    var list = inArray.slice(0);
    if (len === 1) return [list];
    if (len === 2) {
      total = options.value(list, 0) + options.value(list, 1);
      if (total <= limit) {
        return [list];
      } else {
        return [[options.value(list, 0)], [options.value(list, 1)]];
      }
    }

    var groupBy = function(inList) {
      var total = 0;
      var idx = -1;
      for (var i = 0; i < inList.length; ) {
        var current = options.value(inList,i);
        total = total + current;
        idx = i++ || 1;
        if (total >= limit) {
          result.push(inList.splice(0, idx));
          groupBy(list);
        } else {
          if (i === inList.length) {
            result.push(inList);
          }
        }
      }
      return result;
    };

    return groupBy(list);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.GroupByLimit;
  }
})();

//# sourceMappingURL=next-group-by-limit.js.map
