/**
 * Key Value Mapping
 */

enum State {
    loading,
    done,
    error
}

type GlobalApiStaus = {
    getUser : State,
    paginateUser : State | undefined,
    banUser : State | null ,
    getPosts : State,
}

type UserApiStatus = {
    getUser : State,
    paginateUser : State | undefined,
    banUser : State | null ,
}
 
type UserApiStatus2 = {
    getUser : GlobalApiStaus['getUser'],
    paginateUser : GlobalApiStaus['paginateUser'],
    banUser : GlobalApiStaus['banUser'] ,
}

type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUser' | 'banUser'] : GlobalApiStaus[k];
}

// == 
type PickedUserApiStatus = Pick<GlobalApiStaus,'getUser' | 'paginateUser' | 'banUser'>;
type OmitUserApiStaus = Omit<GlobalApiStaus,'getPosts'>;


/** 
 * key of 
 */

type AllKeys = keyof GlobalApiStaus;
const key : AllKeys = 'getUser';

type KeyOfApiStatus = {
    [k in keyof GlobalApiStaus] : GlobalApiStaus[k];
}

type KeyOfApiStatus2 = {
    [k in keyof Exclude<GlobalApiStaus,'getPosts'>] : GlobalApiStaus[k]; // == [k in 'getUser' | 'paginateUser' | 'banUser'] : GlobalApiStaus[k];

}


type KeyOfApiStatus3 = {
    [k in keyof Exclude<GlobalApiStaus,'getPosts'>]? : GlobalApiStaus[k]; 
}