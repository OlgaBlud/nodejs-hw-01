import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    return;
  }
  await writeContacts([]);
};

removeAllContacts();
