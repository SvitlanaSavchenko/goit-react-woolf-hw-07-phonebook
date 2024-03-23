export const handleFulfilledContacts = (state, { payload }) => {
  state.contacts.items = payload;
  state.contacts.isLoading = false;
};

export const handleAddedContacts = (state, { payload }) => {
  state.contacts.items.push(payload);
  state.contacts.isLoading = false;
};

export const handleDeletedContacts = (state, { payload }) => {
  state.contacts.items = state.contacts.items.filter(
    el => el.id !== payload.id
  );
  state.contacts.isLoading = false;
};

export const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};
export const handleRejected = (state, { error }) => {
  state.contacts.error = error.message;
  state.contacts.isLoading = false;
};
