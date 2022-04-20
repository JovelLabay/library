import React from "react";

// CHAKRA UI
import {
  Center,
  VStack,
  Image,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

// LOGO
import logo from "../imgs/logo/schoolLogo.jpg";

// STATIC TEXT
import text from "../modules/text.json";
import TopRightMenuCom from "../components/TopRightMenuCom";

import { ActiveBtn } from "../modules/interface";

interface PropActiveBtn {
  activeBtn: ActiveBtn;
  setActiveBtn: React.Dispatch<React.SetStateAction<ActiveBtn>>;
}

export default function TopNavCom({ activeBtn, setActiveBtn }: PropActiveBtn) {
  return (
    <div className="sub_container top_nav_option">
      {/* LEFT */}
      <div className="nav_top_left">
        <Image
          boxSize="10"
          objectFit="cover"
          marginRight="5px"
          src={logo}
          alt="Dan Abramov"
        />

        <h1>{text.topNavTitle}</h1>
      </div>
      {/* RIGHT */}
      <TopRightMenuCom activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
    </div>
  );
}
