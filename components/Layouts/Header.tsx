/* eslint-disable react/display-name */
import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { IconButton, } from "@mui/material";
import SearchIcon from "@mui/icons-material/search"


const Header = React.memo(()=>{
    return(
        <Stack
        px={2}
        py={4}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        >
            <StyledLogo variant="h5">Sopify</StyledLogo>
            <IconButton>
                <SearchIcon/>
            </IconButton>
        </Stack>
    );
} );
const StyledLogo = styled(Typography)`
  font-weight: 700;
  `;
export default Header;