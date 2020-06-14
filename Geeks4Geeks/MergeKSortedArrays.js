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
}

class MergeKSortedArrays {
    constructor() {
        this.bst = new BinarySearchTree();
    }

    merge = (data) => {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length; j++) {
                this.bst.insert(data[i][j]);
            }
        }
        this.bst.inOrder(this.bst.root);
    }
}

const ma = new MergeKSortedArrays();
ma.merge([[1, 2, 3], [11, 13, 15], [7, 8, 9]]);
console.log(ma.bst.storage.toString());
