import React from "react";
import { Button, Img, Input, Line, Text } from "components";

export default function Partners(){
    return(
        <>
            <div style={{width:"100%", margin:"auto"}} className="bg-white-A700 flex flex-col gap-6 items-center justify-start max-w-[1438px] md:px-10 px-20 sm:px-5 py-[60px] w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl w-auto"
                size="txtMontserratBold24Gray90001"
              >
                Our Partners
              </Text>
              <Text
                className="text-blue_gray-600 text-center text-xl w-auto"
                size="txtMontserratMedium20"
              >
                <span className="text-blue_gray-600 font-montserrat font-medium">
                  Backed by{" "}
                </span>
                <span className="text-blue_gray-600 font-montserrat font-bold">
                  most trusted
                </span>
                <span className="text-blue_gray-600 font-montserrat font-medium">
                  {" "}
                  names in the industry{" "}
                </span>
              </Text>
            </div>
            <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start max-w-7xl mx-auto w-full">
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start md:px-10 sm:px-5 px w-full">
                <Img
                  className="h md:h-auto object-cover w-full"
                  src="images/img_rblbanklogo1.png"
                  alt="rblbanklogoOne"
                />
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start md:px-10 sm:px-5 px w-full">
                <Img
                  className="h md:h-auto object-cover w-full"
                  src="images/img_zype1.png"
                  alt="zypeOne"
                />
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px w-full">
                <Img
                  className="h h-[140px] md:h-[140px] object-cover w-[87%]"
                  src="images/img_ackologo1.png"
                  alt="ackologoOne"
                />
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start md:px-10 px sm:px-5 w-full">
                <Img
                  className="h md:h-auto object-cover w-full"
                  src="images/img_incredlogo1.png"
                  alt="incredlogoOne"
                />
              </div>
              <div className="bg-white-A700 h-[140px] sm:px-5 px relative w-full">
                <Img
                  className="absolute h inset-[0] justify-center m-auto object-cover w-3/5"
                  src="images/img_cholamandalamlogo1.png"
                  alt="cholamandalamlo"
                />
              </div>
              <div className="bg-white-A700 h-[150px] sm:px-5 px relative w-full">
                <Img
                  className="absolute h-12 inset-y-[0] left-[18%] my-auto object-cover w"
                  src="images/img_croppedghostk.png"
                  alt="croppedghostk"
                />
              </div>
            </div>
          </div>
        </>
    )
}
