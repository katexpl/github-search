//Github search interfaces
export interface IProject {
  id: number;
  name: string;
  size: number;
  updated_at: string;
  commits: any[];
}

export interface IError {
  response: {
    status: number;
  };
}

export interface ICommit {
  sha: string;
  commit: {
    message: string;
  };
}

export interface SetUserName {
  type: "SET_USER_NAME";
  payload: string;
}

export interface UserNameState {
  name: string;
}

export interface SetUserEmail {
  type: "SET_USER_EMAIL";
  payload: string;
}
//Factorial calculator interfaces
export interface State {
  input: number;
  result: number;
  history: number[];
}
export interface UpdateInput {
  type: "UPDATE_INPUT";
  payload: number;
}

export interface UpdateResult {
  type: "UPDATE_RESULT";
  payload: number;
}

export interface UpdateHistory {
  type: "UPDATE_HISTORY";
  payload: number[];
}
