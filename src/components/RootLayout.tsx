import { Outlet } from "react-router-dom";
import { Box, AppBar, Toolbar, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function RootLayout() {
  const isMobile = window.innerWidth <= 670;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
      }}
    >
      <AppBar
        position="static"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          position: "relative",
          width: "100%",
        }}
      >
        <Toolbar
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="https://i.imgur.com/EUZnDj3.png"
            alt="logo"
            style={{
              height: "auto",
              width: isMobile ? "100px" : "170px",
            }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <RouterLink
              to="/"
              color="black"
              style={{
                fontSize: isMobile ? 18 : 22,
                margin: isMobile ? "5px" : "15px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Start
            </RouterLink>
            <RouterLink
              to="/aboutus"
              color="black"
              style={{
                fontSize: isMobile ? 18 : 22,
                margin: isMobile ? "5px" : "15px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Om oss
            </RouterLink>
            <RouterLink
              to="/portfolie"
              color="black"
              style={{
                fontSize: isMobile ? 18 : 22,
                margin: isMobile ? "5px" : "15px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Portfolie
            </RouterLink>
          </div>
        </Toolbar>
      </AppBar>

      {/* <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          height: "3rem",
          backdropFilter: "blur(10px)",
          width: "100%",
        }}
      >
        <Toolbar>
          <nav>
            <ul style={{ display: "flex" }}>
              <li>
                <Box sx={{}}>
                  <NavLink to={" "}>
                 
                  </NavLink>
                </Box>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar> */}

      <main
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Outlet />
      </main>

      <footer style={{ backgroundColor: "black", flex: "flex" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            "& a": {
              ml: 2,
              color: "white",
              fontSize: 14,
              padding: 1,
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          }}
        >
          <Link href="https://www.instagram.com" target="_blank">
            <InstagramIcon fontSize="medium" />
          </Link>
          <Link href="mailto:sfinxdevelopment@gmail.com" target="_blank">
            <EmailIcon fontSize="medium" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <AccountCircleIcon fontSize="medium" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <AdminPanelSettingsIcon fontSize="medium" />
          </Link>
        </Box>
      </footer>
    </div>
  );
}
