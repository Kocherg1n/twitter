import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {normalize} from 'styled-normalize';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

 
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    }
    
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  h1, h2, h3, h4, h5 {
    margin: 0;
  }

 `

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle/>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
