import getNavBarContent from "./../../utils/navUtil";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Reports() {
  let navigate = useNavigate();
  let location = useLocation();
  let navBarContent = getNavBarContent("reports");
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/reports");
    }
  }, []);

  return navBarContent;
}
