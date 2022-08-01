import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";



// NOTE service is export as a singleton
class CarsService{

  createCar(newCar){
    console.log('creating a car in the service', newCar);
    // ProxyState.cars.push(new Car(newCar))
    // NOTE the assignment method below breaks down the cars array, tacks one to the end and groups them back together
    // NOTE the = here is what triggers our 'listeners'
    ProxyState.cars = [...ProxyState.cars, new Car(newCar)]
    console.log('current cars',ProxyState.cars);
  }

  deleteCar(id){
    // let carIndex = ProxyState.cars.findIndex(c => c.id == id)
    // console.log('deleting', carIndex);
    // ProxyState.cars.splice(carIndex, 1)
    // console.log('car deleted', ProxyState.cars);
    // ProxyState.cars = ProxyState.cars
    ProxyState.cars = ProxyState.cars.filter(c => c.id != id)
  }

}

// NOTE this is exporting as SINGLE const car service that cannot be mutated
export const carsService = new CarsService()