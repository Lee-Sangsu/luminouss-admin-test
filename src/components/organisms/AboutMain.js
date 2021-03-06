import React from 'react';
import Subject from 'components/molecules/Subject';
import Footer from 'components/molecules/ForHome/Footer';


const AboutMain = () => {
    return (
        <div id="container">
            <Subject id='about-page' circleColor='rgba(255, 193, 7, 1)' text="ABOUT" />
            <div className="introduction">
                <h1 className="team-name" >Luminouss</h1>
                {/* <h3 className="team-vision">{`시각장애인의 
                산책 한걸음이,
                자립 한걸음으로.`}</h3> */}
                <pre className="team-vision-mean">
{`루미너스는 '어둠 속에서 빛나는'이라는 뜻을 가지고 있는 영어 단어입니다. 어둠 속에서 빛이 나듯이, 
시각장애인이 보는 세상이 더 밝아지기를 원한다는 비전을 가지고 있습니다.`}
                </pre>
            </div>
            <div className="logo-image">
                <img src={ require('images/심볼로고.png').default} alt='루미너스 로고'/>
            </div>
            <div className="problem-tit">
                <span className="prob-tit">PROBLEM</span>
                <img className="prob-pic" src={require("images/backgrounds/problem-back.jpg").default} alt='배경 사진' />
            </div>
            <div className="problem-body">
                <pre className="team-problem">{`
  시각장애인들은 산책을 즐겨하지만, 산책로의 환경 때문에 그들이 불편함을 겪고
있다는 것을 알게 되었습니다. 저희가 확인한 바로는, 이 문제가 발생하는 이유는 
산책로에 안전펜스, 유도블록, 점자표지판 등 보조시설의 부재 때문이었습니다. 이로 인해 시각장애인들이 남산의 산책로에만 모이는 '쏠림 현상'이 발생한다는 것을 알
게 되었습니다. 그래서 저희는 '시각장애인의 불편한 산책 경험'을 해결하려 합니다.
                `}</pre>
            </div>
            <div className="solution-tit">
                <span className="sol-tit" >SOLUTION</span>
                <img className="sol-pic" src={require("images/backgrounds/solution-back.jpg").default} alt='배경 사진'/>
            </div>
            <div className="solution-body">
                <div className="explaining-wrap">
                    <pre>
 {`  산책로의 인프라가 시각장애인들에게 불편하다는 것을 발견했고, 이로 인해 서울의
시각장애인들이 한 군데의 산책로에만 모이는 쏠림 현상이 발생한다는 것을 알게
되었습니다. 이러한 현상을 방지하기 위해 제작된 '워크위드(Walk With)'는 시각장
애인들에게 다양한 산책로에 대한 정보를 제공하고, 산책중에 실시간으로 장애물과
주변 시설을 알려주어 시각장애인의 불편한 산책 경험을 개선할 것입니다.`}</pre>
                </div>
            </div>
            <div id="ux-ui">
                <span id="ux-tit">Mobile UX/UI</span>
                <span id="radius-box"></span>
                <img src={window.innerWidth >500 ? require('images/mobile-ui.png').default: require('images/appuimobile.png').default} alt="모바일 화면" id="app-ui"></img>
            </div>
            <Footer />
        </div>
    )
};

export default AboutMain;
