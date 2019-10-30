import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actionTypes from '../actions/actionTypes'; 
import * as actions from '../actions/index';
import { fetchIngredientsFailed } from '../actions/burgerBuilder';

export function* initIngredientsSaga(action) {

	try {
		const res = yield	axios.get('https://burger-app-49051.firebaseio.com/ingredients.json');
		yield put(actions.setIngredients(res.data));
	} catch(err) {
		yield put(actions.fetchIngredientsFailed());
	}
}