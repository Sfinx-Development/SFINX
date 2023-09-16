import {  Box, Typography, } from "@mui/material";
import React from 'react';

export default function Logotext(){
  return(
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant={"h1"} sx={{}}>
        Sfinx Development
      </Typography>
      <Typography variant={"h6"}>
        Fokuserar på att skapa skräddarsydda hemsidor efter dina behov och
        önskemål. Vi erbjuder även konsulttjänster för dig som inte har en
        färdig plan för din hemsida, där vi designar och utformar en plan
        tillsammans.
      </Typography>
    </Box>
  );
}
