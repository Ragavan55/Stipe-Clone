import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Content1 from './component/content1.jsx';
import Navbar from './component/navbar.jsx';
import Content2 from './component/content2.jsx';
import Content3 from './component/content3.jsx';
import Content4 from './component/content4.jsx';
import Content5 from './component/content5.jsx';

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="relative maindiv">
                {/* Animated Gradient Background */}
<div className="animated-gradient absolute top-0 left-0 w-full h-[70vh] -z-10 " />
                {/* Page Content */}
                <div className="relative z-10">
                    <Navbar />
                    <Content1 />
                    <Content2 />
                    <Content3 />
                    {/* <Content5/> */}
                </div>
            </div>
        </>
    );
}

export default App;