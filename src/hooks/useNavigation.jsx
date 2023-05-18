import { useContext } from "react";
import NavigationContext from "../context/navigations";

export const useNavigation = () => {
  return useContext(NavigationContext)

}