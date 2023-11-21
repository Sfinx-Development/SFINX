import { Box, Card, CardMedia, Container, Typography } from "@mui/material";

export default function PortfoliePage() {
  const isMobile = window.innerWidth <= 820;
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          marginTop: 2,
          paddingBottom: 2,
        }}
      >
        <Box sx={{ paddingX: 1 }}>
          <Typography margin={0} paddingTop={2} fontSize={isMobile ? 15 : 20}>
            En kalender där du kan hantera din 'todos'-lista. Vi integrerade
            även ett hjälpmedel som läser upp dina todos.
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
      </Card>

      <Card
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          marginTop: 2,
          paddingBottom: 2,
        }}
      >
        <Typography
          margin={0}
          paddingBottom={2}
          paddingTop={2}
          paddingX={2}
          fontSize={isMobile ? 15 : 20}
        >
          En e-shop där man kan sälja samt hantera produkter.
        </Typography>
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
      </Card>
    </Container>
  );
}
