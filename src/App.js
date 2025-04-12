import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./controllers/redux_store/store";

// Lazy load components
const Home = lazy(() => import("./controllers/Home/component"));
const Login = lazy(() => import("./components/Login"));

// Loading component
const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home/*" element={<Home />} />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
