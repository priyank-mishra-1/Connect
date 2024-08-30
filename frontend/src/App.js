import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import CreatePost from "./components/CreatePost.jsx";
import Profile from "./pages/Profile.jsx";
// import HomeLogo from "./components/HomeLogo";
// import Navbar from "./components/Navbar";
import Notifications from "./components/Notifications.jsx";
import AuthProtector from "./RouteProtectors/AuthProtector.jsx";
import LoginProtector from "./RouteProtectors/LoginProtector.jsx";
import Chat from "./pages/Chat.jsx";
import CreateStory from "./components/CreateStory.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <AuthProtector>
              <Home />
            </AuthProtector>
          }
        />
        <Route
          path="/landing"
          element={
            <LoginProtector>
              {" "}
              <LandingPage />{" "}
            </LoginProtector>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <AuthProtector>
              <Profile />
            </AuthProtector>
          }
        />
        <Route
          path="/chat"
          element={
            <AuthProtector>
              <Chat />
            </AuthProtector>
          }
        />
      </Routes>

      <CreatePost />
      <CreateStory />
      <Notifications />
    </div>
  );
}

export default App;
