import { EmployeeModel } from "@/models/employee";
import { CreateEmployeeProps } from "@/models/employee/type";
import { JsonResponse } from "@/utils/interfaces/response.interface";
import { StatusCodes } from "http-status-codes";

class EmployeeService {
  async create(inputData: CreateEmployeeProps) {
    try {
      //    Check is user already exists
      const query = { email: { $regex: `^${inputData.email}`, $options: "i" } };
      const foundUser = await this.findOneRecord(query);
      if (foundUser) {
        return {
          statusCode: StatusCodes.CONFLICT,
          status: false,
          message: "User already exists with same email address",
        } as JsonResponse;
      }

      const data = await this.saveOne(inputData);
      return {
        statusCode: StatusCodes.CREATED,
        status: true,
        message: "Employee Created",
        data,
      } as JsonResponse;
    } catch (error) {
      throw new Error("❌ Error: Employee create service failed" + error);
    }
  }

  async findOneRecord(query: any) {
    try {
      const user = await EmployeeModel.findOne(query);
      return user;
    } catch (error) {
      throw new Error("❌ Error: Find one Employee Record service failed");
    }
  }

  async saveOne(inputData: CreateEmployeeProps) {
    try {
      return await EmployeeModel.create(inputData);
    } catch (error) {
      throw new Error("❌ Error: Employee Save one service failed" + error);
    }
  }
}

export default EmployeeService;
