import { useState } from "react";
import Searchbar from "../shared/Searchbar";
import { useDispatch } from "react-redux";
import { setSearchCompanyLocation } from "../../redux/slices/filterSlice";

// jsdoc
/**
 * SearchFilter component
 *
 * Component that contains a search filter
 *
 * @returns {JSX.Element} SearchFilter component
 */

const SearchFilter = (): JSX.Element => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  const handleChange = (value: string) => {
    setInput(value);
    dispatch(setSearchCompanyLocation(value));
  };

  return (
    <Searchbar
      placeholder="Search Company Location"
      value={input}
      onChange={handleChange as (value: string) => void}
      className="min-w-48"
    />
  );
};

export default SearchFilter;
