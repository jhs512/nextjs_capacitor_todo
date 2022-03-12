import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import Link from "../src/Link";

export default function ToolbarContent() {
  const anchor = "left";
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);

  return (
    <>
      <Drawer
        anchor={anchor}
        open={leftDrawerOpen}
        onClose={() => setLeftDrawerOpen(false)}
      >
        <List>
          <ListItem button className="items-baseline">
            <i class="fa-solid fa-trash-can"></i>
            <span>&nbsp;</span>
            <span>앱 초기화</span>
          </ListItem>
          <ListItem
            button
            className="items-baseline"
            onClick={() => alert("개발자 희희")}
          >
            <i className="fa-solid fa-code"></i>
            <span>&nbsp;</span>
            <span>개발자</span>
          </ListItem>
        </List>
      </Drawer>
      <div className="w-full flex">
        <div className="flex-1 flex">
          <IconButton
            variant="text"
            color="inherit"
            size="small"
            onClick={() => setLeftDrawerOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </IconButton>
        </div>

        <Button
          variant="text"
          color="inherit"
          component={Link}
          noLinkStyle
          href="/"
          className="font-bold"
        >
          HAPPY NOTE
        </Button>

        <div className="flex-1 flex justify-end">
          <IconButton
            variant="text"
            color="inherit"
            component={Link}
            href="/write"
            size="small"
          >
            <i className="fa-solid fa-pen"></i>
          </IconButton>
        </div>
      </div>
    </>
  );
}
