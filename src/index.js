import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div>
            <header>
                <h1>Homework #23. Redux</h1>
            </header>
            <main>
                <App/>
            </main>
            <footer>
                <h3>Homework #23</h3>
            </footer>
        </div>
    </React.StrictMode>
);