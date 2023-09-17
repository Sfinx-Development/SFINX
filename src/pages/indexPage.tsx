import { Container, Typography } from "@mui/material";
import CompanyForm from "../components/CompanyForm.tsx";
import FormStepper from "../components/FormStepper.tsx";
import LogoText from "../components/LogoText.tsx";
import PersonalDataForm from "../components/PersonalDataForm.tsx";

export default function IndexPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* HÄR FÅR VI DÅ LÄGGA IN DE FÄLTEN SOM ÄR IFYLLDA TILL CUSTOMERCONTEXT VID SUBMIT INNAN NÄSTA FORM */}

      <LogoText />

      <Typography sx={{ fontSize: 25, color: "#4dabf5", mb: 4 }}>
        Kontakta oss med din idé
      </Typography>

      <FormStepper
        steps={[
          { title: "Uppgifter", form: PersonalDataForm },
          { title: "Företag", form: CompanyForm },
        ]}
      />
    </Container>
  );
}
