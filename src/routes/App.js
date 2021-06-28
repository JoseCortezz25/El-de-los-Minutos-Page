import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Videos from '../container/Videos';
import Contact from '../container/Contact';
import Home from '../container/Home';
import NotFound from '../container/NotFound';

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/videos" component={Videos}/>
                    <Route exact path="/contact" component={Contact}/>

                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App;