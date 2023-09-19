import React from 'react';
import Map from './Map';
import Markers from './Markers';
import useMap from '@/hooks/useMap';
import { NaverMap } from '@/types/map';

// Marker를 그려야 한다
/*
  Marker는 naver.map 객체에 그려짐( 전역참조가 가능해야 함)
*/

const MapScene = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    console.log('로드 완료');
    initializeMap(map);
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapScene;
