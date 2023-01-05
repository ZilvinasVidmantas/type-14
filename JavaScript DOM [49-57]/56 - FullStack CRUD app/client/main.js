import AlertComponent from "./components/alert-component.js";
import CarsTableComponent from "./components/cars-table-component.js";
import ContainerComponent from "./components/container-component.js";
import ApiService from "./services/api-service.js";

const rootHtmlElement = document.querySelector('#root');

let carsTableComponent;
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

(async () => {
  try {
    const cars = await ApiService.getCars(); //     dependency injection
    carsTableComponent = new CarsTableComponent(cars, handleCarDelete);
    containerComponent.addComponents(carsTableComponent);
  } catch (error) {
    alertComponent.show(error.message);
  }
})()


// Create - 3.
// Update - 4.
// Delete - 2.