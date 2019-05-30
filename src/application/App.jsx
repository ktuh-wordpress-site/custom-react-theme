import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../includes/Header.jsx';
import Footer from '../includes/Footer.jsx';
import Home from "../home/Home.jsx";
import Landing from '../home/Landing.jsx';
import ReviewPage from '../reviews/ReviewPage.jsx';
import ReviewList from "../reviews/ReviewList.jsx";
import NewsPage from "../news/NewsPage.jsx";
import NewsList from "../news/NewsList.jsx";
import NotFound from './NotFound.jsx';
import PagesItem from '../pages/PagesItem.jsx';
import { default as siteInfo } from '../utils/config';

class App extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    return <BrowserRouter basename={siteInfo.siteUrl.match(/\/[a-z-]*\/?$/)[0]}>
      <div className='container'>
        {new RegExp('^' + siteInfo.siteUrl + '/?$').test(window.location.href) &&
        [<Landing key='landing' />,
          <div className='spacer-lg' key='lg'/>] ||
        <div className='spacer-sm' key='sm' />}
        <Header />
        <div id="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path={["/reviews/:slug", "/review/:slug"]} component={ReviewPage}/>
            <Route exact path={["/reviews", "/review"]} component={ReviewList}/>
            <Route exact path={["/radioblog/:slug", "/news/:slug"]} component={NewsPage}/>
            <Route exact path={["/radioblog", "/news"]} component={NewsList} />
            <Route path="/not-found" component={NotFound}/>
            <Route path='/:slug' component={PagesItem} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    <Footer />
    </BrowserRouter>;
  }
}

export default App;
