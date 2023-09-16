import { Container} from "@mui/material";
import LogoText from "../components/LogoText.tsx";
import PersonalDataForm from "../components/PersonalDataForm.tsx";

export default function IndexPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      
      {/* HÄR FÅR VI DÅ LÄGGA IN DE FÄLTEN SOM ÄR IFYLLDA TILL CUSTOMERCONTEXT VID SUBMIT INNAN NÄSTA FORM */}
  
  <LogoText/>
  <PersonalDataForm/>
    </Container>
  );
}
