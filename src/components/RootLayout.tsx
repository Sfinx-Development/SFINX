import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import { Outlet, Link as RouterLink } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function RootLayout() {
  const isMobile = window.innerWidth <= 820;
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
            <Typography variant={isMobile ? "h6" : "h4"}>ZEROETT</Typography>
          </RouterLink>
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
              <Typography>Hem</Typography>
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
              <Typography>Om oss</Typography>
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
              <Typography>Portfolie</Typography>
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
          <Link href="https://www.instagram.com/zeroettab" target="_blank">
            <InstagramIcon fontSize="medium" />
          </Link>
          <Link href="mailto:zeroettab@gmail.com" target="_blank">
            <EmailIcon fontSize="medium" />
          </Link>
          <Link href="/" target="_blank">
            <AdminPanelSettingsIcon fontSize="medium" />
          </Link>
        </Box>
      </footer>
    </div>
  );
}
