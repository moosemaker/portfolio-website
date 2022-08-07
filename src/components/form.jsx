import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";
import "./css/form.css";
import { auth } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email);
    setEmail(email);
    console.log("New Email: " + email);
  }, [email]);

  useEffect(() => {
    console.log(password);
    setPassword(password);
    console.log("New Password: " + password);
  }, [password]);

  return (
    <div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <div className="email-Sign">
          <div className="title">
            <h1>Sign Up</h1>
          </div>

          <Box p={5}>
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
              // inputProps={{ className: classes.input }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="email"
            />
          </Box>
          <Box p={2} marginLeft={3} marginTop={-5}>
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(email);
              }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className="password"
            />
          </Box>

          <Box marginLeft={13}>
            <Button
              onClick={(e) => console.log("Clicked")}
              type="submit"
              variant="outlined"
            >
              Submit
            </Button>
          </Box>
          <Box p={2}>
            <Divider />
          </Box>
          <Box marginLeft={7.5} marginTop={4}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
              onClick={SignIn}
              type="button"
              class="login-with-google-btn"
            >
              Sign in with Google
            </motion.button>
          </Box>
        </div>
      </form>
    </div>
  );
}

const SignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

// Vaibhav69354461

// Bearer Token: AAAAAAAAAAAAAAAAAAAAAMOKfgEAAAAAVCU2nvDiPxMbf9zFgm7jLvU3enk%3DZj4YNA6enbODsT0kqwxFOG9p7d9M9WvdMAMXv4qewWZTFp2Ssj

// Twitter URL: https://portfolio-dev-51f6c.firebaseapp.com/__/auth/handler
