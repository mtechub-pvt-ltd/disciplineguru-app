const groupArray1 = (arr, chunkSize, maxLength) => {
  let list = Array.from({length: maxLength}, () => arr.splice(0, chunkSize));
  list = list?.filter(item => item?.length > 0);
  return list;
};
const groupArrayBySize = (array, size) => {
  size = size ? size : 6;
  const groupedArray = [];
  for (let i = 0; i < array.length; i += size) {
    groupedArray.push(array.slice(i, i + size));
  }
  return groupedArray;
};
export {groupArray1, groupArrayBySize};
