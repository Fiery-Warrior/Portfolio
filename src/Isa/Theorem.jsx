// import React from "react";
// import "./theorem.css";

// function Theorem() {

//   return (
//     <>
        // <a class="fancy" href="#">
        // <span class="top-key"></span>
        // <span class="text">Theorems & Rules</span>
        // <span class="bottom-key-1"></span>
        // <span class="bottom-key-2"></span>
        // </a>
//     </>
//   );
// }


// export default Theorem;


import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "./theorem.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
}

export default function Theorem() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        
        <a class="fancy" href="#">
          <span class="top-key"></span>
          <span class="text">Theorems</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </a>
        
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Theorems and Rules</h2>
          <p id="parent-modal-description">
          Konig's Theorem: if a graph is bipartite, then a Maximum Matching has the same number of elements as a Minimum Covering
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}

