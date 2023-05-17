import { Route, Switch } from 'react-router-dom';
import Menu from './components/Navigation';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import HeroDetails from './components/HeroDetails';
import { Provider } from 'react-redux';
import {store,persistor} from './store';
import './index.scss';
import { PersistGate } from 'redux-persist/integration/react'
function App() {
  return (
    <>
    <Menu/>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Switch>
   <Route exact path="/heroes" component={Heroes}/>
   <Route exact path="/dashboard" component={Dashboard}/>
   <Route exact path="/" component={Dashboard}/>
   <Route exact path='/detail/:id' component={HeroDetails}/>
   </Switch>
   </PersistGate>
   </Provider>
   </>
  );
}

export default App;
