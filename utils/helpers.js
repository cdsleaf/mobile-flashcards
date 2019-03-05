import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
import {
  fetchDecksResult,
  submitDeck,
} from './api';

const NOTIFICATION_KEY = 'mobileFlashcards:notifications';

export function getDecks(){
  return fetchDecksResult();
};

export function getDeck(deckId){
  return fetchDecksResult().then(decks => decks[deckId]);
};

export function addDeck(title){
  const newDeck = {
      title,
      questions: [],
  }
  return submitDeck(newDeck, title);
};

export function addCardToDeck(deckId, newCard){
  return getDeck(deckId).then(deck => {
    const newDeck = {
      ...deck,
      questions: [
        ...deck.questions,
        newCard
      ]
    };  
    return submitDeck(newDeck, deckId);
  }); 
};

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Start Quiz!',
    body: "don't forget to start quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}