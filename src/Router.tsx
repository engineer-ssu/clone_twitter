import { Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<>e</>}></Route>
            <Route path="/posts" element={<>post</>}></Route>
            <Route path="/posts/:id" element={<>id</>}></Route>
            <Route path="/posts/new" element={<>New</>}></Route>
            <Route path="/posts/edit/:id" element={<>id</>}></Route>
            <Route path="/profile" element={<>id</>}></Route>
            <Route path="/profile/edit" element={<>id</>}></Route>
            <Route path="/notifications" element={<>id</>}></Route>
            <Route path="/search" element={<>id</>}></Route>
            <Route path="/users/login" element={<>id</>}></Route>
            <Route path="/users/signup" element={<>id</>}></Route>
            <Route path="/users/signup" element={<>id</>}></Route>
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
};

export default Router;