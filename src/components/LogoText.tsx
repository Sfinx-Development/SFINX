import { Typography, CardMedia, Box} from "@mui/material";

export default function Logotext() {
  return (
    <div style={{display:"flex", flexDirection:"column", margin: 15, alignItems:"center"}}>
        <CardMedia
          component="img"
          image="https://i.imgur.com/Gq44YL5.png"
          alt="logo"
          sx={{
            margin:0, padding:0,
            width:600,        
            height: "auto"  
            }}
        />

          {/* <img src="https://i.imgur.com/EUZnDj3.png" alt="logo" /> */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ maxWidth: "800px", padding: "16px", textAlign: "center" }}>
        <Typography variant={"h6"} margin={0} padding={0}>
          Fokuserar på att skapa skräddarsydda hemsidor efter dina behov och
          önskemål. Vi erbjuder även konsulttjänster för dig som inte har en
          färdig plan för din hemsida, där vi designar och utformar en plan
          tillsammans.
        </Typography>
        </Box>
    </div>
 
    </div>
  );
}
