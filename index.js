'use strict';

class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    set from(value) {
        this._from = value;
    }

    get from() {
        return this._from;
    }

    set to(value) {
        this._to = value;
    }

    get to() {
        return this._to;
    }

    get range() {
        return [this._from, this._to];
    }

    validate(number) {
        return number >= this._from && number <= this._to;
    }
}
