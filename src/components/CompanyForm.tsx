import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

export default function CompanyForm() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={2}
    >
      <Typography variant={"h6"}>Om ditt företag</Typography>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <Box display={"flex"}>
          <FormControlLabel control={<Checkbox />} label="Företag" />
          <FormControlLabel control={<Checkbox />} label="Privatperson" />
        </Box>
        <TextField label="Företagsadress" />
        <TextField label="Vad gör ditt företag?" />
      </form>
    </Box>
  );
}
