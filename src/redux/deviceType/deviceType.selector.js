import { createSelector } from 'reselect' ;

export const deviceType = state => state.deviceType ;

export const getDeviceType = createSelector(
    [deviceType],
    deviceType => deviceType.deviceType
) ;

