import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Description({
  jobDetailsFromCompany,
}: {
  jobDetailsFromCompany: string;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="text-blue-500  text-lg  -mt-4 w-full text-center hover:underline"
      >
        Show More
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800, height: 800 }}>
          <h2
            id="parent-modal-title"
            className="text-center text-3xl font-semibold mb-10"
          >
            Job Description
          </h2>
          <p className="text-xl font-semibold mb-2">About Company:</p>
          <p id="parent-modal-description" className="  text-lg">
            {jobDetailsFromCompany}
          </p>
        </Box>
      </Modal>
    </div>
  );
}
