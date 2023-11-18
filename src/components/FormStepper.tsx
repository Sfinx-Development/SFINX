import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useCustomerContext } from "../contexts/customerContext";

interface StepData {
  title: string;
  form: React.FC;
}

interface Props {
  steps: StepData[];
}

export default function FormStepper(props: Props) {
  const { steps } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);
  const { customer } = useCustomerContext();

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      setCompleted(true);
      // sendEmail(customer);
      try {
        const response = await fetch("/.netlify/functions/save-to-json", {
          method: "POST",
          body: JSON.stringify(customer),
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const FormComponent = steps[activeStep].form;

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {!completed ? (
        <div>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step) => (
              <Step key={step.title}>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography component="div" sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Alla steg är klara
                  </Typography>
                  <Typography variant="body1">
                    Visa någon form av avslutningsmeddelande här.
                  </Typography>
                </Typography>
              </div>
            ) : (
              <div>
                <FormComponent />
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, fontSize: 15 }}
                  >
                    Tillbaka
                  </Button>
                  <Button onClick={handleNext} sx={{ fontSize: 15 }}>
                    {activeStep === steps.length - 1 ? "Klar" : "Nästa"}
                  </Button>
                </Box>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography marginBottom={4} variant="h6">
            Vi hör av oss till {customer.email} inom 3 dagar.
          </Typography>
        </div>
      )}
    </Box>
  );
}
