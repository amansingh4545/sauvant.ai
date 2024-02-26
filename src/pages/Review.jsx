import React from "react";
import { Link } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

export default function Review(){
    return(
        <>
            <div style={{width:"90%", margin:"auto" , marginTop: "60px"}} className="bg-white-A700 flex flex-col gap-10 items-center justify-start max-w-[1438px] md:px-10 px-20 sm:px-5 py-[100px] w-full">
            <h1 style={{fontSize:"30px", fontWeight:"bold" , marginTop: "60px"}}>Here’s what people are saying about CREDITSEA</h1>
            <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-7xl mx-auto w-full">
              <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-8 sm:px-5 rounded-[16px] shadow-bs1 w-full">
                  <Text  style={{fontSize: "1.1rem"}} className="max-w-[341px] md:max-w-full text-base text-gray-900" >
                    Lorem ipsum dolor sit amet consectetur. Enim at porttitor
                    nisi dui dignissim. Mattis ut mauris tincidunt viverra.
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img className="h-14 md:h-auto rounded-[50%] w-14" src="images/img_avatarimage.png" alt="avatarimage" />
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm tracking-[0.28px] w-auto" style={{fontWeight: "bold"}} >
                        Danny
                      </Text>
                      <Input
                        placeholder="4.5"
                        className="font-medium p-0 placeholder:text-gray-900 text-gray-900 text-left text-sm w-full"
                        wrapClassName="flex w-[47%]"
                        prefix={
                          <Img
                            className="mt-auto mb-px h-[18px] mr-1" src="images/img_starfill0wght400grad0opsz24_1.svg" alt="star_FILL0_wght400_GRAD0_opsz24 1"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-8 sm:px-5 rounded-[16px] shadow-bs1 w-full">
                  <Text style={{fontSize: "1.1rem"}} className="max-w-[341px] md:max-w-full text-base text-gray-900" >
                    Lorem ipsum dolor sit amet consectetur. Enim at porttitor
                    nisi dui dignissim. Mattis ut mauris tincidunt viverra.
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img className="h-14 md:h-auto rounded-[50%] w-14" src="images/img_avatarimage_56x56.png" alt="avatarimage" />
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm tracking-[0.28px] w-auto" style={{fontWeight: "bold"}} >
                        Alice
                      </Text>
                      <Input
                        placeholder="4.5"
                        className="font-medium p-0 placeholder:text-gray-900 text-gray-900 text-left text-sm w-full"
                        wrapClassName="flex w-[47%]"
                        prefix={
                          <Img
                            className="mt-auto mb-px h-[18px] mr-1" src="images/img_starfill0wght400grad0opsz24_1.svg" alt="star_FILL0_wght400_GRAD0_opsz24 1"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-8 sm:px-5 rounded-[16px] shadow-bs1 w-full">
                  <Text style={{fontSize: "1.1rem"}} className="max-w-[341px] md:max-w-full text-base text-gray-900" >
                    Lorem ipsum dolor sit amet consectetur. Enim at porttitor
                    nisi dui dignissim. Mattis ut mauris tincidunt viverra. Lorem ipsum dolor sit amet consectetur.
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img className="h-14 md:h-auto rounded-[50%] w-14" src="images/img_avatarimage_1.png" alt="avatarimage" />
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm tracking-[0.28px] w-auto" style={{fontWeight: "bold"}} >
                        Aman singh
                      </Text>
                      <Input
                        placeholder="4.5"
                        className="font-medium p-0 placeholder:text-gray-900 text-gray-900 text-left text-sm w-full"
                        wrapClassName="flex w-[47%]"
                        prefix={
                          <Img
                            className="mt-auto mb-px h-[18px] mr-1" src="images/img_starfill0wght400grad0opsz24_1.svg" alt="star_FILL0_wght400_GRAD0_opsz24 1"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-8 sm:px-5 rounded-[16px] shadow-bs1 w-full">
                  <Text style={{fontSize: "1.1rem"}} className="max-w-[341px] md:max-w-full text-base text-gray-900" >
                    Lorem ipsum dolor sit amet consectetur. Enim at porttitor
                    nisi dui dignissim. Mattis ut mauris tincidunt viverra. Lorem ipsum dolor sit amet consectetur.
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img className="h-14 md:h-auto rounded-[50%] w-14" src="images/img_avatarimage_2.png" alt="avatarimage" />
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm tracking-[0.28px] w-auto" style={{fontWeight: "bold"}} >
                        Vilash
                      </Text>
                      <Input
                        placeholder="4.5"
                        className="font-medium p-0 placeholder:text-gray-900 text-gray-900 text-left text-sm w-full"
                        wrapClassName="flex w-[47%]"
                        prefix={
                          <Img
                            className="mt-auto mb-px h-[18px] mr-1" src="images/img_starfill0wght400grad0opsz24_1.svg" alt="star_FILL0_wght400_GRAD0_opsz24 1"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-8 sm:px-5 rounded-[16px] shadow-bs1 w-full">
                  <Text style={{fontSize: "1.1rem"}} className="max-w-[341px] md:max-w-full text-base text-gray-900" >
                    Lorem ipsum dolor sit amet consectetur. Enim at porttitor
                    nisi dui dignissim. Mattis ut mauris tincidunt viverra.
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img className="h-14 md:h-auto rounded-[50%] w-14" src="images/img_avatarimage_3.png" alt="avatarimage" />
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm tracking-[0.28px] w-auto" style={{fontWeight: "bold"}} >
                        Kaushik Roy
                      </Text>
                      <Input
                        placeholder="4.5"
                        className="font-medium p-0 placeholder:text-gray-900 text-gray-900 text-left text-sm w-full"
                        wrapClassName="flex w-[47%]"
                        prefix={
                          <Img
                            className="mt-auto mb-px h-[18px] mr-1" src="images/img_starfill0wght400grad0opsz24_1.svg" alt="star_FILL0_wght400_GRAD0_opsz24 1"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-8 sm:px-5 rounded-[16px] shadow-bs1 w-full">
                  <Text style={{fontSize: "1.1rem"}} className="max-w-[341px] md:max-w-full text-base text-gray-900" >
                    Lorem ipsum dolor sit amet consectetur. Enim at porttitor
                    nisi dui dignissim. Mattis ut mauris tincidunt viverra.
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Img className="h-14 md:h-auto rounded-[50%] w-14" src="images/img_avatarimage_4.png" alt="avatarimage" />
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm tracking-[0.28px] w-auto" style={{fontWeight: "bold"}} >
                        Joy
                      </Text>
                      <Input
                        placeholder="4.5"
                        className="font-medium p-0 placeholder:text-gray-900 text-gray-900 text-left text-sm w-full"
                        wrapClassName="flex w-[47%]"
                        prefix={
                          <Img
                            className="mt-auto mb-px h-[18px] mr-1" src="images/img_starfill0wght400grad0opsz24_1.svg" alt="star_FILL0_wght400_GRAD0_opsz24 1"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
