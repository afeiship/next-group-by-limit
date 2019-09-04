var nx = require('next-js-core2');
require('../src/next-group-by-limit');

describe('only one element', function() {
  test('only one < limit', function() {
    var list1 = [10];
    var limit = 130;
    var groups = nx.groupByLimit(list1, limit);
    expect(groups).toEqual([[10]]);
  });

  test('only one = limit', function() {
    var list1 = [130];
    var limit = 130;
    var groups = nx.groupByLimit(list1, limit);
    expect(groups).toEqual([[130]]);
  });

  test('only one > limit', function() {
    var list1 = [140];
    var limit = 130;
    var groups = nx.groupByLimit(list1, limit);
    expect(groups).toEqual([[140]]);
  });
});

describe('only two elements', function() {
  test('n1+n2 < limit', function() {
    var list1 = [10, 20];
    var limit = 130;
    var groups = nx.groupByLimit(list1, limit);
    expect(groups).toEqual([[10, 20]]);
  });
  test('n1+n2 = limit', function() {
    var list1 = [10, 120];
    var limit = 130;
    var groups = nx.groupByLimit(list1, limit);
    expect(groups).toEqual([[10, 120]]);
  });
  test('n1+n2 > limit', function() {
    var list1 = [130, 20];
    var limit = 130;
    var groups = nx.groupByLimit(list1, limit);
    expect(groups).toEqual([[130], [20]]);
  });
});

describe('more elements', function() {
  test('more elements', function() {
    var list1 = [10, 40, 50, 45, 23, 12, 100, 123, 120, 12, 12, 123, 123, 2, 123, 144, 198, 130];
    var limit = 130;
    var groups = nx.groupByLimit(list1, limit);
    // console.log('groups:->', groups);
    expect(groups).toEqual([
      [10, 40, 50],
      [45, 23, 12],
      [100],
      [123],
      [120],
      [12, 12],
      [123],
      [123, 2],
      [123],
      [144],
      [198],
      [130]
    ]);
  });
});
