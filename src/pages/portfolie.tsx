import { Container } from "@mui/material";
import PortfolieCard from "../components/PortfolieCard";
import { useProductContext } from "../contexts/portfolioContext";

export default function PortfoliePage() {
  const { portfolio } = useProductContext();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {portfolio ? (
        portfolio.map((p, index) => <PortfolieCard key={index} portfolie={p} />)
      ) : (
        <p>No portfolio data available.</p>
      )}
    </Container>
  );
}
