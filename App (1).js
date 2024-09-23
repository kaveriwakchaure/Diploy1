import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsList from './components/ProductsList';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <ProductsList />
            </main>
            <Footer />
        </div>
    );
}

export default App;
