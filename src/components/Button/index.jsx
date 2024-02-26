import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" };
const variants = {
  outline: { blue_900: "border border-blue-900 border-solid text-blue-900" },
  fill: {
    white_A700: "bg-white-A700 text-blue-900_01",
    blue_900_01: "bg-blue-900_01 text-white-A700",
    gray_50: "bg-gray-50",
    white_A700_26: "bg-white-A700_26",
  },
};
const sizes = { xs: "p-[11px]", sm: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "fill",
  color = "gray_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_900",
    "white_A700",
    "blue_900_01",
    "gray_50",
    "white_A700_26",
  ]),
};

export { Button };
