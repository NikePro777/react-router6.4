import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <header>
        {/* <a href="/">Home</a>  - так было с перезагрузкой страницы*/}
        {/* а теперь без нее, все тоже самое только линк и вместо хрефа - to */}
        <Link to="/">Home </Link> <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<BlogPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
