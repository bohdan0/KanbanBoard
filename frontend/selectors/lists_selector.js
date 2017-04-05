export const selectListIds = (lists, listIds) => {
  let result = [];
  listIds.forEach(listId => {
    if (lists[listId]) {
      result.push(listId);
    }
  });

  return result;
};