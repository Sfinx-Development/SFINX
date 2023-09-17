import { Box, TextField } from "@mui/material";

export default function PersonalDataForm() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={2}
    >
      {/* <Typography variant={"h6"}>Dina uppgifter</Typography> */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          marginBottom: 2,
        }}
      >
        <TextField
          label="Förnamn och efternamn"
          sx={{ marginBottom: 2, background: "white" }}
        />
        <TextField
          label="Email"
          sx={{ marginBottom: 2, background: "white" }}
        />
        <TextField
          label="Telefonnummer"
          sx={{ marginBottom: 2, background: "white" }}
        />
        <TextField
          label="Adress"
          sx={{ marginBottom: 2, background: "white" }}
        />
        {/* <Button>Fortsätt</Button> */}
      </form>
    </Box>
  );
}
