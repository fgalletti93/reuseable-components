import { useNavigation } from "../hooks/useNavigation";

export const Route = ({ path, children }) => {
  const {currentPath} = useNavigation();


  if(path === currentPath) {
    return children;
  }

  return null
};
