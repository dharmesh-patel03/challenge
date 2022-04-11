import React from "react";
import "../styles/slider.css";
import { withStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

import {  purple } from '@material-ui/core/colors';

export default function BtnSlider({ direction, moveSlide }) {
    //   console.log(direction, moveSlide);

    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(purple[500]),
            backgroundColor: "#00000042",
            '&:hover': {
                backgroundColor: "transparent",
            },
        },
    }))(Button);
    return (
        <ColorButton variant="contained"
            onClick={moveSlide}
            className={`${direction === "next" ? "btn-slide next" : "btn-slide prev"} btn button`}
        >
            {direction === "next" ? <ChevronRightIcon className="fs-1 " /> : <ChevronLeftIcon className="fs-1 " />}
        </ColorButton>
    );
}