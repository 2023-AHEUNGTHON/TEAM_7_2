import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "../components/useKakaoLoader";
import PlacesData from "../db/places.json";
import GiftBtn from "../components/GiftBtn";
import PinNum from "../components/PinNum";

function MainTest() {
  useKakaoLoader();

  const [selectedMarker, setSelectedMarker] = useState(null);

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
      size: {
        width: 64,
        height: 69,
      },
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
      center={{ lat: 37.5982639, lng: 126.8648429 }}
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
      <PinNum />
      <GiftBtn />
    </Map>
  );
}

export default MainTest;
