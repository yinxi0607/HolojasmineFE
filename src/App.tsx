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
    height: "12vh",
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
    const handleEmailClick = () => {
        const email = 'info@holojasmine.com';
        const subject = 'Hello';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.open(mailtoLink);
    };
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Layout>
            <Header style={headerStyle}>
                <a href="https://www.instagram.com/your_instagram_account" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined style={{position: 'absolute',top: '1.5vh',right: '2.5vw',}}/>
                </a>
            </Header>
            <Content style={contentStyle}>
                <div style={containerStyle}>
                    <div className="CenterEnglish">
                        FROM NO THINGS COMES A GREAT MULTITUDE

                    </div>
                    <div className="CenterChinese">
                        ⽆中⽣有 万物盈天
                    </div>
                </div>

            </Content>
            <Footer style={footerStyle}>
                <div className="ComeWithUs">
                    COME WITH US
                </div>
                <div
                    className={`Email ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleEmailClick}
                >
                    info@holojasmine.com
                </div>
                <div className="City">
                    BEIJING / SHANGHAI / HONGKONG / TAIBEI / JAKARTA / TOKYO / BANGKOK  / SEOUL
                </div>
            </Footer>
        </Layout>
    )
};

export default HomePage;
