class Animal {
    name
    weight

    constructor(name, weight) {
        this.name = name
        this.weight = weight
    }

    setName(name) {
        this.name = name
    }

    setWeight(wight) {
        this.weight = wight
    }

    getName() {
        return this.name
    }

    getWeight() {
        return this.weight
    }

    toString() {
        return ` tên: ${this.name}, cân nặng: ${this.weight}`
    }
}
