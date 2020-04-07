import DashboardPage from "views/Dashboard/Dashboard.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import TableGrid from "../views/TableList/TableGrid"
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import Login from "../views/Login/Login";
import NotificationsPage from "views/Notifications/Notifications.js";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  Add
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "مدیریت شرکت ها و نمادها",
    navbarName: "مدیریت شرکت ها و نماد ها",
    icon: Dashboard,
    component: TableList
    
  },
  /*{
    path: "/user",
    sidebarName: "پروفایل کاربری",
    navbarName: "پروفایل کاربری",
    icon: Person,
    component: UserProfile
  },*/
  {
    path: "/notifications",
    sidebarName: "اعلانات",
    navbarName: "اعلانات",
    icon: Notifications,
    component: NotificationsPage
  },
/*{
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    component: DashboardPage
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
 */
  { redirect: true,  to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
