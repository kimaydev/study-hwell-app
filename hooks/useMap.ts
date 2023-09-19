import { useCallback } from 'react';
// SWR을 이용해서 naver.map을 전역으로 참조 가능하도록 함
// map 객체를 보관
import { mutate } from 'swr';
import { NaverMap } from '@/types/map';

import { Coordinates } from '@/types/info';

export const INITIAL_CENTER: Coordinates = [37.3595704, 127.105399];
export const INITIAL_ZOOM = 10;
export const INITIAL_MIN = 6;

// 바깥에서 사용하기 위해서 export 한다.
export const MAP_KEY = '/map';

// 네이버 맵 전역으로 저장하기
const useMap = () => {
  const initializeMap = useCallback((map: NaverMap) => {
    // 지도를 보관한다.
    mutate(MAP_KEY, map);
  }, []);
  return { initializeMap };
};
export default useMap;
