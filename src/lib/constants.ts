export interface Role {
  id: string;
  name: string;
  category: string;
}

export const roles: Role[] = [
  {
    id: "1",
    name: "Backend",
    category: "Engineering",
  },

  {
    id: "2",
    name: "Frontend",
    category: "Engineering",
  },

  {
    id: "3",
    name: "Fullstack",
    category: "Engineering",
  },

  {
    id: "4",
    name: "IOS",
    category: "Engineering",
  },

  {
    id: "5",
    name: "Flutter",
    category: "Engineering",
  },

  {
    id: "6",
    name: "React Native",
    category: "Engineering",
  },

  {
    id: "7",
    name: "Android",
    category: "Engineering",
  },

  {
    id: "8",
    name: "Tech Lead",
    category: "Engineering",
  },

  {
    id: "9",
    name: "DevOps",
    category: "Engineering",
  },
  {
    id: "10",
    name: "Data Engineer",
    category: "Engineering",
  },
  {
    id: "11",
    name: "Data Science",
    category: "Engineering",
  },
  {
    id: "12",
    name: "Computer Vision",
    category: "Engineering",
  },
  {
    id: "13",
    name: "Deep Learning",
    category: "Engineering",
  },
  {
    id: "14",
    name: "Test/QA",
    category: "Engineering",
  },
  {
    id: "15",
    name: "Web3",
    category: "Engineering",
  },
  {
    id: "16",
    name: "SRE",
    category: "Engineering",
  },

  {
    id: "17",
    name: "Data Infrastructure",
    category: "Engineering",
  },
  {
    id: "18",
    name: "Designer",
    category: "Design",
  },
  {
    id: "19",
    name: "Design Manager",
    category: "Design",
  },
  {
    id: "20",
    name: "Graphic Designer",
    category: "Design",
  },
  {
    id: "21",
    name: "Product Designer",
    category: "Design",
  },
];

export interface EmployeeOption {
  id: string;
  name: string;
}

export const employees: EmployeeOption[] = [
  {
    id: "1",
    name: "1-10",
  },

  {
    id: "2",
    name: "11-20",
  },

  {
    id: "3",
    name: "21-50",
  },

  {
    id: "4",
    name: "51-100",
  },

  {
    id: "5",
    name: "101-200",
  },

  {
    id: "6",
    name: "201-500",
  },

  {
    id: "7",
    name: "501+",
  },
];
