const config = {
  container: "#RedBlackTree",
  connectors: { type: 'straight' }
};

const rbt_config = [config];

const rbt = new RedBlackTree(3);

const arr = [5]
arr.forEach(item => rbt.add(item));

const cache = {};

rbt.eachBFS((value, node, layer) => {
  console.log('\n==========');
  console.log(value);
  console.log(node);
  var n = {
    HTMLclass: node.isBlack ? 'black' : 'red',
    text: { value: `${node.value}` }
    // innerHTML: `<p class="node-value">1</p>` + 
    //   '<p class="node tooltip">' +
    //     `value: ${node.value}<br>`+
    //     `Left Child: ${node.parent}<br>`+
    //     `Left Child: ${node.leftChild}<br>`+
    //     `Right Child: ${node.rightChild}<br>`+
    //   '</p>'
  };
  if (!node.isRoot) {
    n.parent = cache[node.parent.value];
  }
  cache[node.value] = n;
  rbt_config.push(n);
});

console.log(cache);
console.log(Object.keys(cache).length);

console.log('RBT SIZE ' + rbt_config.length);