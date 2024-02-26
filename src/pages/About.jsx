import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components";

export default function About(){
    return(
        <>
            <div style={{marginBottom:"50px" , width: "100%"}} >
                <div className="flex flex-col items-end justify-start w-auto md:w-full">
                <div className="h-[620px] outline outline-blue-100 md:px-5 relative w-full">
                    <div className="h-[620px] m-auto w-full">
                        <div className="absolute flex flex-col md:gap-10 gap-[60px] items-start justify-start left-[5%] top-[13%] w-auto">
                            <div className="flex flex-col items-start justify-start w-auto md:w-full">
                            <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                                <Text
                                className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-auto"
                                size="txtMontserratSemiBold40"
                                >
                                Simplify Your Finances, Amplify Your Life
                                </Text>
                                <Text
                                style={{marginLeft:"-200px"}}
                                className="text-blue_gray-600 text-xl"
                                size="txtMontserratMedium20"
                                >
                                <>
                                    Embark on your financial journey with CreditSea.
                                    We&#39;re here to <br />
                                    support your needs & dreams.
                                </>
                                </Text>
                            </div>
                            </div>
                            <div className="flex md:flex-col flex-row gap-10 items-start justify-start w-auto md:w-full">
                            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                <Button
                                className="flex h-[54px] items-center justify-center w-[54px]"
                                shape="circle"
                                size="sm"
                                >
                                <Img
                                    className="h-7"
                                    src="images/img_boltfill0wght.svg"
                                    alt="boltfill0wght"
                                />
                                </Button>
                                <Text
                                className="text-base text-gray-900"
                                size="txtMontserratRomanSemiBold16"
                                >
                                <>
                                    Transfer to <br />
                                    bank in seconds
                                </>
                                </Text>
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                <Button
                                className="flex h-[54px] items-center justify-center w-[54px]"
                                shape="circle"
                                size="sm"
                                >
                                <Img
                                    className="h-7"
                                    src="images/img_paymentsfill0.svg"
                                    alt="paymentsfillZero"
                                />
                                </Button>
                                <Text
                                className="text-base text-gray-900"
                                size="txtMontserratRomanSemiBold16"
                                >
                                <>
                                    Cash without
                                    <br />
                                    collateral
                                </>
                                </Text>
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-start w-auto">
                                <Button
                                className="flex h-[54px] items-center justify-center w-[54px]"
                                shape="circle"
                                size="sm"
                                >
                                <Img
                                    className="h-7"
                                    src="images/img_timerfill0wgh.svg"
                                    alt="timerfill0wgh"
                                />
                                </Button>
                                <Text
                                className="text-base text-gray-900"
                                size="txtMontserratRomanSemiBold16"
                                >
                                <>
                                    Repay in <br />
                                    3-36 months
                                </>
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
                                Get Started Now
                            </div>
                            </Button>
                        </div>
                        <div className="absolute h-[620px] inset-y-[0] my-auto right-[0] w-[36%] sm:w-full">
                            <Img
                            className="h-[620px] m-auto object-cover w-full"
                            src="images/img_pexelsurielmont6280953.png"
                            alt="pexelsurielmont"
                            />
                            <Img
                            className="absolute bottom-[35%] h-[54px] left-[11%] rounded-[10px]"
                            src="images/img_vector20.svg"
                            alt="vectorTwenty"
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-[7%] flex flex-row gap-4 items-center justify-center left-[5%] w-auto">
                        <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                            className="text-[22px] text-blue_gray-700 sm:text-lg md:text-xl w-auto"
                            size="txtMontserratBold22"
                            >
                            500k +
                            </Text>
                            <Text
                            className="text-blue_gray-600 text-xs w-auto"
                            size="txtMontserratSemiBold12"
                            >
                            Active Users
                            </Text>
                        </div>
                        <Line className="bg-indigo-50 h-[50px] w-px" />
                        <div className="flex flex-col gap-2 items-start justify-start w-auto">
                            <div className="flex relative w-[78px]">
                            <div className="flex my-auto w-[77%]">
                                <div className="flex my-auto w-[70%]">
                                <Img
                                    className="h-6 my-auto rounded-[50%] w-6"
                                    src="images/img_ellipse3.png"
                                    alt="ellipseThree"
                                />
                                <Img
                                    className="h-6 ml-[-6px] my-auto rounded-[50%] w-6 z-[1]"
                                    src="images/img_ellipse4.png"
                                    alt="ellipseFour"
                                />
                                </div>
                                <Img
                                className="h-6 ml-[-6px] my-auto rounded-[50%] w-6 z-[1]"
                                src="images/img_ellipse5.png"
                                alt="ellipseFive"
                                />
                            </div>
                            <Img
                                className="h-6 ml-[-6px] my-auto rounded-[50%] w-6 z-[1]"
                                src="images/img_ellipse6.png"
                                alt="ellipseSix"
                            />
                            </div>
                            <Text
                            className="text-blue_gray-600 text-xs w-auto"
                            size="txtMontserratSemiBold12"
                            >
                            Used our services
                            </Text>
                        </div>
                        <Line className="bg-indigo-50 h-[50px] w-px" />
                        <div className="flex flex-col items-start justify-start w-auto">
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <a
                                href="javascript:"
                                className="text-[22px] text-blue-900_01 sm:text-lg md:text-xl w-auto"
                            >
                                <Text size="txtMontserratBold22Blue90001">FAQs</Text>
                            </a>
                            <Img
                                className="h-6 w-6"
                                src="images/img_arrowforwardf.svg"
                                alt="arrowforwardf"
                            />
                            </div>
                            <Text
                            className="text-blue_gray-600 text-xs w-auto"
                            size="txtMontserratSemiBold12"
                            >
                            Get Answers Here!
                            </Text>
                        </div>
                    </div>
                    <div className="absolute bg-white-A700 border-2 border-solid flex flex-col font-plusjakartasans items-center justify-start p-6 sm:px-5 right-1/4 rounded-[20px] shadow-bs top-[40%] white_A700_white_A700_00_border">
                        <Text
                            className="leading-[150.00%] text-base text-gray-900"
                            size="txtPlusJakartaSansRomanBold16"
                        >
                            <span className="text-green-900 font-montserrat text-left text-lg font-bold">
                            <>
                                ₹1,00,000
                                <br />
                            </>
                            </span>
                            <span className="text-blue_gray-600 font-montserrat text-left font-semibold">
                            Credit Received
                            </span>
                        </Text>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
