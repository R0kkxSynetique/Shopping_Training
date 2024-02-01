const EmptyCartException = require('./EmptyCartException');


module.exports = class Cart {

    _items = [];

    constructor(items) {
        this._items = items;
    }

    get items() {
        this.#checkEmptyCart();
        return this._items;
    }

    #checkEmptyCart() {
        if (this._items == null) {
            throw new EmptyCartException();
        }
    }

};
