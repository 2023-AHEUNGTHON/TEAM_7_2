import React, { useState,useEffect} from "react";
import { Map, MapMarker} from "react-kakao-maps-sdk";
import axios from "axios";
import useKakaoLoader from "../components/useKakaoLoader";
import PlacesData from "../db/places.json";
import GiftBtn from "../components/GiftBtn";
import PinNum from "../components/PinNum";
import Infor from "../components/Infor";



function MainTest() {
  useKakaoLoader();

  const [selectedMarker, setSelectedMarker] = useState(null);

  //현재위치 
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  })
  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }
  }, [])



  // 위치 데이터를 마커 위치로 변환
  const positions = PlacesData.places.map((place) => ({
    lat: place.latitude,
    lng: place.longitude,
  }));


  const MarkerContainer = ({ position, onClick, isSelected }) => {
    // 선택 여부에 따라 마커 이미지 정의
    const markerImage = {
      src: isSelected
        ? process.env.PUBLIC_URL + "/img/giftMarker.svg"
        : process.env.PUBLIC_URL + "/img/basicMarker.svg",
      size: isSelected? {width: 64,height: 69}:{width:30,height:35},
      options: {
        offset: {
          x: 27,
          y: 69,
        },
      },
    };

    return (
      <MapMarker position={position} onClick={onClick} image={markerImage}  />
    );
  };

  return (
    <Map
      center={state.center}
      style={{ width: "100%", height: "100vh" }}
    >
      {positions.map((position, index) => (
        <MarkerContainer
          key={`MarkerContainer-${position.lat}-${position.lng}`}
          position={position}
          onClick={() => setSelectedMarker(index)}
          isSelected={selectedMarker === index}
        />
      ))}
      <Infor/>
      <PinNum />
      <GiftBtn />
    </Map>
  );
}export default MainTest;
