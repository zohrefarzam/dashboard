import UserProfile from "views/UserProfile/UserProfile.js";
const addRoutes = [
   
    {
      path: "/user",

      component: UserProfile
    },
   
    { redirect: true,  to: "/user", navbarName: "Redirect" }
  ];
  
  export default addRoutes;