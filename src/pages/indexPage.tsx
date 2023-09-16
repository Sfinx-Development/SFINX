import { Container} from "@mui/material";
import LogoText from "../components/logoText.tsx";
import PersonalDataForm from "../components/personalDataForm.tsx";

export default function IndexPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      
      {/* HÄR FÅR VI DÅ LÄGGA IN DE FÄLTEN SOM ÄR IFYLLDA TILL CUSTOMERCONTEXT VID SUBMIT INNAN NÄSTA FORM */}
  
  <LogoText/>
  <PersonalDataForm/>
    </Container>
  );
}
