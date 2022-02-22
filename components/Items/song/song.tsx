import React from "react";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";

interface Iprops {
  title?: string;
  subtitle?: string;
}

const Songs = React.memo((props: Iprops) => {
  const { title, subtitle } = props;
  const handleFavourite = (title: string) => {
    console.log("Favourite:::::", title);
  };
  return (
    <StyledWrapper>
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack flexDirection="row" alignItems="center">
          <StyledImgWraper>
            <img
              src="https://pm1.narvii.com/6515/053b41b100d51bacfb70f79a452393839107de78_hq.jpg"
              alt="image"
            />
          </StyledImgWraper>
          <Stack>
            <Typography>{title}</Typography>
            <Typography>{subtitle}</Typography>
          </Stack>
        </Stack>
        <Stack justifyContent="center">
          <Typography className="text-time">3:50</Typography>
          <Stack className="icon-right" direction="row">
            <IconButton size="small">
              <AddIcon />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => handleFavourite(title || "")}
            >
              <FavoriteIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  flex: 1;
  .icon-right {
    display: none;
  }
  &:hover {
    .text-time {
      display: none;
    }
    .icon-right {
      display: block;
    }
  }
`;
const StyledImgWraper = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 20px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  ,

`;

export default Songs;
