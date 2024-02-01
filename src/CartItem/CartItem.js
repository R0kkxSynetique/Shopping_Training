"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    _articleId;
    _name;
    _quantity;
    _price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        this.#validateArticleId(articleId);
        this.#validateQuantity(quantity);
        this.#validatePrice(price);
        this.price = price;
        this._articleId = articleId;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }

    get articleId() {
        throw new Error();
    }

    get name() {
        throw new Error();
    }

    get quantity() {
        throw new Error();
    }

    set quantity(value) {
        throw new Error();
    }

    get price() {
        throw new Error();
    }

    set price(value) {
        throw new Error();
    }

    get total() {
        return this.price * this.quantity;
    }
    //endregion public methods

    //region private methods
    #validateArticleId(articleId) {
        if (articleId < 1) {
            throw new InvalidArticleIdException();
        }
    }

    #validateQuantity(quantity) {
        if (quantity < 1) {
            throw new InvalidQuantityException();
        }
    }

    #validatePrice(price) {
        if (price < 10) {
            throw new InvalidPriceException();
        }
    }
    //endregion private methods
}



