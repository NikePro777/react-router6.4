import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./hoc/AuthProvider";
import RequireAuth from "./hoc/RequireAuth";
import About from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            }
          />
          <Route path="about" element={<About />}>
            <Route path="contacts" element={<p>Our contacts</p>}></Route>
            <Route path="team" element={<p>Our team</p>}></Route>
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
