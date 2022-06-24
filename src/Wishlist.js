//import Car from "./Car.js";
class Wishlist{
    constructor(...cars){
        this.carsList = cars || [];
    }

    addCar(car){
        this.carsList.push(car);
    }

    removeCar(car){
        this.carsList = this.carsList.filter((item) => {
            return item != car;
        })
    }

    getListCopy(){
        return Array.from(this.carsList);
    }

    getStringList(){
        return this.carsList.reduce((acc, car, index) => {
            if (index == 0) return acc += car.getInfo();
            else return acc += "\n" + car.getInfo();
        }, "");
    }

}

export default Wishlist;