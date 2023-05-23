import className from "classnames";

export const Button = ({
  children,
  rounded,
  outline,
  primary,
  secondary,
  success,
  warning,
  danger,
  ...rest
}) => {
  const classes = className(rest.className, "flex items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-400 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    'rounded-full': rounded,
    'bg-white': outline,
    "text-blue-600": primary && outline,
    "text-gray-900": secondary && outline,
    "text-green-600": success && outline,
    "text-yellow-400": warning && outline,
    "text-red-200": danger && outline,
  });

  return <button {...rest} className={classes}>{children}</button>;
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
