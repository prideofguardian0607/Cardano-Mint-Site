import * as React from "react";
import Popover from "@mui/material/Popover";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Box } from "@mui/material";

export default function Tab() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <p className="more_nav" aria-describedby={id} onClick={handleClick}>
        more
      </p>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box className="tab_more">
          <li className="more_li">
            <Link to={`/comicbooks`} className="nav_li">
              comic books
            </Link>
          </li>
          <li className="more_li">
            <Link to={`/about`} className="nav_li">
              about us
            </Link>
          </li>
          <li className="more_li">
            {" "}
            <Link to={`/blogs`} className="nav_li">
              blog
            </Link>
          </li>
          <li className="more_li">
            <Link to={`/contact`} className="nav_li">
              contact us
            </Link>
          </li>
        </Box>
      </Popover>
    </div>
  );
}
