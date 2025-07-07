import './style.css'   
import { charmander } from './bases/04-injection';

const app =  document.querySelector<HTMLButtonElement>('#app')!

app.innerHTML = ` 
 <h1>Hello ${charmander.name}!</h1>
 <p>${charmander.imageUrl}</p>
 <img src="${charmander.imageUrl}" alt="${charmander.name}">
` ;
