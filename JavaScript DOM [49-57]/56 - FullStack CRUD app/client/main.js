import AlertComponent from "./components/alert-component.js";
import CarFormComponent from "./components/car-form-component.js";
import CarsTableComponent from "./components/cars-table-component.js";
import ContainerComponent from "./components/container-component.js";
import FlexContainerComponent from "./components/flex-container-component.js";
import ApiService from "./services/api-service.js";

const rootHtmlElement = document.querySelector('#root');

let carsTableComponent;
let carFormComponent;
let cars;
let editedRowId = null;

const containerComponent = new ContainerComponent();
const alertComponent = new AlertComponent();
containerComponent.addComponents(alertComponent);

rootHtmlElement.append(containerComponent.htmlElement);

const handleCarDelete = async (id) => {
  try {
    await ApiService.deleteCar(id);
    cars = await ApiService.getCars();
    carsTableComponent.renderCars(cars, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const handleCarCreate = async (carProps) => {
  try {
    await ApiService.createCar(carProps);
    cars = await ApiService.getCars();
    carsTableComponent.renderCars(cars, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const handleCarEdit = (carData) => {
  if (editedRowId === carData.id) editedRowId = null;
  else editedRowId = carData.id;

  carsTableComponent.renderCars(cars, editedRowId);
  if (editedRowId === null) {
    carFormComponent.disableEditing();
  } else {
    carFormComponent.enableEditing(carData);
  }
}

(async () => {
  try {
    cars = await ApiService.getCars(); //     dependency injection 2x
    carsTableComponent = new CarsTableComponent(cars, handleCarDelete, handleCarEdit);
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