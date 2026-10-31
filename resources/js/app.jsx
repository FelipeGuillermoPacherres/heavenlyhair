import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    return (
        <div style={{ padding: '40px' }}>
            <h1>Heavenly Hair Salon</h1>
            <p>Laravel + React funcionando 🚀</p>
        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById('root')
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
