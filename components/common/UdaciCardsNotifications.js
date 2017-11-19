import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATIONS_KEY = 'UdaciCards:notifications'

const PERMISSION_GRANTED = 'granted'

export function clearNotifications() {
    return AsyncStorage.removeItem(NOTIFICATIONS_KEY)
        .then(() => Notifications.cancelAllScheduledNotificationsAsync())
}

export function setLocalNotification() {
    return AsyncStorage.getItem(NOTIFICATIONS_KEY)
        .then((data) => JSON.parse(data))
        .then((data) => {
            
            Permissions.askAsync(Permissions.NOTIFICATIONS)
                .then(({ status }) => {

                    if (status === PERMISSION_GRANTED) {
                        Notifications.cancelAllScheduledNotificationsAsync()
                        Notifications.scheduleLocalNotificationAsync(
                            createNotification(),
                            {
                                time: createTommorrowAtSeven(),
                                repeat: 'day'
                            }
                        )

                        AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true))
                    }
                })
        })
}

function createTommorrowAtSeven() {
    let tomorrowAtSeven = new Date()
    tomorrowAtSeven.setDate(tomorrowAtSeven.getDate() + 1)
    tomorrowAtSeven.setHours(19)
    tomorrowAtSeven.setMinutes(0)
    return tomorrowAtSeven
}

function createNotification() {
    return {
        title: 'Do a Quiz!',
        body: "Don't forget to train with some quizes today.",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            sticky: false
        }
    }
}