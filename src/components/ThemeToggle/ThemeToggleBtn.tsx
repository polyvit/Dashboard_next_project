import React, { useContext, Context } from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Typography, useMediaQuery } from "@mui/material";

interface Props {
  ColorModeContext: Context<{ toggleColorMode: () => void }>;
}

export default function ThemeToggleBtn(props: Props) {
  const mobileCheck = useMediaQuery("(min-width: 500px)");
  const { ColorModeContext } = props;
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      {mobileCheck && <Typography>{theme.palette.mode}</Typography>}
      <IconButton
        sx={{ mr: 2 }}
        title={theme.palette.mode + " mode"}
        aria-label={theme.palette.mode + " mode button"}
        onClick={colorMode?.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
}
