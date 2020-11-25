import { createSelector } from 'reselect' ;

export const getUser = state => state.user ;

export const getUserDetails = createSelector(
    [getUser],
    user => user.user
) ;

export const getBarName = createSelector(
    [getUserDetails],
    user =>   (user) ? user.barName : false 
         
) ;