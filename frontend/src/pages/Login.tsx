import React from "react";

// STATIC TEXT
import text from "../modules/text.json";

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

export default function Login() {
  return (
    <div className="sub_container_login">
      <h1 className="school_name">{text.schoolName}</h1>
      <div className="login_form">
        <VStack>
          <Image boxSize="20%" objectFit="cover" src={logo} alt="Dan Abramov" />
          <h1 className="text_login">{text.loginText}</h1>
        </VStack>
        <div className="login_form_input">
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
            <FormLabel htmlFor="email">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </FormControl>
        </div>
        <Button width="100%" colorScheme="blue" marginTop="1rem">
          Login
        </Button>
      </div>
      <h1 className="text_login_required">{text.loginTextRequire}</h1>
    </div>
  );
}
