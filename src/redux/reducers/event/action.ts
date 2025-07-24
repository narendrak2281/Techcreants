import {put, delay, select, takeLatest} from 'redux-saga/effects';
import {
  eventRegisterRequest,
  fetchEventRequest,
  markAttendanceRequest,
  markQrCodeAttendanceRequest,
  setEventDetails,
} from '.';
import {handleApiRequest} from '../../../apiCalls/handleSagaRequest';
import {
  GET_EVENT_DETAILS,
  MARK_ATTENDACE,
  REGISTER_EVENT,
} from '../../../apiCalls/endpoints';
import {Event} from '../../../core/Main/Home/type';
import {SagaIterator} from 'redux-saga';
import { showSucessMessage } from '../../../common/utils';

function* eventSaga() {
  function* onSuccess(data: Event[]) {
    yield put(setEventDetails(data));
  }
  function* onError(error: any) {
    console.log('Events not fetched', error);
  }
  yield* handleApiRequest('GET', GET_EVENT_DETAILS, {}, onSuccess, onError);
}

function* registerEventSaga(action: {
  type: string;
  payload: {event_id: number};
}): SagaIterator {
  const {event_id} = action.payload;
  function* onSuccess(data: any) {
    showSucessMessage("Event Registered successfully")
    // yield put(setRegister(true));
  }
  function* onError(error: any) {
    console.log('Error :', error);
  }
  yield* handleApiRequest(
    'POST',
    REGISTER_EVENT,
    {event_id: event_id},
    onSuccess,
    onError,
  );
}

function* markAttendanceSaga(action: {
  type: string;
  payload: {event_id: number};
}): SagaIterator {
  const {event_id} = action.payload;

  function* onSuccess(data: any) {
    showSucessMessage("Event attendance marked")
    // yield put(setAttendance(true));
  }
  function* onError(error: any) {
    console.log('Error :', error);
  }
  yield* handleApiRequest(
    'PATCH',
    MARK_ATTENDACE,
    {event_id: event_id},
    onSuccess,
    onError,
  );
}



function* markQRCodeAttendanceSaga(action: {
  type: string;
  payload: {event_id: number,event_coordinator_id:number};
}): SagaIterator {
  const {event_id,event_coordinator_id} = action.payload;
  

  function* onSuccess(data: any) {
    showSucessMessage("Event attendance marked")
    // yield put(setAttendance(true));
  }
  function* onError(error: any) {
    console.log('Error :', error);
  }
  yield* handleApiRequest(
    'PATCH',
    MARK_ATTENDACE,
    {event_id: event_id,event_coordinator_id:event_coordinator_id},
    onSuccess,
    onError,
  );
}

// Watcher Saga: Listens for Event Actions
export function* watchEventSaga() {
  yield takeLatest(fetchEventRequest.type, eventSaga);
  yield takeLatest(eventRegisterRequest.type, registerEventSaga);
  yield takeLatest(markAttendanceRequest.type, markAttendanceSaga);
  yield takeLatest(markQrCodeAttendanceRequest.type, markQRCodeAttendanceSaga);
}
