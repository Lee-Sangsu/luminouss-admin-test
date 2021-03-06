import React from 'react';
import { useSetRecoilState } from 'recoil';
import AddressState from 'recoilStates/Addroad/AddressState';
import axios from 'axios';
import kakaoAuthKey from 'global/KakaoAuthKey';
import AroundSubwayState from 'recoilStates/Addroad/AroundSubwayState';
import distanceInKmBetweenEarthCoordinates from 'functions/GetDistance';
import AddressAreaState from 'recoilStates/Addroad/AddressAreaState';

let id = 0;
  
function getId() {
   return id++;
}

const SearchResults = ( { data } ) => {
    const setAddress = useSetRecoilState(AddressState);
    const setSubways = useSetRecoilState(AroundSubwayState);
    const setAddressArea = useSetRecoilState(AddressAreaState);

    const roadAddress = data.address_name;
    const arr = roadAddress.split(' ');

    const onClick = async () => {
        setAddress({
            address_name: roadAddress,
            latitude: data.y,
            longitude: data.x,
        });
        setAddressArea([
            {
                id: getId(),
                area: arr[1]
            }
        ]);
        
        //백엔드에서 보통 api key들을 함, || 서버에서 데이터 렌더링 후 주던가

        axios.get('https://dapi.kakao.com/v2/local/search/category.json', {
            headers : {
                'Authorization': `KakaoAK ${kakaoAuthKey}`,
                'content-type': 'application/x-www-form-urlencoded'
            },
            params : {
                category_group_code: 'SW8',
                x: data.x,
                y: data.y,
                size: 2,
                sort: 'distance'
            } 
        }).then((res) => {
            const subwayList = JSON.parse(JSON.stringify(res.data));
            subwayList.documents.forEach( (i) => { 
                const km = distanceInKmBetweenEarthCoordinates(data.x, data.y, i.x, i.y);
 
                setSubways((prev) => [...prev, {
                    place_name: i.place_name,
                    walk_time: parseInt(km * 20) 
                }])
            });          
            
        }).catch(error => console.log(error))


        document.getElementById("search-results").style.display = 'none';
        document.getElementById("road-res-entire").style.display = 'block';
        document.getElementById("road-head").style.display = 'block';
        document.getElementById("road-address").style.display = 'block';
    };

    const [mouseIn, setMouseIn] = React.useState(false);
    
    const colorThis =() => {
        setMouseIn(true);
    };

    const backColor =() => {
        setMouseIn(false);
    };

    return (
        <button id="item-btn" onMouseEnter={colorThis} onMouseLeave={backColor} onClick={onClick} style={{
            backgroundColor: mouseIn ? 'white' : 'rgba(196, 196, 196, 1)',
            cursor: mouseIn ? 'pointer': 'unset'
        }}>
            <h4 id='place-h4'>{data.place_name}</h4>
            <h6 id='place-h6'>{data.address_name}</h6>
        </button>
    )
};

export default SearchResults;