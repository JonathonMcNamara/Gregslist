// NOTE LINK ALL CONTROLLERS ON MAIN JS //
import { JobsController } from "./Controllers/JobsController.js";
import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";

class App {
  // valuesController = new ValuesController();
  carsController = new CarsController()

  housesController = new HousesController()

  jobsController = new JobsController()
}

window["app"] = new App();
