import logo from './logo.svg';
import './App.css';
import SimpleButton from './components/simple-button';
import TimeNow from './components/time-now';
import Navigation from './components/navigation/navigation'
import { useState } from 'react';
import StyledComponent from './components/styled-component/styled-component'
import Form from './components/form/form'
import Popup from './components/popup/popup'

const menu = localStorage.getItem("menu") || 'main';

function App() {

  let [contentType, setContentType] = useState(menu);

  // for simple button
  function parentAppClick(name) {
    console.log('[click from parent to child]', name);
  }

  function navHandler(active) {
    setContentType(active);
    localStorage.setItem("menu", active);
  }

  const youtubeLink = 'https://youtu.be/kz23xxukY5s?list=PLGy5LxVRnVrkA6RTVX9hY6opN3QNWjRSp&t=11854';

  const content = {
    main: (
    <>
      <div>
        <h3>Main Page</h3>
        <p><a href={youtubeLink} rel="noreferrer" target='_blank'>React basic</a></p>
      </div>
    </>),
    simpleButton: (
      <>
      <SimpleButton name="simple1" clickHandler={() => parentAppClick('simple -1-')} />
      <SimpleButton name="simple2" clickHandler={() => parentAppClick('simple #2#')}/>
      </>),
    useState: (<TimeNow />),
    styledComponent: (<StyledComponent />),
    form: (<h2><Form /></h2>),
    popup: (<Popup />)
  }

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <TimeNow />
        <Navigation handler={navHandler} />

        <div className="container">
          {!contentType && <h1>404</h1>}
          {contentType && content[contentType]}
        </div>
        
      </main>
    </div>
  );
}

export default App;
