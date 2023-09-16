import { Box, Typography, TextField, Button} from "@mui/material";

export default function PersonalDataForm(){


    return (
        <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginTop={2}
      >
        <Typography variant={"h6"}>Kontakt oss med din idé</Typography>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <TextField label="Förnamn och efternamn" />
          <TextField label="Email" />
          <TextField label="Telefonnummer" />
          <TextField label="Adress" />
          <Button>Fortsätt</Button>
        </form>
      </Box>
    )
}