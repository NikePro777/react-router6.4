import { Outlet, Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>This page about router-dom</p>
      <ul>
        <li>
          <Link to="contacts">Our contacts</Link>
        </li>
        <li>
          {" "}
          <Link to="team">Our team</Link>
        </li>
      </ul>
      <Outlet />
      {/* <Routes>
        <Route path="contacts" element={<p>Our contacts</p>}></Route>
        <Route path="team" element={<p>Our team</p>}></Route>
      </Routes> */}
    </div>
  );
};

export default About;
