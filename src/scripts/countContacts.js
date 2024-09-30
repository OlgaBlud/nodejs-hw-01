import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  const totalContacts = contacts.length;
  return totalContacts;
};

console.log(await countContacts());
