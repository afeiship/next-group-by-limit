(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.groupByLimit = function(inArray, inLimit) {
    if (!inArray || !inArray.length) return [];
    var len = inArray.length;
    var result = [];
    var list = inArray.slice(0);
    if (len === 1) return [list];
    if (len === 2) {
      total = list[0] + list[1];
      if (total <= inLimit) {
        return [list];
      } else {
        return [[list[0]], [list[1]]];
      }
    }

    var groupBy = function(inList) {
      var total = 0;
      var idx = -1;
      for (var i = 0; i < inList.length; ) {
        var current = inList[i];
        total = total + current;
        idx = i++ || 1;
        if (total >= inLimit) {
          result.push(inList.splice(0, idx));
          groupBy(list);
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
