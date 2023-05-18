import classNames from "classnames";
import { useNavigation } from "../hooks/useNavigation";

export const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames('text-blue-500', className,
  currentPath === to && activeClassName 
  );

  const handleClick = (event) => {
    if(!event.ctrlKey || !event.metaKey)
    event.preventDefault();

    navigate(to)
  };

  return (
    <a onClick={handleClick} href={to} className={classes}>
      {children}
    </a>
  );
};
