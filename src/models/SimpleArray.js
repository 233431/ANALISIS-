class SimpleArray {
    constructor() {
        this.data = [];
    }
    insert(item) {
        this.data.push(item);
    }
    search(item) {
        return this.data.includes(item);
    }
    get() {
        return this.data;
    }
}
module.exports = SimpleArray;
