import { Typography } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom"; // Importera ReactDOM här
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { CustomerProvider } from "./contexts/customerContext";
import { PortfolioProvider } from "./contexts/portfolioContext";
import ContactPage from "./pages/contact";
import IndexPage from "./pages/indexPage";
import PortfoliePage from "./pages/portfolie";

ReactDOM.render(
  <React.StrictMode>
    <PortfolioProvider>
      <CustomerProvider>
        <BrowserRouter>
          <RootLayout>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/portfolie" element={<PortfoliePage />} />
              <Route path="/aboutus" element={<ContactPage />} />

              <Route
                path="*"
                element={
                  <div>
                    <Typography>Ooops, fel url</Typography>
                  </div>
                }
              />
            </Routes>
          </RootLayout>
        </BrowserRouter>
      </CustomerProvider>
    </PortfolioProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
