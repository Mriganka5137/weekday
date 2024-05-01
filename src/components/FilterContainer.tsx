import BasePayFilter from "./Filters/BasePayFilter";
import EmployeesFilter from "./Filters/EmployeesFilter";
import ExperienceFilter from "./Filters/ExperienceFilter";
import RoleFilter from "./Filters/RoleFilter";
import Searchbar from "./Filters/Searchbar";
import WorkTypeFilter from "./Filters/WorkTypeFilter";

const FilterContainer = () => {
  return (
    <div className=" flex gap-5">
      <RoleFilter />
      <EmployeesFilter />
      <ExperienceFilter />
      <WorkTypeFilter />
      <BasePayFilter />
      <Searchbar />
    </div>
  );
};

export default FilterContainer;
