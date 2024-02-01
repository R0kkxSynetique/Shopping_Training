const EmptyCartException = require("./EmptyCartException");

module.exports = class Cart {
	_items = [];

	constructor(items) {
		this._items = items;
	}

	get items() {
		this.#checkEmptyCart();
		return this._items;
	}

	get total() {
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
