import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BasePayOption,
  EmployeeOption,
  ExperienceOption,
  Role,
  WorkTypeOption,
} from "../../lib/constants";

interface FilterState {
  selectedRoles: Role[];
  selectedEmployees: EmployeeOption[];
  selectedExperiences: ExperienceOption[];
  selectedWorkTypes: WorkTypeOption[];
  selectedBasePays: BasePayOption[];
}

const initialState: FilterState = {
  selectedRoles: [],
  selectedEmployees: [],
  selectedExperiences: [],
  selectedWorkTypes: [],
  selectedBasePays: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedRoles: (state, action: PayloadAction<Role[]>) => {
      state.selectedRoles = action.payload;
    },
    setSelectedEmployees: (state, action: PayloadAction<EmployeeOption[]>) => {
      state.selectedEmployees = action.payload;
    },
    setSelectedExperiences: (
      state,
      action: PayloadAction<ExperienceOption[]>
    ) => {
      state.selectedExperiences = action.payload;
    },
    setSelectedWorkTypes: (state, action: PayloadAction<WorkTypeOption[]>) => {
      state.selectedWorkTypes = action.payload;
    },
    setSelectedBasePays: (state, action: PayloadAction<BasePayOption[]>) => {
      state.selectedBasePays = action.payload;
    },
  },
});

export const {
  setSelectedRoles,
  setSelectedEmployees,
  setSelectedExperiences,
  setSelectedWorkTypes,
  setSelectedBasePays,
} = filterSlice.actions;

export default filterSlice.reducer;
