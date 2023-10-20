const myIterable = {
    from: 1,
    to: 4,

    [Symbol.iterator]: function () {
        const from = this.from;
        const to = this.to;
        if (typeof from !== 'number' || typeof to !== 'number') {
            throw new Error("Значения 'from' и 'to' должны быть типа Number")
        }

        if (from > to) {
            throw new Error("Значение 'from' не может быть больше 'to'")
        }

        return {
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return {
                        done: false,
                        value: this.current++
                    }
                } else {
                    return {
                        done: true
                    }
                }
            },
        };
    },
}

// for (let item of myIterable) {
//     console.log(item);
// }
