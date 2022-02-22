import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
// import { sortBy } from "lodash";


const obj = {name: "user1"}
const objs = [{name: "user1"},{name:'user2'}]
objs[0].name //user1
objs[1].name //user2
// const result = MENUS.filter((x) => x.label === 'Home')
// const sort = sortBy(MENUS,['label',"asc"])

export const MENUS = [
  { label: "Home", value: "/", url: "/", icon: <HomeIcon />, img: 'https://img.search.brave.com/zWApgdXmKyjFTewTWT5Vnce3KKGCkqFL3qxrYoCQWZk/rs:fit:786:678:1/g:ce/aHR0cDovL3BtMS5u/YXJ2aWkuY29tLzYy/MTAvZmZjMWFmMDU1/NjNkZjg1ZjBiMjI4/ODllZTg1OGYxNjVj/YmRmNzdiOV9ocS5q/cGc' },
  { label: "Charts", value: "charts", url: "/charts", icon: <BoltIcon /> },
  { label: "News", value: "news", url: "/news", icon: <LocalOfferIcon /> },
  { label: "Genres", value: "genres", url: "/genres", icon: <EmojiObjectsIcon/>}
];
export const MENUS2 = [
  { label: "Playlist", value: "playlist", url: "/playlist", icon: <PlaylistPlayIcon /> },
  { label: "Songs", value: "songs", url: "/songs", icon: <FavoriteIcon /> },
  { label: "Artists", value: "artists", url: "/artists", icon: <PersonIcon /> },
];
export const checkCurrentPage = (url: string, cur_url: string) => {
  if (url === cur_url) {
    return true;
  }
  return false;
};