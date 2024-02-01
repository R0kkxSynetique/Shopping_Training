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
        
        this._articleId = articleId;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }

    get articleId() {
        return this._articleId;
    }

    get name() {
        return this._name;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this.#validateQuantity(value);
        this._quantity = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this.#validatePrice(value);
        this._price = value;
    }

    get total() {
        return this._price * this.quantity;
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



