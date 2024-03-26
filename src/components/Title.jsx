import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Title({ title, subTile }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 600px)"); // Adjust breakpoint as needed

  return (
    <Box sx={{ textAlign: isSmallScreen && "center" }}>
      <Typography
        sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
          mt: "-30px",
        }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTile}</Typography>
    </Box>
  );
}
