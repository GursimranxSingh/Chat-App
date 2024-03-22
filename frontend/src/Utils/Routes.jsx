import SignIn from "../Components/Login/login";
import Signup from "../Components/Signup/signup";
import Home from "../Components/home/home";

const routing = [
  { path: "signup", element: <Signup /> },
  { path: "/", element: <SignIn /> },
  { path: "home", element: <Home /> },
];

export default routing;
