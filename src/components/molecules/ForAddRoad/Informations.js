import React from 'react';
import {useRecoilValue} from 'recoil';
import PeopleState from 'recoilStates/Addroad/PeopleState';
import SetEntireStates from 'functions/SetEntireStates';

const Informations = () => {

    const a = SetEntireStates();
    const people = useRecoilValue(PeopleState);
    
    React.useEffect(() => {
        document.getElementById('nav').style.display = 'none'
    }, [])


    return (
    <div style={{
        display:"flex",
        width: '30%',
        height: '100%',
        backgroundColor: "black",
        flexDirection:'column'
    }}>
        <h2 style={{color: 'white', paddingLeft:'20px', marginBlockEnd:'0.3em'}}>산책로: {a.road_name}</h2>
        <hr id="first-hr" />
        <h4 style={{color: 'white', paddingLeft:'20px'}}>산책로 전체 길이: {a.entire_length}</h4>
        <h4 style={{color: 'white', paddingLeft:'20px'}}>환경: {a.road_env}</h4>
        <h4 style={{color: 'white', paddingLeft:'20px'}}>길 포장 재질: {a.pavement}</h4>
        <hr id="middle-hr" />
        <h4 style={{color: 'white', paddingLeft:'20px'}}>안전펜스 점수: {a.safety_fence}</h4>
        <h4 style={{color: 'white', paddingLeft:'20px'}}>유도블록 점수: {a.side_walk_block}</h4>
        <h4 style={{color: 'white', paddingLeft:'20px'}}>점자표지판 점수: {a.braille_notice}</h4>
        <h4 style={{color: 'white', paddingLeft:'20px'}}>음성유도기 점수: {a.voice_induction}</h4>
        <hr id="middle-hr" />
        <h4 style={{color: 'white', paddingLeft:'20px'}}>계단 특성: {a.stair_feature}</h4>
        <hr id="middle-hr" />
        <h4 style={{color: 'white', paddingLeft:'20px'}}>화장실: {a.toilet}</h4>
        <h4 style={{color: 'white', paddingLeft:'20px'}}>벤치 등 쉬는 공간: {a.bench_and_rest}</h4>        
        <hr id="middle-hr" />
        <h4 style={{color: 'white', paddingLeft:'20px'}}>유동인구: </h4>
        <h5 style={{color: 'white', paddingLeft:'20px'}}>시간대 : {people.time} </h5>    
        <h5 style={{color: 'white', paddingLeft:'20px'}}>유형 : {people.peopleKind} </h5>    
        <h5 style={{color: 'white', paddingLeft:'20px'}}>유동 인구 : {people.population} </h5>    
        <hr id="middle-hr" />
        <div>
            <h4 style={{color: 'white', paddingLeft:'20px'}}>주변 환경:</h4>
            {a.around_env_list.map((env) => <>
            <h4 key={env.id} style={{color: 'white', paddingLeft:'20px'}}>{env.place_name}</h4>
            </>)}
            
        </div>

        <hr id="middle-hr" />
        <h4 style={{color: 'white', paddingLeft:'20px'}}>산책로의 특징: {a.feature}</h4>
        <h4 style={{color: 'white', paddingLeft:'20px'}}>주의 사항: {a.warning}</h4>



    </div>
    );
};

export default Informations;