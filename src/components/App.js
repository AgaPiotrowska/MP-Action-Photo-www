import React from "react";

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Navigation from './Navigation';
import Main from './Main';
import Portfolio from "./Portfolio";
import '../styles/App.scss';
import Footer from "./Footer";
import BlogPage from "./BlogPage";
import VideoPage from "./VideoPage";
import About from "./About";
import RealizationsPage from "./Realizations";
import GalleryPage from "./GalleryPage";
import LoginComponent from "./LoginComponent";
import {useSelector} from "react-redux";

const App = () => {

    const isLogged = useSelector((state)=> state.isLogged);

    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/portfolio/:album" component={GalleryPage}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/blogpage" component={BlogPage}/>
                <Route path="/videopage" component={VideoPage}/>
                <Route path="/about" component={About}/>
                <Route path="/realizationspage" component={RealizationsPage}/>
                <Route path="/login" component={LoginComponent}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
)
};

export default App;