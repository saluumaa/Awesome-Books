import { DateTime } from '../node_modules/luxon/src/luxon.js';

const getDateTime = () => {
  const todaypar = document.getElementById('date');
  const dt = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  todaypar.innerHTML = dt;
};

getDateTime();
export default getDateTime;