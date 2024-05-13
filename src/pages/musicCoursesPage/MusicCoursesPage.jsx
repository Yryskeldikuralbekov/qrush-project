import React, { useEffect } from 'react';
import { MusicCoursesFirstSection } from '../../widgets';
import { Advertising } from '../../shared';
import { useZustandStore } from '../../app/store/store';

export const MusicCoursesPage = () => {
  const { getMusicCoursesPage, musicCoursesData } = useZustandStore();
  useEffect(() => {
    getMusicCoursesPage();
  }, []);
  return (
    <>
      {musicCoursesData?.map(item => (
        <div key={item.id}>
          <MusicCoursesFirstSection item={item} />
        </div>
      ))}
      <Advertising />
    </>
  );
};
