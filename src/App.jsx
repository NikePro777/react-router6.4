import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="posts/new" element={<CreatePost />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
