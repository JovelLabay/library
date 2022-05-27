import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  Spinner,
} from "@chakra-ui/react";

// LOGO
import logo from "../assets/logo/schoolLogo.jpg";
import { UsernamePassword } from "../modules/interface";
import Loader from "../layouts/Loader";

export default function Login() {
  const navigation = useNavigate();

  //USERNAME AND PASSWORD STATE MAMANGE HANDLE
  const [username, setUsernmae] = useState("");
  const [password, setPassword] = useState("");
  const [authErr, setAuthErr] = useState<UsernamePassword>({
    isValid: false,
    btnStatus: "Login",
  });
  const [loader, setLoader] = useState(false);

  // HANDLE FOR AUTHENTICATION AND AUTHORIZATION
  const serverToken = sessionStorage.getItem("Server Token");
  useEffect(() => {
    if (serverToken) {
      navigation("/admin-dashboard");
    } else {
      setTimeout(() => {
        setLoader(true);
      }, 2000);
    }
  }, []);

  const logIn = () => {
    setAuthErr({ btnStatus: "Logging" });
    axios
      .post("/login-admin", {
        username,
        password,
      })
      .then((response) => {
        const { token, message, fullname, position } = response.data;
        if (token) {
          sessionStorage.setItem("Server Token", token);
          sessionStorage.setItem("Fullname", fullname);
          sessionStorage.setItem("Position", position);
          alert(message);
          navigation("/admin-dashboard");
          setAuthErr({ isValid: false, btnStatus: "Login" });
        } else {
          alert(message);
          setAuthErr({ isValid: true, btnStatus: "Login" });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {loader === false ? (
        <Loader />
      ) : (
        <div className="sub_container_login">
          <h1 className="school_name">{text.schoolName}</h1>
          <div className="login_form">
            <VStack>
              <Image
                boxSize="20%"
                objectFit="cover"
                src={logo}
                alt="Dan Abramov"
              />
              <h1 className="text_login">{text.loginText}</h1>
            </VStack>
            <div className="login_form_input">
              <FormControl>
                <FormLabel htmlFor="email">Username:</FormLabel>
                <Input
                  isInvalid={authErr.isValid}
                  id="email"
                  type="email"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsernmae(e.target.value)}
                />
                <FormLabel htmlFor="email">Password:</FormLabel>
                <Input
                  isInvalid={authErr.isValid}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </div>
            <Button
              width="100%"
              colorScheme="blue"
              marginTop="1rem"
              onClick={logIn}
            >
              {authErr.btnStatus === "Logging" ? (
                <Spinner />
              ) : (
                authErr.btnStatus
              )}
            </Button>
          </div>
          <h1 className="text_login_required">{text.loginTextRequire}</h1>
        </div>
      )}
    </>
  );
}
