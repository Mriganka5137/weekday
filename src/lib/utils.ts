/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  BasePayOption,
  EmployeeOption,
  ExperienceOption,
  Role,
  WorkTypeOption,
} from "./constants";
import { Job } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Filter by roles (multiple choice)
export const filterByRoles = (jbList: any[], selectedRoles: Role[]) => {
  if (selectedRoles.length === 0) return jbList;

  return jbList.filter((job) =>
    selectedRoles.some((role) => job.jobRole.includes(role.name.toLowerCase()))
  );
};

// Filter by employee count (multiple choice)
export const filterByEmployees = (
  jbList: Job[],
  selectedEmployees: EmployeeOption[]
) => {
  // if (selectedEmployees.length === 0) return jbList;
  // const employeeRanges = selectedEmployees.map((employee) =>
  //   employee.name.split("-")
  // );
  // return jbList.filter((job) => {
  //   const { employeeCount } = job;
  //   return employeeRanges.some(
  //     ([min, max]) =>
  //       employeeCount >= parseInt(min) && employeeCount <= parseInt(max)
  //   );
  // });
};

// Filter by experience (multiple choice)
export const filterByExperience = (
  jbList: Job[],
  selectedExperiences: ExperienceOption[]
) => {
  if (selectedExperiences.length === 0) return jbList;

  const experienceValues = selectedExperiences.map(
    (experience) => experience.name
  );

  return jbList.filter((job) => {
    const { minExp, maxExp } = job;
    return (
      experienceValues.includes(minExp?.toString()) ||
      experienceValues.includes(maxExp?.toString())
    );
  });
};

// Filter by work type (multiple choice)

// Filter by work type (multiple choice)
export const filterByWorkType = (
  jbList: Job[],
  selectedWorkTypes: WorkTypeOption[]
) => {
  if (selectedWorkTypes.length === 0) return jbList;

  return jbList.filter((job) => {
    const isRemote = selectedWorkTypes.some(
      (workType) => workType.name.toLowerCase() === "remote"
    );
    const isInOffice = selectedWorkTypes.some(
      (workType) => workType.name.toLowerCase() === "inoffice"
    );
    const isHybrid = selectedWorkTypes.some(
      (workType) => workType.name.toLowerCase() === "hybrid"
    );

    const locationLower = job.location.toLowerCase();

    if (isRemote) {
      return locationLower.includes("remote");
    } else if (isInOffice) {
      return (
        !locationLower.includes("remote") && !locationLower.includes("hybrid")
      );
    } else if (isHybrid) {
      return locationLower.includes("hybrid");
    }

    return false; // Return no jobs if none of the selected work types match
  });
};

// Filter by base pay (multiple choice)
export const filterByBasePay = (
  jbList: Job[],
  selectedBasePays: BasePayOption[]
) => {
  if (selectedBasePays.length === 0) return jbList;

  const basePayRanges = selectedBasePays.map(
    (basePay) => basePay.name.split("L")[0]
  );

  return jbList.filter((job) => {
    const { minJdSalary, maxJdSalary } = job;
    return basePayRanges.some(
      (range) =>
        minJdSalary >= parseInt(range) && maxJdSalary <= parseInt(range)
    );
  });
};

// Apply all filters
export const applyFilters = (
  jbList: any[],
  selectedRoles: Role[],
  selectedEmployees: EmployeeOption[],
  selectedExperiences: ExperienceOption[],
  selectedWorkTypes: WorkTypeOption[],
  selectedBasePays: BasePayOption[]
) => {
  let filteredJobs = jbList;

  filteredJobs = filterByRoles(filteredJobs, selectedRoles);
  filteredJobs = filterByEmployees(filteredJobs, selectedEmployees);
  filteredJobs = filterByExperience(filteredJobs, selectedExperiences);
  filteredJobs = filterByWorkType(filteredJobs, selectedWorkTypes);
  filteredJobs = filterByBasePay(filteredJobs, selectedBasePays);

  return filteredJobs;
};
