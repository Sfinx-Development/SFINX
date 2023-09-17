import { Box, TextField } from "@mui/material";

export default function ClientIdeaForm() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={2}
    >
      {/* <Typography variant={"h6"}>Om ditt företag</Typography> */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
        }}
      >
        <TextField
          label="Vad är syftet med webbsidan?"
          sx={{ marginBottom: 2, background: "white" }}
        />
        <TextField
          label="Vilken målgrupp ska den rikta sig till?"
          sx={{ marginBottom: 2, background: "white" }}
        />
        {/* <TextField
          label="Har du önskemål om färger och designstilar?"
          sx={{ marginBottom: 2, background: "white" }}
        /> */}
        <TextField
          label="Vad är din budget och tidsram?"
          sx={{ marginBottom: 2, background: "white" }}
        />
        <TextField
          label="Övrigt"
          sx={{ marginBottom: 2, background: "white" }}
        />
      </form>
    </Box>
  );
}
