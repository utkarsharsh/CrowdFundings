
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      AboutPage
    </div>
  )
}

export default AboutPage
