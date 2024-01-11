import { redirect } from "react-router-dom";

const Home = () => {
  redirect("/profile/1");
  return null;
};

export default Home;
