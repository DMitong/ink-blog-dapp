import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailsPage";
import CreatePostPage from "./pages/CreatePost";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const router = createBrowserRouter([
    {
            path: "/",
            element: <Homepage />,
        },
        {
            path: "/posts/:postId",
            element: <PostDetailPage />,
        },
        {
          path: "/create-post",
          element: <CreatePostPage />,
        },
    ]);
  return (
    <div className="App">
            <Header />
            <main className="mt-10">
                <RouterProvider router={router} />
            </main>
            <ToastContainer />
        </div>
  );
}

export default App;
