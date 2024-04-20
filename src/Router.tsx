import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import PostListpage from "./pages/posts";
import PostDetailpage from "./pages/posts/detail";
import PostEditpage from "./pages/posts/edit";
import PostNewpage from "./pages/posts/new";
import ProfilePage from "./pages/profile";
import ProfileEditPage from "./pages/profile/edit";
import SearchPage from "./pages/search";
import LoginPage from "./pages/users/login";
import NotificationsPage from "./pages/notifications";
import SignupPage from "./pages/users/singup";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/posts" element={<PostListpage />}></Route>
            <Route path="/posts/:id" element={<PostDetailpage />}></Route>
            <Route path="/posts/new" element={<PostNewpage />}></Route>
            <Route path="/posts/edit/:id" element={<PostEditpage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/profile/edit" element={<ProfileEditPage />}></Route>
            <Route path="/notifications" element={<NotificationsPage />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="/users/login" element={<LoginPage />}></Route>
            <Route path="/users/signup" element={<SignupPage/>}></Route>
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
};

export default Router;