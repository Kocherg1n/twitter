import React from 'react';
import styled from 'styled-components';
import { Nav } from './components/Nav';

const SHomeLayout = styled.div`
  max-width: 1280px;
  margin: 0 auto;height: 100vh;
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "header main";
`

const SHomeSideBar = styled.aside`
  padding: 10px;
`

const SHomeMain = styled.main`
  background: darksalmon;
`

export const Home: React.FC = (): React.ReactElement => {
    return (
        <SHomeLayout>
            <SHomeSideBar id='sidebar'>
                <Nav/>
            </SHomeSideBar>
            <SHomeMain id='main'>

            </SHomeMain>
        </SHomeLayout>
    );
};

