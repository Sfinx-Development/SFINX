import { Outlet, NavLink } from "react-router-dom";
import { Box, AppBar, Toolbar, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function RootLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <AppBar
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
                <Box sx={{ marginRight: "0" }}>
                  <NavLink to="/admin" data-cy="admin-link">
                    <AdminPanelSettingsIcon
                      className="cursor-pointer"
                      fontSize="large"
                    />
                  </NavLink>
                </Box>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>

      <main style={{ display: "flex", flex: "1", flexDirection: "column" }}>
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
          <Link href="mailto:Keramika@email.com" target="_blank">
            <EmailIcon fontSize="medium" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <AccountCircleIcon fontSize="medium" />
          </Link>
        </Box>
      </footer>
    </div>
  );
}
