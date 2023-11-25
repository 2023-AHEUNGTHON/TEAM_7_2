import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import axios from "axios";
import useKakaoLoader from "../components/useKakaoLoader";
import GiftBtn from "../components/GiftBtn";
import PinNum from "../components/PinNum";
import Infor from "../components/Infor";

function MainTest() {
  useKakaoLoader();

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [placeInfo, setPlaceInfo] = useState({ name: "", address: "" });
  const [userPositions, setUserPositions] = useState([]);
  const [currentPosition, setCurrentPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

  useEffect(() => {
    // 현재 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          console.error("Error getting current position:", err.message);
        }
      );
    } else {
      console.error("Geolocation not supported.");
    }

    // Axios로 데이터 가져오기
    axios({
      method: "GET",
      url: `https://api.nungil.shop/api/user/${1}/places`,
    })
      .then((res) => {
        console.log("통신 성공");
        console.log(res.data); // 응답 데이터 확인

        const positions = res.data.map((item) => ({
          lat: item.latitude,
          lng: item.longitude,
          name: item.placeName,
          address: item.address,
          placeId: item.placeId,
        }));

        setUserPositions(positions);
      })
      .catch((error) => {
        console.error("Error fetching user places:", error);
      });
  }, []); // 이 부분에서 두 번째 파라미터를 빈 배열로 설정

  const MarkerContainer = ({ position, onClick, isSelected }) => {
    const markerImage = {
      src: isSelected
        ? process.env.PUBLIC_URL + "/img/giftMarker.svg"
        : process.env.PUBLIC_URL + "/img/basicMarker.svg",
      size: isSelected ? { width: 64, height: 69 } : { width: 30, height: 35 },
      options: {
        offset: {
          x: 27,
          y: 69,
        },
      },
    };

    return (
      <MapMarker
        position={position}
        onClick={onClick}
        image={markerImage}
      />
    );
  };

  const onClickHandler = (index) => {
    setSelectedMarker(index);
    setPlaceInfo({
      name: userPositions[index].name,
      address: userPositions[index].address,
    });
  };

  return (
    <Map center={currentPosition} style={{ width: "100%", height: "100vh" }}>
      {userPositions.map((position, index) => (
        <MarkerContainer
          key={`MarkerContainer-${position.placeId}`}
          position={position}
          onClick={() => onClickHandler(index)}
          isSelected={selectedMarker === index}
        />
      ))}
      <Infor
        placeName={placeInfo.name}
        address={placeInfo.address}
      />
      <PinNum />
      <GiftBtn />
    </Map>
  );
}

export default MainTest;