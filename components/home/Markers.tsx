import React from 'react';
import Marker from './Marker';
import useSWR from 'swr';
import { INFO_KEY } from '@/hooks/useInfo';
import { Info } from '@/types/info';
import { MAP_KEY } from '@/hooks/useMap';
import { NaverMap } from '@/types/map';

const Markers = () => {
  // 전역 상태 (위, 경도)정보를 활용한다.
  const { data: infos } = useSWR<Info[]>(INFO_KEY);
  // 전역 상태 정보 네이버 map 객체 정보 활용
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  // infos와 map이 모두 있어야 출력한다.
  if (!map || !infos) return null;
  // 여기서 위 과정을 통과하고 나면 Marker들을 출력한다.
  return (
    <>
      {infos.map((item, index) => {
        // Marker는 네이버 지도, 위경도 정보를 받는다.
        return <Marker map={map} coordinates={item.coordinates} key={index} />;
      })}
    </>
  );
};

export default Markers;
