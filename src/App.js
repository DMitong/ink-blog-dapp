import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Homepage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailsPage";
import CreatePostPage from "./pages/CreatePost";

const App = () => {
  return (
    <Router>
      <UserProvider>
          <Route exact path="/" component={Homepage} />
          <Route path="/posts/:postId" component={PostDetailPage} />
          <Route path="/create-post" component={CreatePostPage} />
      </UserProvider>
    </Router>
  );
};

export default App;
