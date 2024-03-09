import { EmployeeModel } from "@/models/employee";
import { CreateEmployeeProps } from "@/models/employee/type";
import EmployeeService from "@/service/employee.service";
import { IReq, IRes } from "@/utils/interfaces/express.interface";
import { QueryParams } from "@/utils/interfaces/query.interface";

class EmployeeController {
  private employeeService: EmployeeService;

  constructor() {
    this.employeeService = new EmployeeService();
  }

  createEmployee = async (req: IReq, res: IRes) => {
    const inputData = { ...req.body } as CreateEmployeeProps;
    const response = await this.employeeService.create(inputData);
    res.send(response);

    try {
    } catch (error) {
      throw new Error("❌ Error: Could not create employee");
    }
  };

  listEmployee = async (req: IReq, res: IRes) => {
    const queryParams = { ...req.query } as QueryParams;
    const limit = queryParams.limit ? parseInt(queryParams.limit) : 10;
    const cursor = queryParams.cursor;

    try {
      let query = EmployeeModel.find().sort({ _id: 1 }).limit(limit);

      // Apply cursor if provided
      if (cursor) {
        query = query.gt("_id", cursor); // Fetch documents greater than the cursor
      }

      const data = await query.exec();
      const nextCursor = data.length > 0 ? data[data.length - 1]._id : null; // Calculate next cursor

      res.json({ records: data.length, nextCursor, data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch employees" });
    }
  };
}

export default EmployeeController;
