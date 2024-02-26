import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Review from "./Review";
import Faq from "./Faq";
import Footer from "./Footer";

import { Button, Img, Input, Line, Text } from "components";

export default function Talk(){
    return(
        <>
            <div style={{width:"90%", margin:"auto"}} className="bg-gradient  flex md:px-5 relative w-full">
            <div className="h-[247px] my-auto w-[78%] md:w-full">
              <div className="h-[247px] my-auto w-[91%] md:w-full">
                <Img
                  className="h-[247px] m-auto object-cover rotate-[180deg] w-full"
                  src="images/img_ellipse1_247x1015.png"
                  alt="ellipseOne_One"
                />
                <Img
                  className="absolute h-[247px] inset-y-[0] left-[0] my-auto object-cover rotate-[180deg] w-[89%]"
                  src="images/img_ellipse3_247x898.png"
                  alt="ellipseThree_One"
                />
              </div>
              <div className="absolute h-[247px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[247px] m-auto object-cover rotate-[180deg] w-full"
                  src="images/img_ellipse2_247x1118.png"
                  alt="ellipseTwo_One"
                />
                <div className="absolute bottom-[14%] flex flex-col gap-6 items-start justify-start left-[7%] w-[69%]">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtMontserratBold24"
                    >
                      Talk to our expert{" "}
                    </Text>
                    <Text
                      className="max-w-[764px] md:max-w-full text-base text-white-A700"
                      size="txtMontserratMedium16WhiteA700"
                    >
                      Lorem ipsum dolor sit amet consectetur. Enim at porttitor
                      nisi dui dignissim. Mattis ut mauris tincidunt viverra.
                      Feugiat pellentesque eu ornare mus.
                    </Text>
                  </div>
                  <Button
                    className="border border-blue-900_01 border-solid cursor-pointer flex h-12 items-center justify-center rounded w-[244px]"
                    rightIcon={
                      <Img
                        className="h-6 ml-2.5"
                        src="images/img_arrowforwardf.svg"
                        alt="arrow_forward_FILL0_wght400_GRAD0_opsz24 1"
                      />
                    }
                    color="white_A700"
                  >
                    <div className="font-semibold leading-[normal] text-center text-sm tracking-[0.14px]">
                      Click to proceed
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <Img
              className="h-[247px] ml-[-37px] my-auto object-cover w-1/4 z-[1]"
              src="images/img_pexelskarolina.png"
              alt="pexelskarolina"
            />
          </div>
        </>
    )
}