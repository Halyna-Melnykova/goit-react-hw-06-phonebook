import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';

const initialStore = {
  contacts: [],
  filter: '',
};

const isDublicate = (name, contacts) => {
  const result = contacts.find(
    item => name.toLowerCase() === item.name.toLowerCase()
  );
  return Boolean(result);
};

const reducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      if (isDublicate(payload.name, store.contacts)) {
        alert(`${payload.name} is already in contacts`);
        return store;
      }
      const newContacts = [...store.contacts, payload];
      return { ...store, contacts: newContacts };
    case REMOVE_CONTACT:
      const result = store.contacts.filter(item => item.id !== payload);
      return { ...store, contacts: result };
    case SET_FILTER:
      return { ...store, filter: payload };
    default:
      return store;
  }
};

export default reducer;
