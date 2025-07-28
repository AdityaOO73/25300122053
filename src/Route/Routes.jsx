import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  HomePage,
} from "../Pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      
      {
        path: "profileinfo",
        element: <ProfileInfoPage />,
        children: [
          { index: true,
             element: <StaffBulkPage /> },

          { path: "viewstaff",
             element: <AddStaffPage /> },
        ],
      },
    ],
  },
]);
