import BasePayFilter from "./Filters/BasePayFilter";
import EmployeesFilter from "./Filters/EmployeesFilter";
import ExperienceFilter from "./Filters/ExperienceFilter";
import RoleFilter from "./Filters/RoleFilter";
import SearchFilter from "./Filters/SearchFilter";
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
    <div className=" flex gap-5 flex-wrap max-sm:gap-2">
      <RoleFilter />
      <EmployeesFilter />
      <ExperienceFilter />
      <WorkTypeFilter />
      <BasePayFilter />
      <SearchFilter />
    </div>
  );
};

export default FilterContainer;
