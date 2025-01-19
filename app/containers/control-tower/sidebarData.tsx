import {
  RiDashboard2Line,
  RiSlideshowLine,
  RiBuildingLine,
  RiUserSettingsLine,
  RiGroupLine,
  RiCashLine,
  RiAnchorLine,
} from "react-icons/ri";

import { navProps } from "@/app/types/type";
export const navData: navProps[] = [
  {
    id: 1,
    name: "Control Tower",
    path: "/dashboard",
    icon: <RiDashboard2Line />,
    items: [],
  },
  {
    id: 2,
    name: "Operations",
    path: "",
    icon: <RiSlideshowLine />,
    items: [
      { id: 1, name: "Cash Request", path: "/dashboard/cash-request" },
      { id: 2, name: "Mutilated Notes", path: "/dashboard/mutilated-notes" },
      { id: 3, name: "Cash Evacuation", path: "/dashboard/cash-evacuation" },
      { id: 4, name: "Averages", path: "/dashboard/averages-shortages" },
    ],
  },
  {
    id: 3,
    name: "Insurance Manager",
    path: "/dashboard/insurance-manager",
    icon: <RiUserSettingsLine />,

    items: [],
  },
  {
    id: 4,
    name: "Report & Analytics",
    path: "/dashboard/analytics",
    icon: <RiAnchorLine/>, 
    items: [],
  },
  {
    id: 5,
    name: "Cash Forecast",
    path: "/dashboard/cash-forecast",
    icon: <RiCashLine />, 
    items: [],
  },
  {
    id: 6,
    name: "E-Vault Register",
    path: "/dashboard/evault-register",
    icon: <RiUserSettingsLine />,
    items: [],
  },
  {
    id: 7,
    name: "CIT Manager",
    path: "/dashboard/cit-manager",
    icon: <RiGroupLine />,
    items: [],
  },
  {
    id: 8,
    name: "Audit Trail",
    path: "/dashboard/audit-trail",
    icon: <RiBuildingLine />,
    items: [],
  },
  {
    id: 9,
    name: "App Settings",
    path: "/dashboard/app-settings",
    icon: <RiUserSettingsLine />,
    items: [],
  },
];


