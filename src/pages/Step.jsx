import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components";

export default function Step(){
    return(
        <>
            <div style={{width: "100%" , margin: "auto"}} className="bg-blue-900_01 flex flex-col gap-[58px] items-center justify-end pt-[60px] w-full">
              <Text className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl" size="txtMontserratBold24" >
                Loan in 3 Simple Steps
              </Text>
              <div className="md:h-[244px] h-[304px] md:px-5 relative w-full">
                <div className="md:h-[244px] h-[304px] m-auto w-full">
                  <div className="absolute md:h-[244px] h-[304px] inset-y-[0] my-auto right-[0] w-[67%] md:w-full">
                    <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[51%]">
                      <div className="flex flex-col gap-[54px] items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Line className="bg-white-A700_7f h-[142px] w-px" />
                          <Line className="bg-white-A700_7f h-[142px] w-px" />
                        </div>
                        <div className="bg-white-A700 border border-blue-900_01 border-solid flex flex-row gap-2.5 h-12 md:h-auto items-center justify-center sm:px-5 px-6 py-[9px] rounded w-[244px]">
                          <Text
                            className="text-blue-900_01 text-center text-sm tracking-[0.14px] w-auto"
                            size="txtMontserratRomanBold14Blue90001"
                          >
                            <Link to="*" style={{fontSize:"18px"}} >Explore Now</Link>
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_arrowforwardf.svg"
                            alt="arrowforwardf_One"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[200px] object-cover right-[0]"
                      src="images/img_vector.png"
                      alt="vector"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[200px] left-[0] object-cover"
                    src="images/img_vector_light_blue_400.png"
                    alt="vector_One"
                  />
                </div>
                <div className="absolute flex flex-col gap-3 items-center justify-center left-[7%] top-[0] w-auto">
                  <Button
                    className="flex h-[58px] items-center justify-center w-[58px]"
                    color="white_A700_26"
                  >
                    <Img
                      className="h-9"
                      src="images/img_downloadingfil.svg"
                      alt="downloadingfil"
                    />
                  </Button>
                  <Text
                    className="max-w-[287px] md:max-w-full text-center text-white-A700 text-xl"
                    size="txtMontserratMedium20WhiteA700"
                  >
                    <span className="text-white-A700 font-montserrat font-bold">
                      Download{" "}
                    </span>
                    <span className="text-white-A700 font-montserrat font-medium">
                      the Creditsea app, complete your profile.
                    </span>
                  </Text>
                </div>
                <div className="absolute flex flex-col gap-3 inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
                  <Button
                    className="flex h-[58px] items-center justify-center w-[58px]"
                    color="white_A700_26"
                  >
                    <Img
                      className="h-9"
                      src="images/img_taskfill0wght.svg"
                      alt="taskfill0wght"
                    />
                  </Button>
                  <Text
                    className="max-w-[344px] md:max-w-full text-center text-white-A700 text-xl"
                    size="txtMontserratMedium20WhiteA700"
                  >
                    Upload your KYC, set up automatic repayments from your bank
                    account.
                  </Text>
                </div>
                <div className="absolute flex flex-col gap-3 items-center justify-start right-[4%] top-[0] w-auto">
                  <Button
                    className="flex h-[58px] items-center justify-center w-[58px]"
                    color="white_A700_26"
                  >
                    <Img
                      className="h-9"
                      src="images/img_phonelinkring.svg"
                      alt="phonelinkring"
                    />
                  </Button>
                  <Text
                    className="max-w-[344px] md:max-w-full text-center text-white-A700 text-xl"
                    size="txtMontserratRomanBold20"
                  >
                    <span className="text-white-A700 font-montserrat font-bold">
                      Use Creditsea{" "}
                    </span>
                    <span className="text-white-A700 font-montserrat font-medium">
                      to pay when making payments at 100,000 offline and 15,000
                      online stores.
                    </span>
                  </Text>
                </div>
              </div>
          </div>
        </>
    )
}
