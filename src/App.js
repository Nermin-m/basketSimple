import React from 'react';
import Header from "./header";
import Box from "./box";
import { fruit } from "./data";

function App() {
    return (
        <div style={{ margin: '0', padding: '0' }}>
            <Header></Header>
            <div style={{display:'flex',gap:'30px',justifyContent:'center'}}>
            {fruit.map((item, index) => (
                <Box key={index} data={item}></Box>
            ))}
            </div>
        </div>
    );
}

export default App;
