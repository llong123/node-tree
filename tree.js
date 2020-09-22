function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

class Tree {
  constructor() {
    this.root = new Node("root");
  }

  add(toNodeData) {
    const parent = toNodeData ? this.findBFS(toNodeData) : null;

    if (parent) {
      var node = new Node();
      node.data = parent.data + "." + (parent.children.length + 1);
      node.parent = parent.data;
      parent.children.push(node);
    } else {
      this.root.children.push(
        new Node("Noodi " + (this.root.children.length + 1))
      );
    }

    display();
  }

  findBFS(data) {
    let _node = null;

    this.traverseBFS((node) => {
      if (node.data == data) {
        _node = node;
      }
    });

    return _node;
  }

  traverseBFS(cb) {
    const queue = [this.root];

    if (cb) {
      while (queue.length) {
        const node = queue.shift();

        cb(node);

        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
  }
}

var list = "";
var tree = new Tree();

window.onload = () => {
  this.tree.add();
};

function display() {
  this.list = "";
  listNode(this.tree.root);
}

const listNode = function (node) {
  var data = node.data == "root" ? "" : node.data;

  this.list += "<ul id='" + node.data + "'>";
  this.list += "<li>" + node.data;

  if (node.children) {
    node.children.forEach((c) => listNode(c));
    this.list += `<ul><a href="javascript:this.tree.add('${data}')">[Lisää]</a></ul>`;
  }
  this.list += "</li>";
  this.list += "</ul>";
  document.getElementById("container").innerHTML = this.list;
};
