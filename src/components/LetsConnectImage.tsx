import { Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function LetsConnectImage() {
  return (
    <Box
      sx={{ display: "flex",  justifyContent: "start", gap: 2 }}
    >
      <Box sx={{display:"inline-block",
  margin:" 0 1rem",fontSize: "2rem","&:hover":{color:"#E4405F"}  }}>
       <InstagramIcon/>
        
      </Box>
      <Box sx={{display:"inline-block",
  margin:" 0 1rem",fontSize: "2rem","&:hover":{color:"#1DA1F2"}  }}>
        <TwitterIcon/>
      </Box>
      <Box sx={{  display:"inline-block",
  margin:" 0 1rem",fontSize: "2rem", "&:hover":{color:"#1877F2"}}}>
        <FacebookIcon/>
      </Box>
    </Box>
  );
}

export default LetsConnectImage;
