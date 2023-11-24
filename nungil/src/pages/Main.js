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
                process.env.PUBLIC_URL + "/img/basicMarker.svg",
                new window.kakao.maps.Size("64px", "69px"),
                {
                  offset: {
                    x: 27,
                    y: 69,
                  },
                }
              )
            );
          }

          if (selectedMarker === marker) {
            setSelectedMarker(null);
          } else {
            marker.setImage(
              new window.kakao.maps.MarkerImage(
                process.env.PUBLIC_URL + "/img/giftMarker.svg",
                new window.kakao.maps.Size("64px", "69px"),
                {
                  offset: {
                    x: 27,
                    y: 69,
                  },
                }
              )
            );
            setSelectedMarker(marker);
          }
        };

        window.kakao.maps.event.addListener(marker, "click", handleClick);

        marker.setMap(window.map);

        return () => {
          window.kakao.maps.event.removeListener(marker, "click");
          marker.setMap(null);
        };
      });
    }
  }, [places, selectedMarker]);

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
                process.env.PUBLIC_URL + "/img/basicMarker.svg",
                new window.kakao.maps.Size("64px", "69px"),
                {
                  offset: {
                    x: 27,
                    y: 69,
                  },
                }
              )
            );
          }

          // Check if the clicked marker is the same as the selected marker
          const isSameMarker =
            selectedMarker &&
            Math.abs(
              selectedMarker.getPosition().getLat() -
                marker.getPosition().getLat()
            ) < 0.000001 &&
            Math.abs(
              selectedMarker.getPosition().getLng() -
                marker.getPosition().getLng()
            ) < 0.000001;

          if (selectedMarker && isSameMarker) {
            setSelectedMarker(null);
          } else {
            marker.setImage(
              new window.kakao.maps.MarkerImage(
                process.env.PUBLIC_URL + "/img/giftMarker.svg",
                new window.kakao.maps.Size("64px", "69px"),
                {
                  offset: {
                    x: 27,
                    y: 69,
                  },
                }
              )
            );
            setSelectedMarker(marker);
          }
        };

        window.kakao.maps.event.addListener(marker, "click", handleClick);

        marker.setMap(window.map);

        return () => {
          window.kakao.maps.event.removeListener(marker, "click");
          marker.setMap(null);
        };
      });
    }
  }, [places, selectedMarker]);

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
              selectedMarker
                .getPosition()
                .equals(
                  new window.kakao.maps.LatLng(place.latitude, place.longitude)
                )
                ? {
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
                  }
                : {
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
                  }
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
