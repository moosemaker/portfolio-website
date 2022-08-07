import "./css/Popup.css";
import "./css/Navbar.css";
import Form from "./form";
import { motion, AnimatePresence } from "framer-motion";
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import Avatar from "@mui/material/Avatar";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = (props) => {
  const ModalRef = useRef();
  const DropdownRef = useRef();
  const USER = auth.currentUser;

  return (
    <>
      <nav className="navbar">
        <ul className="ul">
          <li>
            <p className="logo">
              Vaibhav <span>Sundeep</span>
            </p>
          </li>
          <div className="right-side">
            {props.displayPic === true ? null : (
              <li>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="Login-SignUp-btn"
                  onClick={() => {
                    ModalRef.current.Open();
                  }}
                >
                  Login
                </motion.button>
              </li>
            )}
            {props.displayPic === true ? (
              <li
                onClick={() => {
                  DropdownRef.current.Open();
                }}
              >
                <Avatar src={USER.photoURL} />
              </li>
            ) : null}
          </div>
        </ul>
      </nav>
      <Modal ref={ModalRef}>
        <Form />
      </Modal>

      <Dropdown ref={DropdownRef} />
    </>
  );
};

const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      Open: () => setOpen(true),
      Close: () => setOpen(false),
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="modal-backdrop"
          />
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: "0" }}
            exit={{ y: "100vh" }}
            className="modal-content-wrapper"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0, transition: { duration: 0.3, delay: 0.1 } }}
              exit={{ y: 50 }}
              className="modal-content"
            >
              {props.children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

const Dropdown = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      Open: () => setOpen(true),
      Close: () => setOpen(false),
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="modal-backdrop"
          />
          <motion.div
            className="Container"
            initial={{ y: "-100vh" }}
            animate={{ y: "0" }}
            exit={{ y: "100vh" }}
          >
            <h1>Sign Out</h1>
            <motion.div
              className="btn-wrapper"
              initial={{ y: 50 }}
              animate={{ y: 0, transition: { duration: 0.3, delay: 0.1 } }}
              exit={{ y: 50 }}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  auth.signOut();
                  alert("Signed Out");
                }}
                className="btn"
              >
                Sign Out
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default Navbar;
