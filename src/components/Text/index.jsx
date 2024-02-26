import React from "react";

const sizeClasses = {
  txtMontserratMedium20: "font-medium font-montserrat",
  txtMontserratBold16: "font-bold font-montserrat",
  txtPlusJakartaSansRomanBold16: "font-bold font-plusjakartasans",
  txtMories24: "font-mories font-normal",
  txtMontserratMedium16WhiteA700: "font-medium font-montserrat",
  txtMontserratMedium16Black90099: "font-medium font-montserrat",
  txtMontserratSemiBold14: "font-montserrat font-semibold",
  txtMontserratBold24Black900: "font-bold font-montserrat",
  txtMontserratRomanBold20: "font-bold font-montserrat",
  txtMontserratSemiBold12: "font-montserrat font-semibold",
  txtMontserratRomanMedium14: "font-medium font-montserrat",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtMories24WhiteA700: "font-mories font-normal",
  txtMontserratBold22Blue90001: "font-bold font-montserrat",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
  txtMories12WhiteA700: "font-mories font-normal",
  txtMontserratMedium20WhiteA700: "font-medium font-montserrat",
  txtMontserratBold24: "font-bold font-montserrat",
  txtMontserratBold22: "font-bold font-montserrat",
  txtMontserratBold24Gray90001: "font-bold font-montserrat",
  txtMontserratRomanBold16: "font-bold font-montserrat",
  txtMories12: "font-mories font-normal",
  txtMontserratRomanBold14: "font-bold font-montserrat",
  txtMontserratBold20: "font-bold font-montserrat",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtMontserratRomanMedium14WhiteA700: "font-medium font-montserrat",
  txtMontserratRomanBold14Blue90001: "font-bold font-montserrat",
  txtMontserratSemiBold40: "font-montserrat font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
