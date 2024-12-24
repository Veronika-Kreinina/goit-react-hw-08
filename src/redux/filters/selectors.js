import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectContactsFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) =>
    contacts.filter((item) => item.name.toLowerCase().includes(filter))
);
