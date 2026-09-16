
const progressBar = document.getElementById('progressBar');
const yearEl = document.getElementById('year');

function updateProgress(){
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  const value = max > 0 ? (doc.scrollTop / max) * 100 : 0;
  progressBar.style.width = value + '%';
}
yearEl.textContent = new Date().getFullYear();
window.addEventListener('scroll', updateProgress, {passive:true});
updateProgress();
