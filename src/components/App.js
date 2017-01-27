import React from 'react';

import styled from 'styled-components';

const App = (props) => {
    return (
        <Main className="App">
            {props.children}
        </Main>
    );
}

export default App;

const Main = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;
