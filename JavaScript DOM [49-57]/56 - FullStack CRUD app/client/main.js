import AlertComponent from "./components/alert-component.js";
import CarFormComponent from "./components/car-form-component.js";
import CarsTableComponent from "./components/cars-table-component.js";
import ContainerComponent from "./components/container-component.js";
import FlexContainerComponent from "./components/flex-container-component.js";
import ApiService from "./services/api-service.js";

const rootHtmlElement = document.querySelector('#root');

let carsTableComponent;
let carFormComponent;
const containerComponent = new ContainerComponent();
const alertComponent = new AlertComponent();
containerComponent.addComponents(alertComponent);

rootHtmlElement.append(containerComponent.htmlElement);

const handleCarDelete = async (id) => {
  try {
    await ApiService.deleteCar(id);
    const cars = await ApiService.getCars();
    carsTableComponent.renderCars(cars);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const handleCarCreate = async (carProps) => {
  try {
    await ApiService.createCar(carProps);
    const cars = await ApiService.getCars();
    carsTableComponent.renderCars(cars);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

(async () => {
  try {
    const cars = await ApiService.getCars(); //     dependency injection
    carsTableComponent = new CarsTableComponent(cars, handleCarDelete);
    //                                   dependency injection
    carFormComponent = new CarFormComponent(handleCarCreate);
    const flexContainerComponent = new FlexContainerComponent();
    flexContainerComponent.addComponents(carsTableComponent, carFormComponent);
    containerComponent.addComponents(flexContainerComponent);
  } catch (error) {
    alertComponent.show(error.message);
  }
})()


// Update - 4.