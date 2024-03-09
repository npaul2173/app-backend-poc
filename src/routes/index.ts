import {
  getInternalServerErrorResponse,
  getOKResponse,
} from "@/utils/helpers/response";
import { Router } from "express";
import EmployeeRoutes from "./employee.routes";

const employeeRoutes = new EmployeeRoutes();
const router = Router();

router.use(employeeRoutes.baseRoute, employeeRoutes.routes);

// router.use("/testMail", async (req, res, next) => {
//   const { error, info, message } = await mailService.greetingsMail(
//     "npaul2173@gmail.com"
//   );
//   if (error) return getInternalServerErrorResponse(res, error, message);
//   return getOKResponse(res, info, message);
// });

export { router };
