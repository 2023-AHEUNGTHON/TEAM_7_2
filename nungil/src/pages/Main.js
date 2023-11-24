import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "../components/useKakaoLoader";
import PlacesData from "../db/places.json";
import GiftBtn from "../components/GiftBtn";
import PinNum from "../components/PinNum";

function Main() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [places, setPlaces] = useState(PlacesData.places);

  useKakaoLoader();

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      places.forEach((place) => {
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(
            place.latitude,
            place.longitude
          ),
          clickable: true,
        });

        const handleClick = () => {
          if (selectedMarker) {
            selectedMarker.setImage(
              new window.kakao.maps.MarkerImage(
                process.env.PUBLIC_URL + "/asset/Icon/marker.png",
                new window.kakao.maps.Size("30px", "30px")
              )
            );
          }

          if (selectedMarker === marker) {
            // 클릭된 마커를 다시 클릭하면 선택을 취소
            setSelectedMarker(null);
          } else {
            marker.setImage(
              new window.kakao.maps.MarkerImage(
                process.env.PUBLIC_URL + "/asset/Icon/giftMarker.png",
                new window.kakao.maps.Size("30px", "30px")
              )
            );
            setSelectedMarker(marker);
          }

          // 클릭된 마커 정보 콘솔에 출력
          console.log(`Marker Clicked: ${place.placeName}`);
        };

        window.kakao.maps.event.addListener(marker, "click", handleClick);

        marker.setMap(window.map);

        return () => {
          // 마커를 지도에서 제거할 때 필요한 clean-up 로직
          window.kakao.maps.event.removeListener(marker, "click");
          marker.setMap(null);
        };
      });
    }
  }, [places, selectedMarker]);

  const markerImage = {
    src: process.env.PUBLIC_URL + "/img/basicMarker.svg",
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

  const giftMarkerImage = {
    src: process.env.PUBLIC_URL + "/img/giftMarker.svg",
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
    <>
      <Map
        center={{ lat: 37.5982639, lng: 126.8648429 }}
        style={{ width: "100%", height: "100vh" }}
      >
        {places.map((place) => (
          <MapMarker
            key={place.placeId}
            position={{
              lat: place.latitude,
              lng: place.longitude,
            }}
            image={
              selectedMarker &&
              selectedMarker.getPosition().equals(
                new window.kakao.maps.LatLng(
                  place.latitude,
                  place.longitude
                )
              )
                ? giftMarkerImage
                : markerImage
            }
            onClick={() => console.log(`Marker Clicked: ${place.placeName}`)}
          />
        ))}
        <PinNum />
        <GiftBtn />
      </Map>
    </>
  );
}

export default Main;
