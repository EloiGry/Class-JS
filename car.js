// class Car {
// 	constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed
//     }

//     accelerate(num) {
//         this.speed = this.speed + num
//     }
    
//     brake(num) {
//         this.speed = this.speed - num
//     }

//     describe() {
//         this.describe = `${this.brand} running at ${this.speed} km/h`
//     }
// }


// var ford = new Car("Ford", 0)
// console.log(ford)
// ford.accelerate(50)
// console.log(ford)
// ford.brake(25)
// console.log(ford)
// ford.describe()
// console.log(ford)

// var BMW = new Car("BMW", 0)
// console.log(BMW)
// BMW.accelerate(50)
// console.log(BMW)
// BMW.brake(25)
// console.log(BMW)
// BMW.describe()
// console.log(BMW)

class TV {
    constructor(brand, channel, volume) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    increase(num) {
        if (num + this.volume < 100) {
            this.volume = this.volume + num
        }

    }

    decrease (num) {
        if (num - this.volume > 0) {
            this.volume = this.volume - num
        }
    }

    channelChange (num) {
        console.log(num)
        if (num > 0 && num < 50) {
            this.channel = num
            console.log("je suis ici")
        }        
    }

    reset () {
        this.channel = 1
        this.volume = 50
    }

    describe () {
        this.describe = `${this.channel} running at ${this.volume} `
    }

}

var tv = new TV ("Sony", this.channel, this.volume)    
 console.log(tv)
 tv.channelChange (47)
 console.log(tv)
 tv.channelChange (52)
 console.log(tv)
 tv.increase (20)
 console.log(tv)
 tv.increase (40)
 console.log(tv)
 tv.decrease(30)
 console.log(tv)
 tv.increase (40)
 console.log(tv)