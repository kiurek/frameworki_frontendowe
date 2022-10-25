import React, { FC } from 'react'
import styled from 'styled-components'
import { Menu } from './Menu'       

export const Wrapper = styled.div` 
    background-color: #ebe834;
    width: 100%;
    margin: 0;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 17px;
    column-gap: 12%;
`

const Content = styled.div `
    width: 1024px;
    margin: 0 auto;
    background: black;
`

interface IProps {
    children: React.ReactNode
}

export const Layout: FC<IProps> = (props) => {
    return (
        <Content>
            <Wrapper>
                <Content>{props.children}</Content>
            </Wrapper>
        </Content>
    )
}
