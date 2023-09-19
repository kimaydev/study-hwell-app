// 위, 경도 정보를 여러 컴포넌트에서 재활용하여 관리하는 훅
// 함수를 한번만 만들고 재렌더링이 되더라도 새로 생성하지 않음 (성능 최적화)
// 성능 최적화 : 초반에는 적용하지 않고 테스트 중에 고려를 해보자.
import { useCallback } from 'react';
// 위, 경도 정보를 전역 state로 보관하고, SWR를 활용한다.
// SWR을 활용하여 위, 경도 데이터를 전역에 보관(담아준다)한다.
// mutate: SWR에 쓴다(저장한다)
import { mutate } from 'swr';
import { Info } from '@/types/info';

// SWR의 KEY는 문자열 : 문자열의 장소에 전역데이터를 보관한다.
// 바깥에서 사용하기 위해서 export 한다.
export const INFO_KEY = '/infos';

const useInfo = () => {
  // 초기 위, 경도 데이터를 전달받아 SWR 키(INFO_KEY)에 보관한다.
  // infos 매개변수는 [[위도, 경도], [위도, 경도], [위도, 경도]] 형태
  // useCallback(함수, []);
  const initializeInfos = useCallback((infos: Info[]) => {
    mutate(INFO_KEY, infos); // 수정 및 삭제, 업데이트 할 때 사용됨
  }, []);
  return {
    initializeInfos,
  };
};
export default useInfo;
