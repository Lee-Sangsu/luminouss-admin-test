import React from "react";
import AddRoadForm from 'components/organisms/AddRoadForm';
import useConfirm from 'hooks/useConfirm';
// import { useRecoilValue } from 'recoil';
import SetEntireStates from 'functions/SetEntireStates';
import firebase from 'global/fbase';
import {useHistory} from 'react-router-dom';

const AddRoad = () => {
  const history = useHistory();
  const a = SetEntireStates();
    const submitConfirm = async () => {
      // recoil value 다 가져와서 firestore에 한번에 저장
      await firebase.firestore().collection("WalkRoad").doc(a.roadName).set(a)
      .then(() => {
          window.alert("Document successfully written!");;               
          history.push('/');
      })
      .catch(function(documentError) {
        window.alert(documentError);
      });
    };
    const abort = () => console.log('abort'); 
    const confirmSubmit = useConfirm("You sure?", submitConfirm, abort);
	

    return (
      <>
        <h3>AddRoad Page</h3>
        <AddRoadForm />
        <button onClick={confirmSubmit}> 정보 등록하기 </button>

      </>
    );
};

export default AddRoad;