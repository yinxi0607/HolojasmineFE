import React from 'react';
import {Layout } from "antd";
import {Content, Header, Footer} from "antd/es/layout/layout";
import {InstagramOutlined} from "@ant-design/icons"
import "./App.css"

const headerStyle: React.CSSProperties = {
    // textAlign: 'center',
    // // color: '#fff',
    height: "12vh",
    paddingInline: 50,
    // lineHeight: '64px',
    backgroundColor: 'white',
    fontSize: "2vw",
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: 'white',
    height: "15vh",
    // fontSize: "2vw",
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: '#fff',
    marginTop: "-8vh",
    height: "76vh",
};

const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // 设置为左对齐
    textAlignLast: "justify",
    textAlign: "justify"
};

//
// const instagramIconStyle: React.CSSProperties = {
//     fontSize: '1.5vw',
//     position: 'absolute',
//     top: '0.5vh',
//     right: '1vw',
// };

const HomePage: React.FC = () => {
    return (
        <Layout>
            <Header style={headerStyle}>
                <a href="https://www.instagram.com/your_instagram_account" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined style={{position: 'absolute',top: '1.5vh',right: '2.5vw',}}/>
                </a>
            </Header>
            <Content style={contentStyle}>
                <div style={containerStyle}>
                    <div style={{
                        fontSize: "2vw", fontFamily: "SpaceMonoBold",width:"50vw"
                    }}>
                        FROM NO THINGS COMES A GREAT MULTITUDE

                    </div>
                    <div style={{
                        marginTop: '2vh', fontSize: '2vw', fontFamily: "SourceHanMonoBold",width:"50vw"
                        // letterSpacing: '5vh'
                    }}>
                        ⽆中⽣有 万物盈天
                    </div>
                </div>

            </Content>
            <Footer style={footerStyle}>
                <div style={{marginTop:"-15vh", fontSize:"2.2vw",fontFamily:"SourceHanMonoRegular"}}>
                    COME WITH US
                </div>
                <div style={{marginTop:"1vh", fontSize:"1vw",fontFamily:"SpaceMonoBold"}}>
                    info@holojasmine.com
                </div>
                <div style={{marginTop:"10vh", fontSize:"1vw",marginBottom:"-10vh",fontFamily:"SourceHanMonoBold"}}>
                    BEIJING / SHANGHAI / HONGKONG / TAIBEI / JAKARTA / TOKYO / BANGKOK  / SEOUL
                </div>
            </Footer>
        </Layout>
    )
};

export default HomePage;
