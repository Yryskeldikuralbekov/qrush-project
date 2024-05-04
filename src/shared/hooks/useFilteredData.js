import { useMemo } from 'react';

export function useFilteredData(data, desiredId) {
  const filteredData = useMemo(() => {
    return data.filter(item => item.id === desiredId);
  }, [data, desiredId]);

  return filteredData;
}
