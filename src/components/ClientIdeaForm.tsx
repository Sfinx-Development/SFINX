import { Box, TextField } from "@mui/material";
import { useCustomerContext } from "../contexts/customerContext";

export default function ClientIdeaForm() {
  const { customer, setCustomer } = useCustomerContext();
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
          value={customer.purposeWebsite}
          onChange={(e) =>
            setCustomer({ ...customer, purposeWebsite: e.target.value })
          }
        />
        <TextField
          label="Vilken målgrupp ska den rikta sig till?"
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.targetGroup}
          onChange={(e) =>
            setCustomer({ ...customer, targetGroup: e.target.value })
          }
        />
        {/* <TextField
          label="Har du önskemål om färger och designstilar?"
          sx={{ marginBottom: 2, background: "white" }}
        /> */}
        <TextField
          label="Vad är din budget och tidsram?"
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.budgetDescription}
          onChange={(e) =>
            setCustomer({ ...customer, budgetDescription: e.target.value })
          }
        />
        <TextField
          label="Övrigt"
          sx={{ marginBottom: 2, background: "white" }}
          value={customer.extraDescription}
          onChange={(e) =>
            setCustomer({ ...customer, extraDescription: e.target.value })
          }
        />
      </form>
    </Box>
  );
}
