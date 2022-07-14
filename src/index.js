import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Test from './Test';
import Cards from './Cards';
import Home from './Home';
import ViewCard from './ViewCard';
import Ternary from './Ternary';
import Toggle from './Toggle';
import Meme from './Meme';
import Increment from './Increment';
import SearchFilter from './SearchFilter';
import Api from './Api';
import Firebase from './Firebase';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <div className="container">
            <Navbar />
        </div>
        
        <Routes>
            <Route path="*" element="404"></Route>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/cards/:cardId" element={<ViewCard />} />
            <Route path="/ternary" element={<Ternary />} />
            <Route path="/toggle" element={<Toggle />} />
            <Route path="/meme" element={<Meme />} />
            <Route path="/increment" element={<Increment />} />
            <Route path="/search-filter" element={<SearchFilter />} />
            <Route path="/api" element={<Api />} />
            <Route path="/firebase" element={<Firebase />} />
        </Routes>
    </BrowserRouter>
);
