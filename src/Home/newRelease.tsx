import React from "react";
import Playlists from "../../components/Items/Playlist";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import { range } from "lodash";

interface IProps {
  tittle : string;
  subTitle : string;
}

const NewReleases = React.memo((props: IProps ) => {
  const {tittle, subTitle} = props;

  return (
    <StyledWrapper>
      <Typography variant="h6" color="textSecondary" gutterBottom>{tittle}</Typography>
      <Stack
        marginTop={-10}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={1}
      >
        <Typography variant="h4">{subTitle}</Typography>
        <Button endIcon={<ArrowForwardIcon />}>see all</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        {range(0, 4).map((item:any,i: any) => (
          <Playlists key={i} />
        ))}
      </Stack>
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default NewReleases;
