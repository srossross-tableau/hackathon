import { takeLatest, put } from 'redux-saga/effects';

function* fetchMeasures() {
  yield put({ type: 'data.measures.set',
    measures: [
    { name: 'Amount', type: 'number', colId: 'amount' },
    ] });
}

function* fetchDimensions() {
  yield put({ type: 'data.dimensions.set',
    dimensions: [
    { name: 'Category', type: 'string', colId: 'cat' },
    ] });
}

function* dataSaga() {
  console.log('dataSaga called');
  yield takeLatest('data.measures.fetch', fetchMeasures);
  yield takeLatest('data.dimensions.fetch', fetchDimensions);
}

export default dataSaga;
