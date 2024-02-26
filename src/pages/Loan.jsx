import React from "react";
import { Button, Img, Input, Line, Text } from "components";

export default function Loan(){
    return(
        <>
            <div className="flex flex-col items-center justify-start pt-[11px] px-[11px] w-full">
            <div className="flex flex-col gap-[42px] justify-start max-w-[1368px] mt-[22px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[86px] items-start justify-end md:ml-[0] ml-[180px] w-[87%] md:w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start md:mt-0 mt-[27px] w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl w-auto"
                      size="txtMontserratBold24Gray90001"
                    >
                      Money for everything you need
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-600 text-center text-xl w-auto"
                    size="txtMontserratMedium20"
                  >
                    At CreditSea, we offer a range of hassle-free financial
                    solutions tailored to your needs
                  </Text>
                </div>
                <div className="backdrop-opacity-[0.5] bg-light_blue-50_7f blur-[70.00px] h-[142px] rounded-[50%] w-[142px]"></div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[140px] w-[90%] md:w-full">
                <div className="md:h-[516px] h-[568px] relative w-[43%] md:w-full">
                  <div className="absolute backdrop-opacity-[0.5] bg-light_blue-50_7f blur-[70.00px] h-[463px] left-[0] rounded-[231px] top-[3%] w-[463px]"></div>
                  <div className="absolute bottom-[0] h-[408px] md:h-[516px] right-[0] w-[47%]">
                    <Img
                      className="h-[408px] m-auto object-cover w-full"
                      src="images/img_shadow.png"
                      alt="shadow"
                    />
                    <div className="absolute flex h-[408px] md:h-[516px] inset-[0] justify-end m-auto w-full">
                      <Img
                        className="h-[516px] mt-auto mx-auto object-cover w-full"
                        src="images/img_main.png"
                        alt="main"
                      />
                      <Img
                        className="absolute bottom-[0] h-[492px] inset-x-[0] mx-auto object-cover w-[91%]"
                        src="images/img_pixel8promockup.png"
                        alt="pixel8promockup"
                      />
                    </div>
                  </div>
                  <div className="absolute h-[516px] left-[4%] top-[0] w-[47%]">
                    <Img
                      className="h-[516px] m-auto object-cover w-full"
                      src="images/img_shadow.png"
                      alt="shadow_One"
                    />
                    <div className="absolute h-[516px] inset-[0] justify-center m-auto w-full">
                      <Img
                        className="h-[516px] m-auto object-cover w-full"
                        src="images/img_main.png"
                        alt="main_One"
                      />
                      <Img
                        className="absolute h-[492px] inset-[0] justify-center m-auto object-cover w-[91%]"
                        src="images/img_pixel8promockup_492x222.png"
                        alt="pixel8promockup_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-10 items-start justify-start md:mt-0 mt-[73px] w-auto md:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row gap-3 items-start justify-start w-auto md:w-full">
                      <Img
                        className="h-9 w-9"
                        src="images/img_doneoutlinefi.svg"
                        alt="doneoutlinefi"
                      />
                      <Text
                        className="text-center text-gray-900_01 text-xl w-auto"
                        size="txtMontserratBold20"
                      >
                        Offering personal loans, home loans, and credit lines
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-auto sm:w-full">
                      <Img
                        className="h-9 w-9"
                        src="images/img_doneoutlinefi.svg"
                        alt="doneoutlinefi_One"
                      />
                      <Text
                        className="text-center text-gray-900_01 text-xl w-auto"
                        size="txtMontserratBold20"
                      >
                        Hassle-free application and approval
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-auto sm:w-full">
                      <Img
                        className="h-9 w-9"
                        src="images/img_doneoutlinefi.svg"
                        alt="doneoutlinefi_Two"
                      />
                      <Text
                        className="text-center text-gray-900_01 text-xl w-auto"
                        size="txtMontserratBold20"
                      >
                        Providing competitive interest rates
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-auto sm:w-full">
                      <Img
                        className="h-9 w-9"
                        src="images/img_doneoutlinefi.svg"
                        alt="doneoutlinefi_Three"
                      />
                      <Text
                        className="text-center text-gray-900_01 text-xl w-auto"
                        size="txtMontserratBold20"
                      >
                        Tailored repayment plans to suit individual needs
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-3 items-start justify-start w-auto md:w-full">
                      <Img
                        className="h-9 w-9"
                        src="images/img_doneoutlinefi.svg"
                        alt="doneoutlinefi_Four"
                      />
                      <Text
                        className="text-center text-gray-900_01 text-xl w-auto"
                        size="txtMontserratBold20"
                      >
                        Helping customers achieve their financial objectives
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer flex h-[54px] items-center justify-center w-[284px]"
                    rightIcon={
                      <Img
                        className="h-6 ml-2.5"
                        src="images/img_arrowforwardfill0wght400grad0opsz24_1.svg"
                        alt="arrow_forward_FILL0_wght400_GRAD0_opsz24 1"
                      />
                    }
                    color="blue_900_01"
                    size="sm"
                  >
                    <div className="font-bold leading-[normal] text-base text-center tracking-[0.16px]">
                      Apply for Loan
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
        </>
    )
}