import { Box, CardMedia, Typography } from "@mui/material";

export default function ContactText() {
  const isMobile = window.innerWidth <= 820;
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
              opacity: 0.3,
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
              opacity: 0.2,
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
          <Typography marginBottom={2} padding={0}>
            Vi är två tjejer, Angelina och Elina, som snart är färdiga med vår
            utbildning systemutvecklare.NET. Vi brinner för att både skapa
            hemsidor och appar från början samt att gå in i befintliga projekt
            och bygga på fler eller bättre lösningar.
          </Typography>

          <Typography>Passa på nu för ett billigare pris!</Typography>
        </Box>
      </div>
    </div>
  );
}
