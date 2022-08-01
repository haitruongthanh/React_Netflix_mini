import "./app.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  let user = useSelector((state) => state.userSlice.userInfo);
  // console.log(user);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
          <Route path="/register" element={<Register />} />
          <Route path="/watch/:id">
            <Watch />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
