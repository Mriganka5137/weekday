import BasePayFilter from "./Filters/BasePayFilter";
import EmployeesFilter from "./Filters/EmployeesFilter";
import ExperienceFilter from "./Filters/ExperienceFilter";
import RoleFilter from "./Filters/RoleFilter";
import WorkTypeFilter from "./Filters/WorkTypeFilter";

/**
 * FilterContainer
 *
 * Component that contains all the filters
 * @returns {JSX.Element} - JSX.Element containing all the filters
 *
 * @example
 *
 * <FilterContainer />
 *
 **/
const FilterContainer = (): JSX.Element => {
  return (
    <div className=" flex gap-5 flex-wrap">
      <RoleFilter />
      <EmployeesFilter />
      <ExperienceFilter />
      <WorkTypeFilter />
      <BasePayFilter />
      {/* 
      <Searchbar /> */}
    </div>
  );
};

export default FilterContainer;
