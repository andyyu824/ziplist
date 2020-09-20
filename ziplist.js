const test1 = [1, 2, 3];
const test2 = ['a', 'b', 'c'];

function zipList(lista, listb) {
  const zip = [];
  for (let i = 0; i < lista.length; i++) {
    zip.push(lista[i]);
    zip.push(listb[i]);
  }
  return zip;
}

console.log(zipList(test1, test2));

function zipListTheSimpleWay(lista, listb) {
  const mush = _.zip(lista, listb);
  return _.flatten(mush);
}

console.log(zipListTheSimpleWay(test1, test2));
