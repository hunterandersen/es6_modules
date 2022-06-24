class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo(){
        return `${this.year} ${this.make} ${this.model}`;
    }

}

export default Car;