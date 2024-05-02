import { useState } from "react";
import { workTypes } from "../../lib/constants";
import GenericSelect, { GenericOption } from "../shared/GenericSelect";
import { useDispatch } from "react-redux";
import { setSelectedWorkTypes } from "../../redux/slices/filterSlice";

/**
 * WorkTypeFilter
 *
 * Component to filter jobs by work type
 * @returns {JSX.Element} - JSX Element containing the select input to filter by work type
 *
 * @example
 *
 * <WorkTypeFilter />
 */
const WorkTypeFilter = (): JSX.Element => {
  const dispatch = useDispatch();
  const [selectWorkType, setSelectWorkType] = useState<GenericOption[]>([]);
  const handleChange = (value: GenericOption[]) => {
    setSelectWorkType(value);
    dispatch(setSelectedWorkTypes(value));
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
