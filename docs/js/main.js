import 'babel/polyfill';
import onStats from './onStats';

const run = async () => {
  try {
    if (document.querySelector('.stats')) {
      onStats(stats => {
        document.querySelector('.stats-forks span').innerText = stats.forks;
        document.querySelector('.stats-stars span').innerText = stats.watchers;
        document.querySelector('.stats-subscribers span').innerText = stats.subscribers;
        document.querySelector('.stats-open-issues span').innerText = stats.openIssues;
      });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
  }
};

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
