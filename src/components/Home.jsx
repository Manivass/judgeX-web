import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store?.user);
  useEffect(() => {
    if (!userDetails?.data) {
      navigate("/login");
    }
  }, [userDetails]);
  return <div>Home</div>;
};

export default Home;
