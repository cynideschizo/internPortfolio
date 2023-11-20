import { Box, Typography } from "@mui/material";

function Bio() {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography
        variant="h2"
        className="bio"
        sx={{
          fontWeight: 700,
          maxWidth: "64.3rem",
          letterSpacing: "0.0625rem",
        }}
      >
        Hi I'm Naufaldi, a special human with some ability to love learning and
        working on teamwork.
      </Typography>
    </Box>
  );
}

export default Bio;
