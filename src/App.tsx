import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "@/pages/HomePage/HomePage";
import ReportPage from "@/pages/ReportsPage/ReportsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "report", element: <ReportPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
