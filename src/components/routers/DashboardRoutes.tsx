import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Sidebar } from "../Sidebar";

export const DashboardRoutes = () => {
  return (
    <Router>
      <div>
        <Route path="/sidebar" component={Sidebar} />
      </div>
    </Router>
  );
};
