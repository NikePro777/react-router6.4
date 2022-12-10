import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./hoc/AuthProvider";
import RequireAuth from "./hoc/RequireAuth";
import About from "./pages/AboutPage";
import BlogPage, { blogLoader } from "./pages/BlogPage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SinglePage, { postLoader } from "./pages/SinglePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="posts"
        element={<BlogPage />}
        loader={blogLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="posts/:id" element={<SinglePage />} loader={postLoader} />
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
  )
);
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
