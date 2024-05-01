import { useState } from "react";
import { Role, roles } from "../../lib/constants";
import GenericSelect, { GenericOption } from "../shared/GenericSelect";

const RoleFilter = () => {
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);

  const handleChange = (value: Role[] | GenericOption[]) => {
    setSelectedRoles(value as Role[]);
  };

  return (
    <GenericSelect
      options={roles}
      placeholder="Select Roles"
      value={selectedRoles}
      onChange={handleChange}
    />
  );
};

export default RoleFilter;
