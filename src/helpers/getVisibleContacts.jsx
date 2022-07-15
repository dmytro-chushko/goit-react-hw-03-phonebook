export const getVisibleContacts = (filter, contacts) => {
  const normalizeFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};
