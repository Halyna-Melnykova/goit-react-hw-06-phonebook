export const getFilteredContacts = ({ contacts }) => {
  const { items, filter } = contacts;
  if (!filter) {
    return items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = items.filter(({ name }) => {
    const normalizedName = name.toLowerCase();

    return normalizedName.includes(normalizedFilter);
  });

  return result;
};
