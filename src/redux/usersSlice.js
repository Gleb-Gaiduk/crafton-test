import {createAsyncThunk, createSelector, createSlice, nanoid} from '@reduxjs/toolkit';
import requestInstance from '../server-api/axios-instance';

// Thunk Creators
    export const fetchUserAccount = createAsyncThunk(
        'users/fetchUsersStatus',
     async (userName, {dispatch, rejectWithValue}) => {
            try {
                const profileResponse = await requestInstance.get(`users/${userName}`);
                const reposResponse = await requestInstance.get(`users/${userName}/repos`);

                return {
                    profile: profileResponse.data,
                    repos: reposResponse.data
                };
            } catch (err) {
                dispatch(setNotFoundTypedUser(userName));
                return rejectWithValue(err.response.data.message);
            }
    }
);
// End of Thunk Creators

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        typedUsers: [],
        fetchedUsers:[],
        status: 'idle',
        error: null
    },

    reducers: {
        addTypedUser:{
            reducer(state, action) {
                state.typedUsers.push(action.payload);
            },
            prepare(name) {
                return {payload: {name, id: nanoid()}}
            }
        },

        setNotFoundTypedUser (state, action) {
            const activeTypedUserName = action.payload;
            const notFoundTypedUser = state.typedUsers.find(user => user.name === activeTypedUserName);
            if (notFoundTypedUser) {
                notFoundTypedUser.isFound = false;
            }
        }
    },

    extraReducers: {
        [fetchUserAccount.fulfilled]: (state, action) => {
            state.fetchedUsers.push(action.payload);
            state.status = 'completed';
            state.error = null;
        },

        [fetchUserAccount.pending]: (state) => {
            state.status = 'loading';
        },

        [fetchUserAccount.rejected]: (state, action) => {
            state.status = 'error';
            let errorMessage = action.payload;
            if (action.payload === 'Not Found') {
                errorMessage = 'It looks like there is not a GitHub user with such a Name';
            }
            state.error = errorMessage;
        }
    }
});

// Selectors
export const selectTypedUsers = state => state.users.typedUsers;
export const selectIsFoundTypedUserByName = createSelector(
    selectTypedUsers,
    (state, name) => name,
    (users, name) => users.find(user => user.name === name).isFound
);
export const selectActiveUserNameById = createSelector(
    selectTypedUsers,
    (state, userId) => userId,
    (users, userId) => {
       return users.filter(user => user.id === userId)[0].name;
    }
);

export const selectFetchedUsers = state => state.users.fetchedUsers;
export const selectFetchedUserByName = createSelector(
    selectFetchedUsers,
    (state, userName) => userName,
    (users, userName) => {
        return users.find(user => user.profile.login.toLowerCase() === userName.toLowerCase());
    }
);

export const selectLoadingStatus = state => state.users.status;
export const selectErrorMessage = state => state.users.error;

export const selectProfileData = createSelector(
    selectFetchedUserByName,
    (user) => {
        if (!user) return;
        const {login, avatar_url, html_url, location, company} = user.profile;
        const profileData = {login, avatar_url, html_url, location, company};
        const reposData = user.repos.map(rep => ({name: rep.name, url: rep.html_url}));

        return {
            profileData,
            reposData
        }
    }
);
// End of Selectors

export const { addTypedUser, setNotFoundTypedUser } = usersSlice.actions;
export default usersSlice.reducer;
