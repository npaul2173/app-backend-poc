import { requiredValidation } from "@/utils/library/validate";

const validation = [
  requiredValidation("firstName", "FirstName"),
  requiredValidation("lastName", "LastName"),
  requiredValidation("age", "Age"),
  requiredValidation("email", "Email"),
];

export { validation as createEmployeeValidation };
