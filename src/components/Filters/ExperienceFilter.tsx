import { useState } from "react";
import SingleSelect from "../shared/SingleSelect";
import { ExperienceOption, experineces } from "../../lib/constants";

const ExperienceFilter = () => {
  const [selectExperience, setSelectExperience] = useState<ExperienceOption>();

  const handleChange = (value: ExperienceOption) => {
    setSelectExperience(value);
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
