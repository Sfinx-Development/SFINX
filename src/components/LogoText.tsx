import { Box, CardMedia, Typography } from "@mui/material";

export default function Logotext() {
  const isMobile = window.innerWidth <= 670;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 15,
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        image="https://i.imgur.com/UNlANF3.png"
        alt="logo"
        sx={{
          margin: 0,
          padding: 0,
          width: isMobile ? "200px" : "500px",
          height: "auto",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {isMobile ? null : (
          <video
            autoPlay
            loop
            muted
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

        <Box
          sx={{
            maxWidth: isMobile ? "400px" : "800px",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <Typography variant={"h6"} margin={0} padding={0}>
            Fokuserar på att skapa skräddarsydda hemsidor efter dina behov och
            önskemål. Vi erbjuder även konsulttjänster för dig som inte har en
            färdig plan för din hemsida, där vi designar och utformar en plan
            tillsammans.
          </Typography>
        </Box>
      </div>
    </div>
  );
}
