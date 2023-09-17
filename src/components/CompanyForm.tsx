import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";

export default function CompanyForm() {
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
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <FormControlLabel control={<Checkbox />} label="Företag" />
          <FormControlLabel control={<Checkbox />} label="Privatperson" />
        </Box>
        <TextField
          label="Företagsadress"
          sx={{ marginBottom: 2, background: "white" }}
        />
        <TextField
          label="Vad gör ditt företag?"
          sx={{ marginBottom: 2, background: "white" }}
        />
      </form>
    </Box>
  );
}
