import './App.css';
import Header from './components/Header/Header';
import HomeContainer from './components/HomeContainer/HomeContainer';
import ProfileContainer from './components/ProfileContainer/ProfileContainer';
import {Route, Switch} from "react-router-dom";
import NavSection from './components/NavSection/NavSection';
import React from 'react';

// These imports can be used for animated routing
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import {AnimatedSwitch} from 'react-router-transition';


const App = () => {
    return (
        <div className='App'>
          <Header />
          <NavSection />
          <div className='App-container'>
              <Switch>
                  <Route exact path='/' component={HomeContainer} />
                  <Route path='/user/:userId' component={ProfileContainer} />
              </Switch>
          </div>
        </div>
   )
}

// Uncomment this part of code and comment the previous one to enable animated transitions
// Using of animated transition with the help of 2 chosen libraries caused some bag connected to the double
// server requests on each tab click

// const App = () => {
//     return (
//         <div className='App'>
//             <Header />
//             <NavSection />
//             <div className='App-container'>
//                 <Route render={({location}) => (
//                     <TransitionGroup>
//                         <CSSTransition
//                             key={location.key}
//                             timeout={450}
//                             classNames="fade"
//                         >
//                             <Switch>
//                                 <Route exact path='/' component={HomeContainer} />
//                                 <Route path='/user/:userId' component={ProfileContainer} />
//                             </Switch>
//                         </CSSTransition>
//                     </TransitionGroup>
//                 )} />
//             </div>
//         </div>
//     )
// }

export default App;
