import { Box, CardMedia, Typography } from "@mui/material";

export default function Logotext() {
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
        image="https://i.imgur.com/LhS6W9o.png"
        alt="logo"
        sx={{
          margin: 0,
          padding: 0,
          width: 600,
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

        <Box sx={{ maxWidth: "800px", padding: "16px", textAlign: "center" }}>
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
