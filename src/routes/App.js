import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Videos from '../container/Videos';
import Contact from '../container/Contact';
import Blog from '../container/Blog';
import Home from '../container/Home';
import NotFound from '../container/NotFound';

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/El-de-los-Minutos-Page/" component={Home}/>
                    <Route exact path="/El-de-los-Minutos-Page/videos" component={Videos}/>
                    <Route exact path="/El-de-los-Minutos-Page/contact" component={Contact}/>
                    <Route exact path="/El-de-los-Minutos-Page/blog" component={Blog}/>
                    <Route exact path="/El-de-los-Minutos-Page/blog/:id" component={Blog}/>

                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App;