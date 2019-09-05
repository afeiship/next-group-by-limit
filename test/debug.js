require('../src/next-group-by-limit');

var list1 = [105.4208984375, 105.4208984375, 132.373046875, 132.373046875, 132.373046875];
var limit = 400;
var groups = nx.groupByLimit(list1, limit);

console.log(groups);

