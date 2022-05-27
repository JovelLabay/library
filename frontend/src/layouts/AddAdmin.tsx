import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Alert,
} from "@chakra-ui/react";

import { BsExclamationCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";

export default function AddAdmin({
  addAdmin,
  setAddAdmin,
}: {
  addAdmin: boolean;
  setAddAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("Principal");
  const [alertPass, setAlertPass] = useState(false);
  const [submitPass, setSubmitPass] = useState(false);

  // ADD ADMIN SUBMIT HANDLER
  const addAdminHandler = () => {};

  useEffect(() => {
    const position = sessionStorage.getItem("Position");
    if (position === "Librarian" || "Principal") {
      setSubmitPass(true);
    }
  }, []);

  return (
    <Modal isOpen={addAdmin} onClose={() => setAddAdmin(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add user in this system</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* ADD ADMIN FORM */}
          <FormControl>
            <FormLabel htmlFor="email">Admin Username:</FormLabel>
            <Input
              placeholder="Username"
              id="text "
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Admin password:</FormLabel>
            <Input
              isInvalid={alertPass}
              placeholder="Password"
              id="text"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormLabel htmlFor="email">Confirm Admin password:</FormLabel>
            <Input
              isInvalid={alertPass}
              placeholder="Confirm Password"
              id="text"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Firstname:</FormLabel>
            <Input
              placeholder="User Firstname"
              id="text"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Lastname:</FormLabel>
            <Input
              placeholder="User Lastname"
              id="text"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <RadioGroup onChange={setPosition} value={position}>
            <FormLabel htmlFor="email">Position:</FormLabel>
            <Stack direction="column">
              <Radio value="Principal">Principal</Radio>
              <Radio value="Librarian">Librarian</Radio>
              <Radio value="Asign Teacher">Asign Teacher</Radio>
              <Radio value="Student Asistant">Student Asistant</Radio>
            </Stack>
          </RadioGroup>
        </ModalBody>

        <ModalFooter>
          {submitPass === true ? (
            <>
              <Button
                colorScheme="blue"
                variant="ghost"
                onClick={addAdminHandler}
              >
                Create new admin
              </Button>
            </>
          ) : (
            <Alert status="info">
              <BsExclamationCircleFill
                style={{
                  marginRight: "5px",
                  height: "2.5rem",
                  width: "2.5rem",
                }}
              />
              Cannot Add new user in this system becuase your account does not
              have privileges
            </Alert>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
