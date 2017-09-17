const config = {
  container: "#RedBlackTree",
  connectors: { type: 'straight' }
};

let rbt_config = [];

const rbt = new RedBlackTree();

function loadConfig() {
  rbt_config.length = 0;

  rbt_config.push(config);
  
  // const arr = [1,2]
  // arr.forEach(item => rbt.add(item));

  const cache = {};

  rbt.eachBFS((value, node, layer) => {
    var n = {
      HTMLclass: node.isBlack ? 'black' : 'red',
      text: { value: `${node.value}` }
    };
    if (!node.isRoot) {
      n.parent = cache[node.parent.value];
    }
    cache[node.value] = n;
    rbt_config.push(n);
  });
}

loadConfig();

window.onresize = function() {
  if (window.treant !== undefined) {
    window.treant.tree.reload();
  }
}

function addToTree(...numbers) {
  numbers.forEach((num) => rbt.add(num));
  loadConfig();
  try {
    window.treant = new Treant(rbt_config);
  } catch (e) {
    window.treant = new Treant(rbt_config);
  }
}

// function removeFromTree(...numbers) {
//   numbers.forEach((num) => rbt.remove(num));
//   loadConfig();
//   try {
//     window.treant = new Treant(rbt_config);
//   } catch (e) {
//     window.treant = new Treant(rbt_config);
//   }
// }

function addClick() {
  let value = document.getElementById('add').value;
  if (value !== null && value !== undefined && value !== '') {
    addToTree(!isNaN(value) ? Number.parseFloat(value) : value);
    document.getElementById('add').value = "";
  }
}

// function removeClick() {
//   let value = document.getElementById('remove').value;
//   if (value !== null && value !== undefined && value !== '') {
//     removeFromTree(!isNaN(value) ? Number.parseFloat(value) : value);
//     document.getElementById('remove').value = "";
//   }
// }
