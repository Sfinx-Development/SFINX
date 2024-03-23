import { Box, Typography } from "@mui/material";

export default function ContactText() {
  const isMobile = window.innerWidth <= 820;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: isMobile ? 3 : 10,
      }}
    >
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          maxWidth: "800px",
          padding: isMobile ? "10px" : "16px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant={isMobile ? "h6" : "h5"} padding={1} gutterBottom>
          Vi på Luna Stack brinner för innovation och framtid inom IT
        </Typography>
        <Typography variant="body1" padding={1} gutterBottom>
          Vi sätter fokus på att skapa starka, smarta och säkra system för våra
          kunder. Vi är två utvecklare med fullstackutbildning i grunden och
          jobbar främst med programmeringsspråken C#, JAVA, JavaScript och
          TypeScript. Ramverken vi jobbar med är React, Svelte, Angular, Grails
          och .NET. Vi har störst fokus på databaser i MySQL och Firebase för
          små och stora system.
        </Typography>

        <Typography variant="body1" padding={1} gutterBottom>
          Att vara fullstackutvecklare innebär att vi skapar all mjukvara du som
          kund önskar - en hemsida, webbshop, mobilapplikation eller varför inte
          en funktion i ett redan etablerat system.
        </Typography>

        <Typography variant="body1" padding={1}>
          Välkommen till oss med din idé
        </Typography>
        <Typography variant="body1" padding={1}>
          Angelina & Elina
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          opacity: 0.3,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline={true}
          controls={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src={
              isMobile
                ? "https://i.imgur.com/gndLLDE.mp4"
                : "https://i.imgur.com/xtHSxkW.mp4"
            }
            type="video/mp4"
          />
        </video>
      </Box>
    </Box>
  );
}
