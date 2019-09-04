# next-group-by-limit
> Group list by limit.

## installation
```bash
npm install -S afeiship/next-group-by-limit --registry=https://registry.npm.taobao.org
```

## usage
```js
const list = [10, 40, 50, 45, 23, 12, 100, 123, 120, 12, 12, 123, 123, 2, 123, 144, 198, 130];
const limit = 130;
const groups = nx.groupByLimit(list, limit);
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
```
