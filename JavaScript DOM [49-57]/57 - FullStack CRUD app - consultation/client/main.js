import AlertComponent from "./components/alert-component.js";
import CarFormComponent from "./components/car-form-component.js";
import CarsTableComponent from "./components/cars-table-component.js";
import ContainerComponent from "./components/container-component.js";
import FlexContainerComponent from "./components/flex-container-component.js";
import ApiService from "./services/api-service.js";

let carsTableComponent;
let carFormComponent;
let alertComponent;

let cars;
let editedRowId = null;

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

const handleCarUpdate = async (carProps) => {
  try {
    await ApiService.updateCar(editedRowId, carProps);
    cars = await ApiService.getCars();
    editedRowId = null;
    carFormComponent.disableEditing();
    carsTableComponent.renderCars(cars, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const handleCarEdit = (carProps) => {
  if (editedRowId === carProps.id) editedRowId = null;
  else editedRowId = carProps.id;

  carsTableComponent.renderCars(cars, editedRowId);
  if (editedRowId === null) {
    carFormComponent.disableEditing();
    carFormComponent.onSubmit = handleCarCreate;
  } else {
    carFormComponent.enableEditing(carProps);
    carFormComponent.onSubmit = handleCarUpdate;
  }
}

(async function initialize() {
  const rootHtmlElement = document.querySelector('#root');
  const containerComponent = new ContainerComponent();
  alertComponent = new AlertComponent();
  containerComponent.addComponents(alertComponent);
  rootHtmlElement.append(containerComponent.htmlElement);
  try {
    cars = await ApiService.getCars();
    carsTableComponent = new CarsTableComponent({
      cars,
      onDelete: handleCarDelete,
      onEdit: handleCarEdit,
    });
    carFormComponent = new CarFormComponent({
      onSubmit: handleCarCreate,
    });
    const flexContainerComponent = new FlexContainerComponent();
    flexContainerComponent.addComponents(carsTableComponent, carFormComponent);
    containerComponent.addComponents(flexContainerComponent);
  } catch (error) {
    alertComponent.show(error.message);
  }
})();
