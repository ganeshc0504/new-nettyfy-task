import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../product-service/ProductService";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const ProductDetail = () => {
  const { id } = useParams();

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const [product, setProduct] = useState({});

  
  useEffect(() => {
      ProductService.fetchOneProduct(id)
      .then((res) => {
          console.log("res:", res.data);
          setProduct(res.data);
        })
        .catch((err) => {
            console.log("error : ", err);
        });
    }, []);
    
    const {images,brand,category,description,discountPercentage,price,rating,stock,title } = product

    const maxSteps = Array.isArray(images) && images.length;
  
    return (
    <div className="col-12">
      <Box sx={{ width:"100%", height:"60vh", flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {Array.isArray(images) && images.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: {sm:100,md:500},
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step}
                  alt="Error..."
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
      <Box sx={{mt:30}}>
        <h5>{brand}</h5>
        <h2>{title}</h2>
        <h4>{category}</h4>
        <p>{description}</p>
        <h6 style={{color:"green"}}><b>Price : {price}rs</b></h6>
        <h6 style={{color:"green"}}><b>Discount  : {discountPercentage}%</b></h6>
        <h6>Stock : {stock}</h6>
        <h6 style={{color:"orange"}}>Rating : {rating}</h6>
        <Button variant="contained" sx={{bgcolor:"black"}}>Black Button</Button>
      </Box>
    </div>
  );
};

export default ProductDetail;
