import { useState } from "react";
import { workTypes } from "../../lib/constants";
import GenericSelect, { GenericOption } from "../shared/GenericSelect";

const WorkTypeFilter = () => {
  const [selectWorkType, setSelectWorkType] = useState<GenericOption[]>([]);
  const handleChange = (value: GenericOption[]) => {
    setSelectWorkType(value);
  };
  return (
    <GenericSelect
      options={workTypes}
      placeholder="Remote"
      value={selectWorkType}
      onChange={handleChange}
      selectClassName=""
      optionClassName="h-fit overflow-hidden"
    />
  );
};

export default WorkTypeFilter;
