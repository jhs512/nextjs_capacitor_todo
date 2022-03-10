import { Button, IconButton } from "@mui/material";
import Link from "../src/Link";

export default function ToolbarContent() {
  return (
    <div className="w-full flex">
      <div className="flex-1 flex">
        <IconButton variant="text" color="inherit" size="small">
          <i class="fa-solid fa-bars"></i>
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
          noLinkStyle
          href="/write"
          size="small"
        >
          <i className="fa-solid fa-pen"></i>
        </IconButton>
      </div>
    </div>
  );
}
