import { Container } from "@mui/material";
import ContactText from "../components/ContactText.tsx";

export default function ContactPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ContactText />
    </Container>
  );
}
