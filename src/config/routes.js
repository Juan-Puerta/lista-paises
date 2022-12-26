import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ViewHome from "../pages/ViewHome/ViewHome";

const routing = (
  <Router>
    <Routes>
      <Route exact path="/" element={<ViewHome />} />
    </Routes>
  </Router>
);

export default routing;
