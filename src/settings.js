import React from 'react'

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import UserNPermission from "views/settings/user&permission";
import Default from "views/settings/default";
import CompanyLogo from "views/settings/companylogo";



const settings = [
    {
        name: "User & Permission",
        layout: "/settings",
        path: "/user&permission",
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
        component: UserNPermission,
      },
      {
        name: "Company Logo",
        layout: "/settings",
        path: "/company-logo",
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
        component: CompanyLogo,
      },
      {
        name: "Other",
        layout: "/settings",
        path: "/default",
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
        component: Default
      },
];

export default settings