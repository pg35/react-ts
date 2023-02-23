export const INIT_APP = "INIT_APP";
export const EDIT_UI = "EDIT_UI";
export const EDIT_ITEM = "EDIT_ITEM";

export const uiState = {
  loading: true,
  dirty: false,
  save: {
    doing: false,
    result: null
  }
};

export function createAction(type: any, data = {}) {
  return {
    type,
    ...data
  };
}
export function reducer(state: any, action: any) {
  switch (action.type) {
    case INIT_APP:
      return action.state;
    case EDIT_UI:
      return {
        ...state,
        ui: { ...state.ui, ...action }
      };
    default:
      throw new Error("unknown list action " + action.type);
  }
}
