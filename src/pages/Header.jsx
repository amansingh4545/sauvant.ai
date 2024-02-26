import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, Line, Text } from "components";
import "./Header.css";

function Header(){
    return (
        <>
        <header className="H1">
          <div className="H2">
            <div className="H3">
              <Img className="H4" src="images/img_creditsea1.png" alt="creditseaOne" />
              <div className="H5">
                <Text className="H6" size="txtMories24" > CREDITSEA </Text>
                <Text className="H7" size="txtMories24"> TRUST. COMFORT. PROSPER </Text>
              </div>
            </div>
            <div className="md:ml-[0] ml-[165px]">
              <div className="H8">
                  <Link to="#" > Home</Link>
                  <Link to="#" > How It Works</Link>
                  <Link to="#" > Why CREDITSEA</Link>
                  <Link to="#" > Blog</Link>
              </div>
            </div>
            <Link to="#" className="H9"> Login/Signup </Link>
            <div className="flex flex-col font-montserrat items-center justify-start ml-6 md:ml-[0] w-auto">
              <Button className="H10" color="blue_900" variant="outline" > Get the App </Button>
            </div>
          </div>
        </header>
        </>
    )
}

export default Header;