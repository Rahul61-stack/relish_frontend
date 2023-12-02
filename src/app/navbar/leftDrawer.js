import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Bars4Icon } from "@heroicons/react/24/outline";
import * as React from "react";
import Link from "next/link";
import { CurrencyRupeeIcon, HomeIcon, QueueListIcon } from "@heroicons/react/24/solid";

export default function LeftDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="flex-col h-screen bg-slate-800">
        <div className="">
        <p className="text-white py-2 font-bold text-sm text-center text-">R E L I S H</p>
        </div>
        <div className="border-y-4 border-y-black py-4 pl-3">
          <Link onClick={toggleDrawer(anchor,false)} href="/">
            <div className="flex">
            <HomeIcon className="h-6 w-6 pr-2" color="white"/>
            <p className="font-semibold text-white tex.t-xl"> Home</p>
            </div>
          </Link>
        </div>
        <div className="border-b-4 border-black py-4 pl-3">
          <Link onClick={toggleDrawer(anchor,false)} href='/category'>
          <div className="flex">
            <QueueListIcon className="h-6 w-6 pr-2" color="white"/>
            <p className="font-semibold text-white tex.t-xl"> Categories</p>
            </div>
          </Link>
        </div>
        <div className="border-b-4 border-b-black py-4 pl-3">
          <Link onClick={toggleDrawer(anchor,false)} href="/category/onsale">
          <div className="flex">
            <CurrencyRupeeIcon className="h-6 w-6 pr-2" color="white"/>
            <p className="font-semibold text-white tex.t-xl"> Sale</p>
            </div>
          </Link>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Bars4Icon width={30} height={30} color="white" />
          </Button>
          <Drawer
            anchor="left"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
