class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
        this.storage = [];
    }

    find = (data, root) => {
        if (root) {
            this.find(data, root.left);
            if (root.data == data) {
                this.storage.push(root);
            }
            this.find(data, root.right);
        }
    }

    insert = (data) => {
        if (!this.root) {
            this.root = new Node(data[0]);
        }
        for (let i = 0; i < data.length; i++) {
            this.find(data[i], this.root);
            let parent = this.storage.pop();
            parent.left = new Node(data[2 * i + 1]);
            parent.right = new Node(data[2 * i + 2]);
        }
        console.log(this.root);
    }
}

const bt = new BinaryTree();
bt.insert([2, 4, 1, 5, 8, 7, 9]);
