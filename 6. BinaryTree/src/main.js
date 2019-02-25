// Binary tree object
function BinaryTree() {
    this.root = null;
}

// Make node (value, left, right) for current tree
BinaryTree.prototype.makeNode = function(value) {
    var node = {};
    node.value = value;
    node.left = null;
    node.right = null;
    return node;
};

// Add new value to node
BinaryTree.prototype.add = function(value) {
    var currentNode = this.makeNode(value);
    if (!this.root) {
        this.root = currentNode;
    } else {
        this.insert(currentNode);
    }
    return this;
};

// Support method for Add
BinaryTree.prototype.insert = function(currentNode) {
    var value = currentNode.value;
    var traverse = function(node) {
        if (value === node.value) {
            return;
        } else if (value > node.value) {
            if (!node.right) {
                node.right = currentNode;
                return;
            } else
                traverse(node.right);
        } else if (value < node.value) {
            if (!node.left) {
                node.left = currentNode;
                return;
            } else
                traverse(node.left);
        }
    };
    traverse(this.root);
};

// Full clean of a binary tree
BinaryTree.prototype.empty = function() {
    this.root = null;
}

// Delete of a needed value of a node
BinaryTree.prototype.remove = function(value) {
    this.root = this.removeInner(value, this.root);
    return this;
}

// Additional method for Remove
BinaryTree.prototype.removeInner = function(value, node) {
    if (node) {
        if (value < node.value) {
            node.left = this.removeInner(value, node.left);
        } else if (value > node.value) {
            node.right = this.removeInner(value, node.right);
        } else {
            node = node.left || node.right;
        }
    }
    return node;
}

// Find needed value of a node
BinaryTree.prototype.find = function(value) {
    var node = this.root;
    var traverse = function(node) {
        if (!node) return false;
        if (value === node.value) {
            return node;
        } else if (value > node.value) {
            return traverse(node.right);
        } else if (value < node.value) {
            return traverse(node.left);
        }
    };
    return traverse(node);
};

// Convert binary tree to array list
BinaryTree.prototype.toArray = function() {
    var result = [];
    var node = this.root;
    if (!node) return null;

    var traverse = function(node) {
        node.left && traverse(node.left);
        result.push(node.value);
        node.right && traverse(node.right);
    }

    traverse(node);

    return result;
}

// Convert binary tree to string
BinaryTree.prototype.toString = function() {
    var result = this.toArray();
    return result.toString();
}

// Object of a linked list
function LinkedList() {
    this.head = null;
}

// Convert binary tree to linked list
BinaryTree.prototype.toLinkedList = function() {

    var result = [];
    var node = this.root;
    if (!node) return null;

    var traverse = function(node) {
        node.left && traverse(node.left);
        result.push(node.value);
        node.right && traverse(node.right);
    };

    traverse(node);

    var makeNode = function(value) {
        var node = {};
        node.value = value;
        node.next = null;
        return node;
    };

    var list = new LinkedList();
    list.head = makeNode(result[0]);
    var current = list.head;

    for (var i = 1; i < result.length; i++) {
        var currentNode = makeNode(result[i]);
        current.next = currentNode;
        current = current.next;
    }
    return list;
};