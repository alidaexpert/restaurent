import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Restaurent from './component/Restaurent/Restaurent';
import Header from './component/Header/Header';
import OrderReview from './component/OrderReview/OrderReview';
import Notfound from './component/NotFound/Notfound';
import OrderPage from './component/orderPage/OrderPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Restaurent></Restaurent>
        </Route>
        <Route path="/home">
        <Restaurent></Restaurent>
        </Route>
        <Route path="/restaurent">
          <Restaurent></Restaurent>
          </Route>
        <Route path="/meal/:mealId">
        <OrderReview></OrderReview>
        </Route>
        <Route path="/order">
          <OrderPage></OrderPage>
        </Route>
        <Route path="*">
<Notfound></Notfound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
