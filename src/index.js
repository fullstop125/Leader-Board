import { getData, addScore } from './modules/getData.js';
import { refresh, addData } from './modules/getElements.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  refresh.addEventListener('click', () => {
    getData();
  });
});

addData.addEventListener('click', () => {
  const userName = document.getElementById('user-name').value;
  const userScore = document.getElementById('user-score').value;
  const data = {
    user: userName,
    score: userScore,
  };
  addScore(data);

  document.getElementById('user-name').value = '';
  document.getElementById('user-score').value = '';
});