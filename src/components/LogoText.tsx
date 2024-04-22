import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import PeopleIcon from "@mui/icons-material/People";

export default function Logotext() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMobile = window.innerWidth <= 820;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 15,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          width: "100%",
        }}
      >
        {isMobile ? (
          <video
            autoPlay
            loop
            muted
            playsInline={true}
            controls={false}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              opacity: 0.2,
            }}
          >
            <source src="https://i.imgur.com/gndLLDE.mp4" type="video/mp4" />
          </video>
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline={true}
            controls={false}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              opacity: 0.4,
            }}
          >
            <source src="https://i.imgur.com/xtHSxkW.mp4" type="video/mp4" />
          </video>
        )}

        <div
          style={{
            maxWidth: isMobile ? "410px" : "800px",
            padding: "16px",
            textAlign: "center",
            transition: "opacity 0.5s ease",
            opacity: scrollY > 50 ? 0.5 : 1,
          }}
        >
          <div
            style={{
              position: "relative",
              textAlign: "center",
              maxWidth: "800px",
              padding: isMobile ? "10px" : "40px",
              backgroundColor: "transparent",
              borderRadius: "10px",
              boxShadow: "transparent",
            }}
          >
            <Typography variant="h4" marginY={3} fontWeight="500">
              ZEROETT
            </Typography>
            <Typography
              fontSize={isMobile ? 15 : 20}
              margin={0}
              marginBottom={2}
            >
              Vi skapar innovativa och unika IT-lösningar med fokus på
              fullstack-utveckling, förverkligar kundernas idéer från början
              till slut.
            </Typography>
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: isMobile ? "20px" : "40px",
            marginBottom: isMobile ? 4 : 2,
            marginTop: isMobile ? 1 : 2,
            width: "100%",
            opacity: scrollY > 100 ? 0.5 : 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LightbulbIcon sx={{ fontSize: isMobile ? 35 : 48 }} />
            <Typography variant="body1">Idéer</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <DesktopMacIcon sx={{ fontSize: isMobile ? 35 : 48 }} />
            <Typography variant="body1">Utveckling</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PeopleIcon sx={{ fontSize: isMobile ? 35 : 48 }} />
            <Typography variant="body1">Kundrelation</Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
}
