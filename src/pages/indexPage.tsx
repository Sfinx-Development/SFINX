import { Container } from "@mui/material";
import FormStepper from "../components/FormStepper.tsx";
import LogoText from "../components/LogoText.tsx";
import PersonalDataForm from "../components/PersonalDataForm.tsx";
import CompanyForm from "../components/CompanyForm.tsx";

export default function IndexPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HÄR FÅR VI DÅ LÄGGA IN DE FÄLTEN SOM ÄR IFYLLDA TILL CUSTOMERCONTEXT VID SUBMIT INNAN NÄSTA FORM */}

      <LogoText />
      <FormStepper
        steps={[
          { title: "Uppgifter", form: PersonalDataForm },
          { title: "Företag", form: CompanyForm },
        ]}
      />
    </Container>
  );
}
