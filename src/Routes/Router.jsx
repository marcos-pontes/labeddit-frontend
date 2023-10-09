import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../Pages/Login";
import Signup from "../Pages/Signup/index";
import FeedPage from "../Pages/Feed/Feed";
import { ErrorPage } from "../ErrorPage";
import { AnimatePresence } from "framer-motion";
import CommentsPage from "../Pages/Feed/comments/Comments";

const AppRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/feed/comments/:postId" element={<CommentsPage />} />
        /* <Route path="*" element={<ErrorPage />} /> */
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
