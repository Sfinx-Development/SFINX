import { Container, Box, Typography, TextField, Button} from "@mui/material";

export default function IndexPage() {
  return (
    <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"space-between"}}>

      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography variant={"h1"} sx={{}}>Sfinx Development</Typography>
        <Typography variant={"h6"}>
        Fokuserar på att skapa skräddarsydda hemsidor efter dina behov och önskemål.
        Vi erbjuder även konsulttjänster för dig som inte har en färdig plan för din hemsida,
        där vi designar och utformar en plan tillsammans.
        </Typography>
      </Box>

{/* HÄR FÅR VI DÅ LÄGGA IN DE FÄLTEN SOM ÄR IFYLLDA TILL CUSTOMERCONTEXT VID SUBMIT INNAN NÄSTA FORM */}
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginTop={2}>
        <Typography variant={"h6"}>Kontakt oss med din idé</Typography>
        <form style={{display:"flex", flexDirection:"column"}}>
            <TextField
            label="Förnamn och efternamn"/>
             <TextField
            label="Email"/>
             <TextField
            label="Telefonnummer"/>
               <TextField
            label="Adress"/>
            <Button>Fortsätt</Button>
        </form>
      </Box>

      

    </Container>
  );
}
