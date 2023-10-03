import React from 'react';
import Header from './components/Shared/Header/Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Details from './components/pages/Details/Details';
import Donation from './components/pages/Donation/Donation';
import Statistics from './components/pages/Statistics/Statistics';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <div>
        <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/donate/:id" element={<Details></Details>}></Route>
        <Route path="/Donation" element={<Donation></Donation>}></Route>
        <Route path="/Statistics" element={<Statistics></Statistics>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
};

export default App;