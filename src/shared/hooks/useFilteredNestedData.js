import { useMemo } from 'react';

export function useFilteredNestedData(data, nestedKey, desiredId) {
  const filteredData = useMemo(() => {
    if (!data || !nestedKey || !desiredId) return [];
    return data.reduce((acc, item) => {
      const nestedItems =
        item[nestedKey]?.filter(subItem => subItem.id === desiredId) || [];
      return [...acc, ...nestedItems];
    }, []);
  }, [data, nestedKey, desiredId]);

  return filteredData;
}
