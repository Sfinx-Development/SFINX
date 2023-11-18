import { Box, CardMedia, Container, Typography } from "@mui/material";

export default function PortfoliePage() {
  const isMobile = window.innerWidth <= 670;
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          paddingTop: 2,
        }}
      >
        <Box>
          <Typography margin={0} paddingTop={2}>
            En kalender där du kan hantera din 'todos'-lista.
          </Typography>
          <Typography margin={0} paddingBottom={1}>
            Vi integrerade även ett hjälpmedel som läser upp dina todos.
          </Typography>
        </Box>

        <CardMedia
          component="img"
          image="https://i.imgur.com/V4zBTxl.png"
          alt="logo"
          sx={{
            margin: 0,
            padding: 0,
            width: isMobile ? 300 : 500,
            height: "auto",
          }}
        />
      </Container>
      <Typography margin={0} paddingBottom={2} paddingTop={2}>
        En e-shop där man kan sälja samt hantera produkter.
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          image="https://i.imgur.com/Y0HEktb.png"
          alt="logo"
          sx={{
            margin: 0,
            paddingBottom: 2,
            width: isMobile ? 300 : 500,
            height: "auto",
          }}
        />

        <CardMedia
          component="img"
          image="https://i.imgur.com/KSbsIhH.png"
          alt="logo"
          sx={{
            margin: 0,
            paddingBottom: 2,
            width: isMobile ? 300 : 500,
            height: "auto",
          }}
        />
      </Container>
    </Container>
  );
}
