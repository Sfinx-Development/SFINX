import { Outlet } from "react-router-dom";
import { Box, AppBar, Toolbar, Link } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useMediaQuery } from '@mui/material';


export default function RootLayout() {
    const isMobile = useMediaQuery('(max-width:600px)'); 

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    }}
  >
    <AppBar
      position="static"
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}
    >
      <Toolbar
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img
          src="https://i.imgur.com/EUZnDj3.png"
          alt="logo"
          style={{ width: isMobile ? 120 : 170, height: 'auto' }} // Använd en mindre storlek för mobila enheter
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            href="#"
            color="#000000"
            fontSize={isMobile ? 13 : 22} // Justera fontstorleken för mobila enheter
            style={{ margin: ' 15px' }}
          >
            Start
          </Link>
          <Link
            href="#"
            color="#000000"
            fontSize={isMobile ? 13 : 22} // Justera fontstorleken för mobila enheter
            style={{ margin: ' 15px' }}
          >
            Kontakt
          </Link>
          <Link
            href="#"
            color="#000000"
            fontSize={isMobile ? 13 : 22} // Justera fontstorleken för mobila enheter
            style={{ margin: ' 15px' }}
          >
            Samarbeten
          </Link>
          <Link
            href="#"
            color="#000000"
            fontSize={isMobile ? 13 : 22} // Justera fontstorleken för mobila enheter
            style={{ margin: ' 15px' }}
          >
            Kund konto
          </Link>
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
          <Link href="https://www.instagram.com" target="_blank">
            <AdminPanelSettingsIcon fontSize="medium" />
          </Link>
        </Box>
      </footer>
    </div>
  );
}
