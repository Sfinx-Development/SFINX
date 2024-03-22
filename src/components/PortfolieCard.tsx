import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { PortfolieInterface } from "../contexts/portfolioContext";

interface Props {
  portfolie: PortfolieInterface;
}

export default function PortfolieCard({ portfolie }: Props) {
  const isMobile = window.innerWidth <= 820;

  return (
    <Card
      sx={{
        margin: 10,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        image={portfolie.url[0]} // Assuming the first URL is the main image
        alt="portfolio"
        sx={{
          height: isMobile ? 200 : 400,
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ backgroundColor: "#f8f8f8" }}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 2 }}
        >
          {portfolie.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: isMobile ? 14 : 16,
            color: "rgba(0, 0, 0, 0.7)",
          }}
        >
          {portfolie.description}
        </Typography>
        <Container
          sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
        >
          {portfolie.url.slice(1).map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              image={image}
              alt="logo"
              sx={{
                marginLeft: index > 0 ? 2 : 0,
                width: isMobile ? 120 : 160,
                height: isMobile ? 80 : 120,
                objectFit: "contain",
              }}
            />
          ))}
        </Container>
      </CardContent>
    </Card>
  );
}
