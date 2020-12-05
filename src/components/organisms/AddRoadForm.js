import React from "react";
import {
    useRecoilValue,
  } from 'recoil';
import SupportInfraItemCreator from 'functions/SupportInfraItemCreator';
import SupportInfraItem from 'components/molecules/SupportInfraItem';
import SupportInfraListState from 'recoilStates/SupportInfraListState';
import InputAddress from 'components/molecules/InputAddress';
import RoadNameInput from 'components/molecules/RoadNameInput';
import WarningInput from 'components/molecules/WarningInput';
import FeaturesInput from 'components/molecules/FeaturesInput';

import SelectEnv from 'components/molecules/SelectEnv';
import SelectPavement from 'components/molecules/SelectPavement';
import InfraListState from 'recoilStates/InfraListState';
import InfraItem from 'components/molecules/InfraItem';
import InfraItemCreator from 'functions/InfraItemCreator';

import AroundEnvListState from 'recoilStates/AroundEnvListState';
import AroundEnvItem from 'components/molecules/AroundEnvItem';
import SearchedResultState from 'recoilStates/searched/SearchedResultState';
import SearchResults from 'components/molecules/SearchResults';
import SearchAroundEnv from 'components/molecules/SearchAroundEnv';
import EnvSearchState from 'recoilStates/searched/EnvSearchState';
import EnvSearchResults from 'components/molecules/EnvSearchResult';
import PeopleInput from 'components/molecules/PeopleInput';

const AddRoadForm = () => {
    const supportInfraList = useRecoilValue(SupportInfraListState);
    const infraList = useRecoilValue(InfraListState);
    const aroundList = useRecoilValue(AroundEnvListState);
    //정보등록 onclick으로 firebase.firestore 한번에 넣기
    const searchResults = useRecoilValue(SearchedResultState);
    const envSearchResults = useRecoilValue(EnvSearchState);
    
   
    return (
      <>
        <div className="input-form" style={{
          width:"350px",
          height:"fit-content"
        }}>
          <h3>새로운 산책로을 검색하고 위치를 추가해주세요</h3>
          <RoadNameInput placeholder="산책로 이름" />
          <InputAddress />
          <div id="search-results">
          {searchResults.map((data) => (
            <SearchResults key={data.id} data={data} />
          ))}
          </div>
          <SelectEnv />
          <SelectPavement />

          <h4>보조시설 추가</h4>
          <SupportInfraItemCreator />
          {supportInfraList.map((supportInfraItem) => (
            <SupportInfraItem key={supportInfraItem.id} item={supportInfraItem} />
          ))}


          <h4>시설 추가</h4>
          <InfraItemCreator />
          {infraList.map((infraItem) => (
            <InfraItem key={infraItem.id} item={infraItem} />
          ))}

          <h4>주변환경 추가</h4>
          <SearchAroundEnv placeholder="음식점 이름 등을 입력하세요" />
          <div id="aroundenv">
            {envSearchResults.map((data) => (
              <EnvSearchResults key={data.id} data={data} />
            ))}
          </div>

          <div id="aroundEnvList">
            {aroundList.map((aroundEnvItem) => (
              <AroundEnvItem key={aroundEnvItem.id} item={aroundEnvItem} />
            ))}
          </div>


          <h4>걸을 때 주의사항</h4>
          <WarningInput placeholder="걸을 때 주의사항을 적어주세요" />
          
          <h4>산책로 특징</h4>
          <FeaturesInput placeholder="산책로의 특징을 적어주세요" />

          <h4>유동 인구</h4>
          <PeopleInput placeholder="유동인구 많은 정도 적어주세요" />
        </div>
      </>
    );
};

export default AddRoadForm;