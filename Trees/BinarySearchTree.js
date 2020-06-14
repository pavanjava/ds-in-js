class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
        this.storage = [];
    }

    insert = (data) => {
        let node = new Node(data);
        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (!current) {
                        parent.left = node;
                        break;
                    }
                } else {
                    current = current.right;
                    if (!current) {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }

    inOrder = (node) => {
        if (node) {
            this.inOrder(node.left);
            this.storage.push(node.data);
            this.inOrder(node.right);
        }
    }

    preOrder = (node) => {
        if (node) {
            this.storage.push(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder = (node) => {
        if (node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            this.storage.push(node.data);
        }
    }

    show = () => {
        return this.root;
    }

    findMin = () => {
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current.data;
    }

    findMax = () => {
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.data;
    }

    find = (element) => {
        let current = this.root;
        while (current.data != element) {
            if (element < current.data) {
                current = current.left;
            } else {
                current = current.right
            }
        }
        return current;
    }

    remove = (data) => {
        this.root = this.removeNode(this.root, data);
    }

    removeNode = (node, data) => {
        if (!node) {
            return null;
        }
        if (data == node.data) {
            if (!node.left && !node.right) {
                return null;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            // node has both children
            let temp = this.getSmallest(node.right);
            node.data = temp.data;
            node.right = this.removeNode(node.right, temp.data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    getSmallest = (node) => {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
}

let bst = new BinarySearchTree();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

bst.inOrder(bst.root);
console.log(bst.storage.toString());

delete bst.storage;
bst.storage = [];
bst.preOrder(bst.root);
console.log(bst.storage.toString());

delete bst.storage;
bst.storage = [];
bst.postOrder(bst.root);
console.log(bst.storage.toString());

console.log(bst.findMin(), bst.findMax());
console.log(bst.find(23))

bst.remove(37);
bst.remove(23);
bst.remove(3);

delete bst.storage;
bst.storage = [];
bst.inOrder(bst.root);
console.log(bst.storage.toString());
