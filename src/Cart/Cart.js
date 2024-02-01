const EmptyCartException = require("./EmptyCartException");

module.exports = class Cart {
	_items = [];

	constructor(items) {
		this._items = items;
	}

    count (distinct = false) {
        this.#checkEmptyCart();
        let totalItems = 0;
        if (distinct) {
            return this._items.length;
        }
        this._items.forEach(item => {
            totalItems += item.quantity;
        });
        return totalItems;
    }

	get items() {
		this.#checkEmptyCart();
		return this._items;
	}

	get total() {
        this.#checkEmptyCart();
		let total = 0;
		this._items.forEach((item) => {
			total += item.total;
		});
		return total;
	}

	#checkEmptyCart() {
		if (this._items == null) {
			throw new EmptyCartException();
		}
	}
};
