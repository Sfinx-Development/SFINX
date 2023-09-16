import { Typography, CardMedia} from "@mui/material";

export default function Logotext() {
  return (
    <div style={{display:"flex", flexDirection:"column", margin: 0, alignItems:"center"}}>
        <CardMedia
          component="img"
          image="https://i.imgur.com/EUZnDj3.png"
          sx={{
            margin:0, padding:0,
            width:600,
            height:350
            }}
        />

          {/* <img src="https://i.imgur.com/EUZnDj3.png" alt="logo" /> */}

        <Typography variant={"h6"} margin={0} padding={0}>
          Fokuserar på att skapa skräddarsydda hemsidor efter dina behov och
          önskemål. Vi erbjuder även konsulttjänster för dig som inte har en
          färdig plan för din hemsida, där vi designar och utformar en plan
          tillsammans.
        </Typography>
 
    </div>
  );
}
