// App.js
import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import CategoryList from './Router/CategoryList';
import CategoryDetails from './Router/CategoryDetails';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={CategoryList} />
        <Route path="/category/:id" component={CategoryDetails} />
      </div>
    </Router>
  );
}

export default App;
