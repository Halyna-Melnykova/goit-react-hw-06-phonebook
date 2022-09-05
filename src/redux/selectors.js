// export const getContacts = store => store.contacts;
export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return result;
};

export const getFilter = ({ filter }) => filter;
