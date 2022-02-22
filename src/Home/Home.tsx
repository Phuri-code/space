import React from "react";
import Divider from "@mui/material/Divider";
import styled from "styled-components";
import NewReleases from "./newRelease";
import Songs from "../../components/Items/song";
import Tracks from "./Track";
import Discover from "./Discover";
import ButtonBases from "../../components/Items/song/mood";

const Home = React.memo(() => {
  return (
    <StyledWrapper>
      <NewReleases tittle="New" subTitle="Releases" />
      <Divider sx={{ marginTop: 7, marginBottom: 7 }} />
      <Tracks title="Hot Track" subtitle="Top Globle 50" />
      <Divider sx={{ marginTop: 7, marginBottom: 7 }} />
      <NewReleases tittle="Pilihan Editor" subTitle="Featured Playlists" />
      <StyledWrapper></StyledWrapper>
      <Songs title="LIFE GOSE ON" subtitle="Bitg hits" />
      <Divider sx={{ marginTop: 7, marginBottom: 7 }} />
      <Discover />
      <Divider sx={{ marginTop: 7, marginBottom: 7 }} />
      <ButtonBases />
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;
`;

export default Home;
