import { useState } from "react";
import { EmployeeOption, employees } from "../../lib/constants";
import GenericSelect, { GenericOption } from "../shared/GenericSelect";

const EmployeesFilter = () => {
  const [selectedEmployeeOption, setSelectedEmployeeOption] = useState<
    EmployeeOption[]
  >([]);

  const handleChange = (value: EmployeeOption[] | GenericOption[]) => {
    setSelectedEmployeeOption(value as EmployeeOption[]);
  };
  return (
    <GenericSelect
      options={employees}
      placeholder="Number of Employees"
      value={selectedEmployeeOption}
      onChange={handleChange}
      optionClassName="h-fit overflow-hidden"
    />
  );
};

export default EmployeesFilter;
