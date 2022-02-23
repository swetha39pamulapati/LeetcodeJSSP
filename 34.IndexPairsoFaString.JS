class TrieNode {

    // Constructor
    constructor() {
       let isEnd = false;

        this.children = new Array(26);
        for (let i = 0; i < 26; i++)
        this.children[i] = 0;
    }
}