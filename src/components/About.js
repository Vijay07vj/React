import { useContext } from "react";
import User from "./User";
import UserContext from "../utils/UserContext";
// import UserClass from "./UserClass";
const About = () => {
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);
  return (
    <div>
      <h1>ABOUT US</h1>
      <h2>This a React App Project</h2>
      <User name={"Functional Component"} />
      {/* <UserClass name={"Vijay (CLass)"} /> */}
      <h2 className="font-bold">{loggedInUser}</h2>
    </div>
  );
};

export default About;
