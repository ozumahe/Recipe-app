// # React
import React from "react";

// # MUI
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";

// # CSS
import "./Meal.css";

// # Modal Style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "100vh",
  overflow: "auto",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #d3bf4d",
  boxShadow: 24,
  p: 4,
};

function Meals({ strMealThumb, strMeal, strInstructions, ingredients }) {
  // # Modal set
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="meals m-2 md:m-4 ">
        <div className="meal__card relative h-auto md:w-48 w-40 overflow-hidden rounded-b rounded-t-3xl shadow-lg">
          <div>
            <img className="w-full" src={strMealThumb} alt={strMeal} />
          </div>
          <div className="meal__card-info w-full">
            <p className="meal__card-name m-2 text-xl font-bold">
              {strMeal.length > 13 ? `${strMeal.slice(0, 13)}...` : strMeal}
            </p>
          </div>
          <button
            onClick={handleOpen}
            className="meal__card-btn m-2 mx-auto flex justify-center items-center w-4/5 rounded-lg p-1 capitalize text-white  hover:drop-shadow-lg"
          >
            <p className="text-bold">VIEW</p>
            <VisibilityIcon className="mx-2" />
          </button>
        </div>
      </div>
      <div className="">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 hover:text-red-500"
            >
              <CancelIcon />
            </button>
            <div className="flex flex-col">
              <div className="w-full relative rounded-md overflow-hidden h-52 ">
                <img
                  className="w-full h-full object-cover"
                  src={strMealThumb}
                  alt={strMeal}
                />
                <h1 className="absolute md:text-5xl font-bold text-4xl top-2/4 left-2/4 text-bold -translate-x-1/2 -translate-y-1/2 text-white">
                  {strMeal}
                </h1>
              </div>
              {/* ingredient */}
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ mt: 3, mb: 2 }}
              >
                Ingredient
              </Typography>
              <ol>
                {ingredients.map((ing) => (
                  <li>
                    <FiberManualRecordIcon className="FiberManualRecordIcon" />
                    {ing}
                  </li>
                ))}
              </ol>
              {/* =======ingredient======= */}
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ mt: 3 }}
              >
                Instruction
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 0 }}>
                {strInstructions}
              </Typography>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Meals;
