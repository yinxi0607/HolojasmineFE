import React from 'react';
import {Layout} from "antd";
import {Content, Header,Footer} from "antd/es/layout/layout";


const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    // color: '#fff',
    height: "5vh",
    paddingInline: 50,
    // lineHeight: '64px',
    backgroundColor: 'white',
    fontSize: "2vw",
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: 'white',
    height: "5vh",
    fontSize: "2vw",
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    // minHeight: "20vh",
    // lineHeight: '120px',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: '#fff',
    height: "88vh",

};

const HomePage: React.FC = () => {
    // const [lineIndex, setLineIndex] = useState(0);
    //
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setLineIndex((prevIndex) => (prevIndex + 1) % 20);
    //     }, 2000); // 每2秒切换一行
    //
    //     return () => clearInterval(interval);
    // }, []);
    //
    // const lines = [
    //     "Line 1",
    //     "Line 2",
    //     "Line 3",
    //     // ... 其他行 ...
    //     "Line 20",
    // ];
    // const handleReplay = () => {
    //     setLineIndex(0); // 重新设置行索引为0，从第一行开始滚动
    // };


    return (
        // <div>
        //     <button className="button" onClick={handleReplay}>
        //         RESET
        //     </button>
        //
        //
        //     <div style={{ overflow: 'hidden', height: '1.5em' }}>
        //         <div style={{ transform: `translateY(-${lineIndex * 1.5}em)` }}>
        //             {lines.map((line, index) => (
        //                 <div className="text" key={index}>{line}</div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
        // <div style={{ position: "absolute", justifyContent: "center", textAlign: "center", width: "100vw", height: "100vh", display: "flex", alignItems: "center", fontSize: "10vw" }}>
        //     Hello World!
        // </div>

        <Layout>
            <Header style={headerStyle}>这里添加一个大logo</Header>
            <Content style={contentStyle}>
                <div style={{
                    fontSize: "10vw"}}>
                     Hello World!
                </div>
                <div style={{ marginTop: '1vh', fontSize: '2vw' }}>Welcome to my website</div>
            </Content>
            <Footer style={footerStyle}>这里需要有一些超链接!</Footer>
        </Layout>

    )
};

export default HomePage;
