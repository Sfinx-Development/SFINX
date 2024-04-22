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
        <Typography
          variant={isMobile ? "h6" : "h5"}
          padding={isMobile ? 1 : 2}
          gutterBottom
          color="primary" // Använd primärfärg för att sticka ut
        >
          Välkommen till ZEROETT
        </Typography>
        <Typography variant="body1" padding={isMobile ? 1 : 2} gutterBottom>
          Vi fokuserar på att skapa starka, smarta och säkra system för våra
          kunder. Vårt team består av två fullstackutvecklare med expertis i C#,
          JAVA, JavaScript, och TypeScript. Vi använder ramverk som React,
          Svelte, Angular, Grails och .NET. Vår specialitet ligger i MySQL och
          Firebase för små och stora system.
        </Typography>

        <Typography variant="body1" padding={isMobile ? 1 : 2} gutterBottom>
          Som fullstackutvecklare tar vi hand om alla dina mjukvarubehov - från
          hemsidor och webbshoppar till mobilapplikationer och funktioner i
          redan etablerade system.
        </Typography>

        <Typography variant="body1" padding={isMobile ? 1 : 2}>
          Dela din idé med oss idag!
        </Typography>
        <Typography variant="body1" padding={1}>
          Med vänliga hälsningar,
        </Typography>
        <Typography variant="body1" padding={1} fontWeight="bold">
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
