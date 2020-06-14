/* Stacks ! */

// Operations push, pop, peek, size

class Stack {
    constructor() {
        this.index = 0;
        this.storage = [];
    }

    push = (x) => {
        this.storage[this.index++] = x;
    }

    pop = () => {
        if (this.index === 0) {
            return "No elements to pop";
        }
        let result = this.storage[--this.index];
        delete this.storage[this.index];
        return result;
    }

    peek = () => {
        return this.storage[this.index - 1];
    }

    size = () => {
        return this.index;
    }

    toString = () => {
        return this.storage.toString();
    }
}

const isPalindrome = (word) => {
    const stack = new Stack();
    let rWord = ''
    for (let i = 0; i < word.length; i++) {
        stack.push(word[i]);
    }
    while (stack.size() > 0) {
        rWord += stack.pop();
    }
    if (rWord === word) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('racecar'));

const computeFactorial = (number) => {
    const stack = new Stack();
    let factorial = 1;
    if (typeof number !== "number") {
        return false;
    }
    if (number === 0) {
        return 1;
    }
    while (number > 1) {
        stack.push(number--);
    }
    while (stack.size() > 0) {
        factorial *= stack.pop();
    }
    return factorial;
}

console.log(computeFactorial(5));

isBalancedParenthesis = (input) => {
    const stack = new Stack();
    let parenthesis = '()[]{}<>';
    let isBalanced = false;

    for (let i = 0; i < input.length; i++) {
        let parenthesisIndex = parenthesis.indexOf(input[i]);
        if (parenthesisIndex % 2 == 0) {
            stack.push(input[i]);
        } else if (parenthesisIndex % 2 == 1 && parenthesisIndex !== -1) {
            const char = stack.pop();
            if (parenthesisIndex - parenthesis.indexOf(char) === 1) {
                isBalanced = true;
                continue;
            } else {
                isBalanced = false;
                break;
            }
        }
    }
    if (isBalanced) {
        return `your string ${input} is balanced`;
    } else {
        return `your string ${input} is not balanced, please check the string`;
    }
}
const input = 'class Sample { constructor() {} this.sample= function(){} }';
console.log(isBalancedParenthesis(input));



