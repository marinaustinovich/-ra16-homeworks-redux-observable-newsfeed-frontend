import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError, retryWhen, delay } from 'rxjs/operators';
import { NEWS_REQUEST, LAST_NEWS_REQUEST } from '../actions/actionTypes';
import { newsSuccess, lastNewsSuccess } from '../actions/actionCreators';
import { throwError } from 'rxjs';

export const uploadNewsEpic = action$ => action$.pipe(
    ofType(NEWS_REQUEST),
    switchMap(o => 
        ajax.getJSON(process.env.REACT_APP_NEWS_URL).pipe(
            map(o => newsSuccess(o)),
            catchError(e => {
                // Retry the request after a delay
                return throwError({ error: e, delay: 3000 });
            }),
            retryWhen(errors => errors.pipe(delay(3000)))
        )
    ),
);

export const uploadLastNewsEpic = action$ => action$.pipe(
    ofType(LAST_NEWS_REQUEST),
    switchMap(action => {
        const { lastId } = action.payload;

        let url = process.env.REACT_APP_NEWS_URL;
        if (lastId !== '') {
            url += `?lastSeenId=${lastId}`;
        }
        return ajax.getJSON(url).pipe(
            map(o => lastNewsSuccess(o)),
            catchError(e => {
                // Retry the request after a delay
                return throwError({ error: e, delay: 3000 });
            }),
            retryWhen(errors => errors.pipe(delay(3000)))
        );
    })
);
