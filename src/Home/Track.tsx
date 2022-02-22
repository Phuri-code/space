import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import Songs from "../../components/Items/song";
import Grid from "@mui/material/Grid";
import NewReleases from "./newRelease";
import styled from "styled-components";
import { Typography } from "@mui/material";

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <Songs title="BTS-song" subtitle="Big Hit" />
      </ListItemButton>
    </ListItem>
  );
}

interface IProps {
  title?: string;
  subtitle?: string;
}

const Tracks = React.memo((props: IProps) => {
  const { title, subtitle } = props;

  return (
    <StyledWrapper>
      {title && (
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {title}
        </Typography>
      )}
      <Typography variant="h4" mb={3}>
        {subtitle}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={5.5} md={6.5}>
            <FixedSizeList
              height={562}
              width={567}
              itemSize={100}
              itemCount={50}
              overscanCount={5}
            >
              {renderRow}
            </FixedSizeList>
          </Grid>
          <Grid item xs={5.4} md={0}>
            <NewReleases
              tittle="Pilihan Editor"
              subTitle="Featured Playlists"
            />
          </Grid>
        </Grid>
      </Box>
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export default Tracks;
