import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import ManageServer from './more/manageServer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <App />
    <ManageServer/>
    </>
)
