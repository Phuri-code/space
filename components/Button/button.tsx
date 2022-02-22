import React from "react";
import Button from "@mui/material/Button";
interface IProps {
  hasIcon?: boolean;
  title: string;
}
// eslint-disable-next-line react/display-name
const MyButton = React.memo((props: IProps) => {
  const { title, hasIcon } = props;
  return <Button variant="contained">{title}</Button>;
});
export default MyButton;
