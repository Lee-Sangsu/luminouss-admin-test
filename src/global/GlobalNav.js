import React from'react';
import { Link, useHistory } from 'react-router-dom';


const GlobalNav = ({isFirstPage, isNotHome}) => {
    const onClick = () =>  {
        if (window.innerWidth > 500){
            document.getElementById("nav-menu").style.display = 'none';
            document.getElementById("header-nav").style.zIndex = '10';
            document.getElementById("menu-container").style.width = '100%';
            const menuItems = document.getElementsByClassName("menu-items");
            setTimeout(() =>{
                [].forEach.call(menuItems, function (el) {
                    el.style.display = 'block';
                });
            }, 180) 
        } else if (window.innerWidth <= 500) {
            document.getElementById("nav-menu").style.display = 'none';
            document.getElementById("header-nav").style.zIndex = '10';
            document.getElementById("menu-container").style.width = `${window.innerWidth*0.76}px`;
            const menuItems = document.getElementsByClassName("menu-items");
            setTimeout(() =>{
                [].forEach.call(menuItems, function (el) {
                    el.style.display = 'block';
                });
            }, 100) 
        }
    };

    const onCloseClick = () => {
        document.getElementById("menu-container").style.width = '0%';
        const menuItems = document.getElementsByClassName("menu-items");
        setTimeout(() =>{
            [].forEach.call(menuItems, function (el) {
                el.style.display = 'none';
            });
        }, 200) 
        var menuApperTime = 0; 
        if( window.innerWidth <= 500){
            menuApperTime= 420;
        } else if (window.innerWidth > 500) {
            menuApperTime=665;
        }
        setTimeout(() => {
            document.getElementById("header-nav").style.zIndex = '6';
            document.getElementById("nav-menu").style.display = 'block';
        }, menuApperTime)
    };

    const history = useHistory();
    const goToHome = () => {
        history.push('/');
    };

    return (
        <div id="header-nav">
            {isFirstPage && isNotHome === false ?
            <div style={{
                display:'flex', 
                width: window.innerWidth > 500 ? window.innerWidth *0.55:window.innerWidth *0.94, 
                justifyContent:'flex-start', 
                zIndex:'-1', 
                position:'absolute',
            }}> 
                <img onClick={goToHome} id="our-logo" src={require('images/WalkWith.png').default} alt="워크위드" style={{cursor:'pointer',  width:'180px', height:'27px', transition:'0.5s ease-in'}}></img> 
            </div>
            : <></>}
            {isNotHome ?<div style={{display:'flex', width:window.innerWidth > 500 ?window.innerWidth*0.9:window.innerWidth *0.94, justifyContent:'flex-start', zIndex:'-1', position:'absolute'}}>
                <img onClick={goToHome} id="our-logo" src={require('images/WalkWith.png').default} alt="워크위드" style={{cursor:'pointer', width:'180px', height:'27px', transition:'0.5s ease-in'}}></img>
            </div> : <></>}
            <h6 id="nav-menu" onClick={onClick} >MENU</h6>
            <div id="menu-container">
                <h2 id="close-container" onClick={onCloseClick}>X</h2>
                {window.localStorage.getItem('user') ? 
                <Link to="/my-profile" id="menu-a" className="menu-items">내 프로필</Link>
                :
                <Link to="/sign-in" id="menu-a" className="menu-items">회원가입/로그인</Link>
                }
                <Link to="/watch-roads" id="menu-a" className="menu-items">산책로 정보</Link>
                <Link to="/about-luminouss" id="menu-a" className="menu-items">About Us</Link>
                <Link to="/about-luminouss-team" id="menu-a" className="menu-items">TEAM</Link>
                <a href="https://www.instagram.com/luminouss.official/" id="menu-insta" className="menu-items">Instargram</a>
                <a href="https://www.facebook.com/Luminouss-100148985264742" id="menu-facebook" className="menu-items">Facebook</a>
            </div>
        </div>
    )
};

export default GlobalNav;