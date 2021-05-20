import "./App.css";
import { Navbar } from "./common/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import { PageNotFound } from "./PageNotFound";
import { ItemDetailPage } from "./components/ItemDetail/ItemDetailPage";

const Routers = () => (
  <>
    <Switch>
      <Route exact path="/" component={ItemDetailPage} />
      <Route component={PageNotFound} />
    </Switch>
  </>
);

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routers />
    </div>
  );
}

export default App;
