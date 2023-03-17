import PropTypes from "prop-types";

export const Button = ({
  children,
  rounded,
  outline,
  primary,
  secondary,
  success,
  warning,
  danger,
}) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  checkPurposeValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error("Ivalid list of props, please choose one purpose");
    }
  },
};
