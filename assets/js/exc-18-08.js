class Car{
    constructor(param1, param2){
        this.brand = param1,
        this.car = param2
    }
}
class CarsList{
    constructor(){
        this.cars = []
    }
    adicionar(car){
        this.cars.push(car);
       
    }
}
const List = new CarsList()

function createCar(){
    const brandInput = document.getElementById("Brand").value
    const carInput = document.getElementById("Car").value

    const car = new Car (brandInput, carInput);
    List.adicionar(car)

        List.cars.forEach((car) =>{
            console.log(`Marca: ${car.brand}, Modelo: ${car.car}`)
        }
        
        )
    
}