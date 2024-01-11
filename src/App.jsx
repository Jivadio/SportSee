import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import UserInformation from "./components/UserInformation";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
