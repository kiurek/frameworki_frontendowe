import { FC } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Contacts } from './components/Routes/Contacts/contacts';
import { FAQ } from './components/Routes/FAQ/faq';
import { Home } from "./components/Routes/Home/home";
import { Posts } from "./components/Routes/Posts/posts";
import styled from "styled-components"
import { Menu } from './components/Common/Menu';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Link to="posts">Posts</Link>
        <Link to="/">Home</Link>
        <Link to="contacts">Contacts</Link>
        <Link to="faq">FAQ</Link>
      </Wrapper>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route index element={<Home />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='faq' element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  )
}