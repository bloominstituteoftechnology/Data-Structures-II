
class RedBlackTree {
  constructor(value, color, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
    this.color = color || 'black';
    this.level = 0;
    this.key = 1;
    this.parent = null;
  }
  insert(value) {
    const blackChildL = new RedBlackTree(null, 'black', null, null);
    const blackChildR = new RedBlackTree(null, 'black', null, null);
    const node = new RedBlackTree(value, 'red', blackChildL, blackChildR);
    let gp;
    const parent = (c) => {
      if (c.right) {
        c.right.parent = c;
        parent(c.right);
      }
      if (c.left) {
        c.left.parent = c;
        parent(c.left);
      }
    };
    const correct = (c, p) => {
      if (this.key === 1) this.color = 'black';
      let u;
      if (gp) {
        if (p.value > gp.value) u = gp.left;
        if (p.value < gp.value) u = gp.right;
      }
      if (p.color === 'red') {
        if (u && u.color === 'red') {
          gp.color = 'red';
          u.color = 'black';
          p.color = 'black';
          if (gp.parent) correct(gp, gp.parent);
        }
        if (u && u.color === 'black') {
          if (gp && p.value < gp.value && c.value < p.value) {
            const temp = p.right;
            gp.left = temp;
            p.right = gp;
            p.color = 'black';
            gp.color = 'red';
            if (gp.parent) {
              const gpp = gp.parent;
              if (gp.value > gpp.value) gpp.right = p;
              if (gp.value < gpp.value) gpp.left = p;
            }
            parent(this);
          }
          if (gp && p.value > gp.value && c.value > p.value) {
            const temp = p.left;
            gp.right = temp;
            p.left = gp;
            p.color = 'black';
            gp.color = 'red';
            if (gp.parent) {
              const gpp = gp.parent;
              if (gp.value > gpp.value) gpp.right = p;
              if (gp.value < gpp.value) gpp.left = p;
            }
            parent(this);
          }
          // if (gp && p.value < gp.value && p.value < c.value) {
          //   const tr = c.right;
          //   const tl = c.left;
          //   gp.left = tr;
          //   p.right = tl;
          //   c.right = g;
          //   c.left = p;
          //   c.color ='black';
          //   gp.color = 'red';
          //   if (gp.parent) {
          //      const gpp = gp.parent;
          //      if (gp.value > gpp.value) gpp.right = c;
          //      if (gp.value < gpp.value) gpp.left = c;
          //    }
          //   parent(this);
          // }
          // if (gp && p.value > gp.value && p.value > c.value) {
          //   const tr = c.right;
          //   const tl = c.left;
          //   gp.right = tl;
          //   p.left = tr;
          //   c.left = gp;
          //   c.right = p;
          //   c.color = 'black';
          //   gp.color = 'red';
          //   if (gp.parent) {
          //      const gpp = gp.parent;
          //      if (gp.value > gpp.value) gpp.right = c;
          //      if (gp.value < gpp.value) gpp.left = c;
          //    }
          //   parent(this);
          // }
        }
      }
    };
    const keyadj = (current) => {
      if ((current.left && current.left.key === current.key * 2)) current.key.left = current.key * 2;
      if ((current.right && current.right.key === (current.key * 2) + 1)) current.key.right = (current.key * 2) + 1;
      if (current.left) keyadj(current.left);
      if (current.right) keyadj(current.right);
    };
    const rec = (current) => {
      node.level++;
      if (current.value > value && (!current.left || !current.left.value)) {
        node.key *= 2;
        node.left.key = node.key * 2;
        node.key.right = (node.key * 2) + 1;
        node.parent = current;
        current.left = node;
        correct(current.left, current);
      } else if (current.value > value && (current.left && current.left.value)) {
        node.key *= 2;
        gp = current;
        rec(current.left);
      } else if (current.value < value && (!current.right || !current.right.value)) {
        node.key *= 2;
        node.key++;
        node.left.key = node.key * 2;
        node.key.right = (node.key * 2) + 1;
        node.parent = current;
        current.right = node;
        correct(current.right, current);
      } else if (current.value < value && (current.right && current.right.value)) {
        node.key *= 2;
        node.key++;
        gp = current;
        rec(current.right);
      }
      keyadj(this);
    };
    rec(this);
  }
}

// keep cutting off nodes
// still trying to figure out how to avoid this

const rbt = new RedBlackTree(5);
rbt.insert(7);
rbt.insert(3);
rbt.insert(8);
rbt.insert(9);
rbt.insert(10);
rbt.insert(15);
rbt.insert(4);
rbt.insert(12);
rbt.insert(6);
