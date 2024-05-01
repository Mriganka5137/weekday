import { useState } from "react";
import SingleSelect, { GenericOption } from "../shared/SingleSelect";
import { basePays } from "../../lib/constants";

const BasePayFilter = () => {
  const [selectBasePay, setSelectBasePay] = useState<GenericOption>();
  const handleChange = (value: GenericOption) => {
    setSelectBasePay(value);
  };

  return (
    <SingleSelect
      options={basePays}
      placeholder="Min Base Pay"
      value={selectBasePay || null}
      onChange={handleChange as (value: GenericOption | null) => void}
      isSingle={true}
      optionClassName="h-fit overflow-hidden"
    />
  );
};

export default BasePayFilter;
