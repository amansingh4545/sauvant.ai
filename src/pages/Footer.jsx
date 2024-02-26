import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

import { Button, Img, Input, Line, Text } from "components";

function Footer(){
    return(
        <div className="F1" style={{width:"100%", margin:"auto"}}>
            <div className="F2">
              <div className="F3">
                <Img className="h-[72px] md:h-auto object-cover w-[80px]" src="images/img_creditsea1.png" alt="creditseaOne_One" />
                <div className="H_5">
                    <Text className="H_6" size="txtMories24" > CREDITSEA </Text>
                    <Text className="H_7" size="txtMories24"> TRUST. COMFORT. PROSPER </Text>
                </div>
              </div>

              <div className="font-montserrat h-[260px] sm:h-[521px] relative w-[77%] md:w-full">
                <div>
                  <Img className="absolute h-[260px] inset-y-[0] my-auto object-cover right-[0]" src="images/img_vector_light_blue_400_260x385.png" alt="vector_Two" />
                  <div style={{ marginLeft:"20px"}} className="absolute flex sm:flex-col flex-row sm:gap-10 gap-10 h-max inset-y-[0] items-start justify-between left-[0] my-auto w-auto">
                    <div style={{ marginRight:"30px"}} className="flex flex-col items-start justify-start">
                      <Text className="text-base text-white-A700" size="txtMontserratRomanBold16" >
                        Services
                      </Text>
                      <div style={{color: "white"}} className="flex flex-col gap-3 items-start justify-start w-auto">
                        <Link style={{marginTop: "16px"}} to="#">Lorem ipsum</Link>
                        <Link to="#">Lorem ipsum</Link>
                        <Link to="#">Lorem ipsum</Link>
                      </div>
                    </div>
                    <div style={{color: "white", marginRight:"30px"}} className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text className="text-base text-white-A700 w-auto" size="txtMontserratRomanBold16" >
                        Other Links
                      </Text>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <Link to="#">About Us</Link>
                        <Link to="#">Case Study</Link>
                        <Link to="#">Career</Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <a className="text-base text-white-A700">
                        <Text size="txtMontserratRomanBold16">Contact Us</Text>
                      </a>
                      <Text className="mt-[15px] text-sm text-white-A700" size="txtMontserratRomanMedium14WhiteA700" >
                        <>
                          Creditsea Technologies
                          <br />
                          4th Floor, D-39, Sector 2, Rohini
                          <br />
                          New Delhi - 201301
                        </>
                      </Text>
                      <a style={{color: "white", marginTop:"8px"}} href="#">Customercare@creditsea.com</a>
                      <Text
                        className="mt-[9px] text-sm text-white-A700"
                        size="txtMontserratRomanMedium14WhiteA700"
                      >
                        01140848286
                      </Text>
                    </div>
                    <div className="F6">
                      
                    </div>
                  </div>
                </div>
                <div className=" F7 absolute bottom-[19%] flex flex-col gap-4 items-center justify-start right-[14%] w-auto">
                  <Text className="text-base text-white-A700 w-auto" size="txtMontserratRomanBold16" >
                      App Store Links
                  </Text>
                  <div className="bg-white-A700 flex flex-col h-[54px] md:h-auto items-center justify-center sm:px-5 px-6 py-[9px] rounded-[10px] shadow-bs2 w-[244px]">
                    <Img
                      className="h-10 md:h-auto object-cover w-36"
                      src="images/img_image46.png"
                      alt="imageFortySix"
                    />
                  </div>
                  <div className=" bg-white-A700 flex flex-col h-[54px] md:h-auto items-center justify-center  rounded-[10px] shadow-bs2 w-[244px]">
                    <Img
                      className="h-10 md:h-auto object-cover w-[139px]"
                      src="images/img_image47.png"
                      alt="imageFortySeven"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
export default Footer;
