import { all } from "redux-saga/effects";
import { WatcherEcommerceApp } from '../redux/ecommerce'
import { WatcherChatApp } from '../redux/chap-app'
import { WatcherEmailApp } from '../redux/email'
import { watchTodoList } from '../redux/todo';

export default function* rootSagas() {
    yield all([
        WatcherEcommerceApp(),
        WatcherChatApp(),
        WatcherEmailApp(),
        watchTodoList()
    ])
}