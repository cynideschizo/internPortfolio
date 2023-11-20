import { Box } from "@mui/material";
import instagramLogo from "../assets/instagram.png";
import twitterLogo from "../assets/twitter.png";
import facebookLogo from "../assets/facebook.png";

function LetsConnectImage() {
  return (
    <Box
      sx={{ display: "flex",  justifyContent: "start", gap: 2 }}
    >
      <Box sx={{}}>
        <img src={instagramLogo} className="connect-logo" alt="ellipse" />
      </Box>
      <Box sx={{ }}>
        <img src={twitterLogo} className="connect-logo" alt="bio" />
      </Box>
      <Box sx={{}}>
        <img src={facebookLogo} className="connect-logo" alt="bio" />
      </Box>
    </Box>
  );
}

export default LetsConnectImage;
