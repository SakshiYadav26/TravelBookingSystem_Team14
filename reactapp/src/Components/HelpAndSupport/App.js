import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactFormtwo from './Components/Reachus/reachus';
import Accordion from './Components/FAQ/faq';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="./Components/FAQ/faq" component={Accordion} />
          <Route path="./Components/Reachus/reachus" component={ContactFormtwo} />
        </Switch>
      </div>
    </Router>
  );
}
