import { getConflictResponse } from "@/utils/helpers/response";
import { INext, IReq, IRes } from "@/utils/interfaces/express.interface";
import jwt from "jsonwebtoken";
import { envVar } from "..";

class AuthMiddleware {
  // private userService: UserService;
  // private roleService: RoleService;

  constructor() {
    // this.userService = new UserService();
    // this.roleService = new RoleService();
  }

  authenticate = async (req: IReq, res: IRes, next: INext) => {
    const authHeader =
      req.headers.authorization ||
      (req.headers.Authorization as string | undefined);

    if (!authHeader)
      return getConflictResponse(res, "Unauthorized - Missing token");
    else if (!authHeader?.startsWith("Bearer "))
      return getConflictResponse(res, "Unauthorized - Invalid token");
    const token = authHeader?.split(" ")[1];
    try {
      const decodedValue = jwt.verify(token, envVar.JSON_SECRET_KEY) as {
        roleId: string;
        userId: string;
      };

      // const userFound = await this.userService.findUserById(
      //   decodedValue.userId
      // );
      // const roleFound = await this.roleService.findRoleById(
      //   userFound?.userRoleId!
      // );

      // if (!userFound)
      //   return getConflictResponse(res, "Unauthorized - User not found");
      // req.userData = userFound;
      // req.userRoles = roleFound as any;
      next();
    } catch (error) {
      return getConflictResponse(res, "Forbidden - Invalid token");
    }
  };

  // authorize = (appPermissions: AppPermissions[]) => {
  //   return (req: IReq, res: IRes, next: INext) => {
  //     const permissions = req.userRoles?.permissions.map((item) =>
  //       item.toString()
  //     );
  //     const hasPermission = appPermissions.every((item) =>
  //       permissions?.includes(item.toString())
  //     );
  //     if (hasPermission) next();
  //     else return getUnauthorizedResponse(res, "Permission denied");
  //   };
  // };
}

export default AuthMiddleware;
