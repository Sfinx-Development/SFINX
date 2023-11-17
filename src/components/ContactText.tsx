import { Box, CardMedia, Typography } from "@mui/material";

export default function ContactText() {
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
          width: 500,
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
            Vi är två tjejer som snart är färdiga med vår
            systemutveckling-utbildning. Vi brinner för att både skapa hemsidor
            och appar från början samt att gå in i befintliga projekt och bygga
            på fler eller bättre lösningar. Passa på nu för ett billigare pris!
          </Typography>
        </Box>
      </div>
    </div>
  );
}
