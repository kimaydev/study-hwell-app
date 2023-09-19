import React, { useEffect } from 'react';
import { Marker } from '@/types/map';

// 필요 props가 naver 객체, 위경도 좌표
const Marker = ({ map, coordinates }: Marker) => {
  // mount가 되면
  useEffect(() => {
    // map이 있다면
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(...coordinates),
        map: map,
      });
      /*
        꼭 해야하는 것은 아님
        cleanup 함수는 필요할 때 사용
        unmount 역할 : 컴포넌트가 제거(화면에서 제거) 될 때
      */
      return () => {
        // 지도 지우기
        marker?.setMap(null);
      };
    }
  }, [map]);
  return null;
};

export default Marker;
