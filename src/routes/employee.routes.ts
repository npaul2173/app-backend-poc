import EmployeeController from "@/controller/employee.controller";
import { validateBody } from "@/utils/library/validate";
import { createEmployeeValidation } from "@/validations/employee";
import { Router } from "express";

class EmployeeRoutes {
  public routes: Router;
  public baseRoute: string;
  private employeeController: EmployeeController;

  constructor() {
    this.routes = Router();
    this.baseRoute = "/employees";
    this.employeeController = new EmployeeController();
    this.useRoutes();
  }

  useRoutes() {
    this.post();
    this.get();
  }

  get() {
    this.routes.get("/list", this.employeeController.listEmployee);
  }
  post() {
    this.routes.post(
      "/create",
      ...createEmployeeValidation,
      validateBody,
      this.employeeController.createEmployee
    );
  }
}

export default EmployeeRoutes;
