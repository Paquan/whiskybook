import { Signale } from 'signale';

const Logger = new Signale({ scope: 'Whiskybook' });

export function getLogger(...scope) {
  return Logger.scope(...['Whiskybook', ...scope].filter(Boolean));
}
