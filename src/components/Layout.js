import { Footer } from "./Footer"
import { NavBar } from "./NavBar"


export const Layout = ({ children }) => {
  return (
    <div className="container">
      <NavBar children={children}/>

      <Footer />
    </div>
  );
}