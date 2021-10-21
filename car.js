class Car {
	constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(num) {
        this.speed = this.speed + num
    }
    
    brake(num) {
        this.speed = this.speed - num
    }

    describe() {
        this.describe = `${this.brand} running at ${this.speed} km/h`
    }
}


var ford = new Car("Ford", 0)
console.log(ford)
ford.accelerate(50)
console.log(ford)
ford.brake(25)
console.log(ford)
ford.describe()
console.log(ford)

var BMW = new Car("BMW", 0)
console.log(BMW)
BMW.accelerate(50)
console.log(BMW)
BMW.brake(25)
console.log(BMW)
BMW.describe()
console.log(BMW)