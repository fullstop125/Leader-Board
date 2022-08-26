import { scores } from './getElements.js';

const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/X4mL8Vzhgd1d2gWBxpQW/scores',
  );
  const { result } = await response.json();
  let string = '';
  result.map((score) => {
    string += ` <tr><td class="scores"> ${score.user}</td>
                <td class="scores">${score.score}</td> </tr>
    `;
    return score;
  });
  scores.innerHTML = string;
};

const addScore = async (score) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/X4mL8Vzhgd1d2gWBxpQW/scores',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    },
  );
};

export { getData, addScore };
