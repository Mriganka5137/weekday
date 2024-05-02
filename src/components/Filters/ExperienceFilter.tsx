import { useState } from "react";
import SingleSelect from "../shared/SingleSelect";
import { ExperienceOption, experineces } from "../../lib/constants";
import { useDispatch } from "react-redux";
import { setSelectedExperiences } from "../../redux/slices/filterSlice";

/**
 * ExperienceFilter
 *
 * Component to filter jobs by experience
 * @returns {JSX.Element} - JSX Element containing the select input to filter by experience
 *
 * @example
 *
 * <ExperienceFilter />
 */
const ExperienceFilter = (): JSX.Element => {
  const dispatch = useDispatch();
  const [selectExperience, setSelectExperience] = useState<ExperienceOption>();

  const handleChange = (value: ExperienceOption) => {
    setSelectExperience(value);
    dispatch(setSelectedExperiences(value ? [value] : []));
  };

  return (
    <SingleSelect
      options={experineces}
      placeholder="Experience"
      value={selectExperience || null}
      onChange={handleChange as (value: ExperienceOption | null) => void}
      isSingle={true}
      selectClassName="min-w-20"
    />
  );
};

export default ExperienceFilter;
