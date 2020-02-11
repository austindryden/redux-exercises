// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// {
//     movieCount:999
// }
// const ADD_TO_MOVIE_COUNT = "ADD_TO_MOVIE_COUNT";
// {
//     type :ADD_TO_MOVIE_COUNT
// }

import { createStore, combineReducers } from 'redux';

const UPDATE_LUNCH_ITEM = "UPDATE_LUNCH_ITEM";
const UPDATE_DESSERT_ITEM = "UPDATE_DESSERT_ITEM";
const INCREMENT_COFFEE_COUNT = 'INCREMENT_COFFEE_COUNT';
const defaultLunchState = {
    lunch : "fried chicken",
    dessert : "banana pudding"
};

function actionUpdateLunch(itemName){
    return {type: UPDATE_LUNCH_ITEM,
            payload:{
                itemName
            }}
}

function actionUpdateDessert(itemName){
    return {type: UPDATE_DESSERT_ITEM,
            payload:{
                itemName
            }}
}

function actionIncrementCoffee(itemName){
    return {type: INCREMENT_COFFEE_COUNT}
}

function lunch(state= defaultLunchState, action){
    let newState = {...state};
    switch(action.type){
        case UPDATE_LUNCH_ITEM:
            newState.lunch = action.payload.itemName;
            break;
        default:
            break;
    }
    return newState;
}

const defaultCoffeeState = 1;

function coffeeCount(state=defaultCoffeeState, action){
    let newState =state;
    switch(action.type){
        case INCREMENT_COFFEE_COUNT:
            newState+= 1;
            break;
        default:
            break;
    }
    return newState;
}

const defaultDessertState = 'tapioca';

function dessert(state= defaultDessertState, action){
    let newState = state;
    switch(action.type){
        case UPDATE_DESSERT_ITEM:
            newState= action.payload.itemName;
            break;
        default:
            break;
    }
    return newState;
}

const rootReducer = combineReducers({
    lunch,
    coffee: coffeeCount,
    dessert
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

store.subscribe (() =>{
    //for debugging, mostly.
    console.log(store.getState());
});

store.dispatch(actionUpdateLunch("rice bowl"));