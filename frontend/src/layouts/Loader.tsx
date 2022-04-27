import React from "react";

import logo from "../imgs/logo/schoolLogo.jpg";

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

export default function Loader() {
  return (
    <div className="loader">
      <Image
        boxSize="10rem"
        objectFit="cover"
        marginRight="5px"
        src={logo}
        alt="Dan Abramov"
      />
      <div className="flex w-30 justify-between">
        <div className="loading"></div>
        <div className="loading2"></div>
        <div className="loading3"></div>
      </div>
    </div>
  );
}
