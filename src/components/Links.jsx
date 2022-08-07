import React, {
  useRef,
  forwardRef,
  useState,
  useImperativeHandle,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./css/links.css";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const Links = forwardRef((props, ref) => {
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
              <div className="title">
                <h1>Links</h1>
              </div>
              <Box p={13} position={"absolute"} marginTop={13} marginLeft={1}>
                <Button
                  variant="contained"
                  target="_blank"
                  href="https://github.com/moosemaker"
                >
                  Github
                </Button>
                <Divider />
              </Box>
              <Divider />
              <Box p={9.5} marginLeft={4} marginTop={1} position={"absolute"}>
                <Button
                  variant="contained"
                  href="https://twitter.com/Vaibhav69354465"
                  target="_blank"
                >
                  Twitter
                </Button>
              </Box>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default Links;
