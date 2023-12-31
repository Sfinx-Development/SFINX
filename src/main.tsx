import {} from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { CustomerProvider } from "./contexts/customerContext";
import ContactPage from "./pages/contact";
import IndexPage from "./pages/indexPage";
import PortfoliePage from "./pages/portfolie";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<IndexPage />}></Route>
      <Route path="/portfolie" element={<PortfoliePage />}></Route>
      <Route path="/aboutus" element={<ContactPage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomerProvider>
      <RouterProvider router={router} />
    </CustomerProvider>
  </React.StrictMode>
);
