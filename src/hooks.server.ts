import * as Sentry from '@sentry/sveltekit';
import { error as err } from '@sveltejs/kit';
import type { HandleServerError } from '@sveltejs/kit';

Sentry.init({
  /*...*/
});

export const handleError = (({ error, event }) => {
  // example integration with https://sentry.io/
  Sentry.captureException(error, { extra: { event } });

  // **NOTE
  // unknown 타입은 unknown 또는 any 타입에만 할당 가능
  // any 타입은 모든 타입을 받을 수 있다 (제한이 없다)

  // call `error.html`
  // throw err(404, 'Hello, ' + error);
  throw err(404, {
    code: '404',
    message: 'Hello, ' + error,
  }); // App.Error
}) satisfies HandleServerError;
