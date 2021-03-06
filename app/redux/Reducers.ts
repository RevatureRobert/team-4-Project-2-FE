import {
  ILoginActions,
  ISwitchPageActions,
  LoginActions,
  SwitchPageAction,
} from "./Actions";
import { IAppState, initialState } from "./State";

export const Reducer = (
  state: IAppState = initialState,
  action: ILoginActions | ISwitchPageActions
): IAppState => {
  const newState = { ...state };
  switch (action.type) {
    case LoginActions.LOGIN:
      newState.ILogin.username = action.payload.name;
      newState.ILogin.userType = action.payload.type;
      return newState;
    case LoginActions.LOGOUT:
      newState.ILogin.username = initialState.ILogin.username;
      newState.IPageState.parentID = initialState.IPageState.parentID;
      newState.IPageState.postID = initialState.IPageState.postID;
      return newState;
    case SwitchPageAction.UPDATE:
      newState.IPageState.PageName = action.payload.name;
      newState.IPageState.parentID = action.payload.parentID;
      return newState;
    case SwitchPageAction.VIEW_POST:
      newState.IPageState.parentID = action.payload.parentID;
      newState.IPageState.postID = action.payload.postID;
      return newState;
    default:
      return newState;
  }
};
