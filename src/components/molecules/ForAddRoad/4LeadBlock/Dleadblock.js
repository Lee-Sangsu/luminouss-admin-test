import React from 'react';
import {useRecoilState} from 'recoil';
import LeadBlockState from 'recoilStates/Addroad/LeadBlockState';

const Dleadblock = () => {
    const [input, setInput] = useRecoilState(LeadBlockState);

    const handleOptionChange = (event) => {

        if (event.target.name === 'first-yes'){
            setInput({
                ...input, first: 2
            });
        } else if (event.target.name === 'first-no') {
            setInput({
                ...input, first: 0
            });
        } 
        
        else if (event.target.name === 'second-yes') {
            setInput({
                ...input, second: 2
            });
        } else if (event.target.name === 'second-no') {
            setInput({
                ...input, second: 0
            });
        } 

        else if (event.target.name === 'third-yes') {
            setInput({
                ...input, third: 2
            });
        } else if (event.target.name === 'third-no') {
            setInput({
                ...input, third: 0
            });
        } 

        else if (event.target.name === 'fourth-yes') {
            setInput({
                ...input, fourth: 2
            });
        } else if (event.target.name === 'fourth-no') {
            setInput({
                ...input, fourth: 0
            });
        } 

        else if (event.target.name === 'fifth-yes') {
            setInput({
                ...input, fifth: 2
            });
        } else if (event.target.name === 'fifth-no') {
            setInput({
                ...input, fifth: 0
            });
        } 
    };

    return (
        <div className='fence-page'>
            <h2 className="fence-title">유도블럭</h2>
            <form>
                <div className="yes-no">
                    <h6 className='yes-no-yes'>그렇다</h6>
                    <h6>아니다</h6>
                </div>
                <div className="questions-form">
                    <h5 className='question'>선형블록이 횡단보도가 아닌 도로를 향해있었나요?</h5>
                    <input className="yes-input" type="radio" value="yes" name="first-yes" checked={input.first === 2} onChange={handleOptionChange} />
                    <input type="radio" value="no" name="first-no" checked={input.first === 0} onChange={handleOptionChange} /> 
                </div>
                <div className="questions-form">
                    <h5 className='question'>유도블럭 위에 다른 다른 시설물이나 이동식 장애물들이 있었나요?</h5>
                    <input className="yes-input" type="radio" value="yes" name="second-yes" checked={input.second === 2} onChange={handleOptionChange} />
                    <input type="radio" value="no" name="second-no" checked={input.second === 0} onChange={handleOptionChange} /> 
                </div>
                <div className="questions-form">
                    <h5 className='question'>횡단보도 앞에 점형블록이 설치 되어있지 않았나요?</h5>
                    <input className="yes-input" type="radio" value="yes" name="third-yes" checked={input.third === 2} onChange={handleOptionChange} />
                    <input type="radio" value="no" name="third-no" checked={input.third === 0} onChange={handleOptionChange} /> 
                </div>
                <div className="questions-form">
                    <h5 className='question'>바닥색과 유도블럭의 구분이 어려웠었나요?</h5>
                    <input className="yes-input" type="radio" value="yes" name="fourth-yes" checked={input.fourth === 2} onChange={handleOptionChange} />
                    <input type="radio" value="no" name="fourth-no" checked={input.fourth === 0} onChange={handleOptionChange} /> 
                </div>
                <div className="questions-form">
                    <h5 className='question'>중간에 길을 안내하는 선형블록이 끊겨 있었나요?</h5>
                    <input className="yes-input" type="radio" value="yes" name="fifth-yes" checked={input.fifth === 2} onChange={handleOptionChange} />
                    <input type="radio" value="no" name="fifth-no" checked={input.fifth === 0} onChange={handleOptionChange} /> 
                </div>
            </form>
        </div>

    )
};

export default Dleadblock;