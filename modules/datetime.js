// eslint-disable-next-line import/no-unresolved
import { DateTime } from '../../node_modules/luxon/src/luxon.js';
export default function getDateTime() {
  const todaypar = document.getElementById('date');
  const dt = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  todaypar.innerHTML = dt;
}

getDateTime();