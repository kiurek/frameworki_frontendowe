import { FC } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { stackColor } from '../styledHelpers/colors';
import { SomeSpan } from './Components';
import { GlobalStyle } from "../styledHelpers/global";
import { Wrapper } from "./Layout";

const SecondSpan = styled(SomeSpan)`
    border:3px solid yellow;
`;

const ExampleDiv = styled.div<{ isActive: boolean }>`
    background:yellow;
    ${props => props.isActive && css`
        background:blue;
    `}
`;


export const Menu: FC = () => {
    return (
        <Wrapper>
            <Link to="/">Home</Link>
            <Link to="posts">Posts</Link>
            <Link to='contacts'>Contacts</Link>
            <Link to='faq'>FAQ</Link>
        </Wrapper>

    );
};