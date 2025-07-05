import './style.css'  
import { name, age, templateString } from './bases/01-types.ts' 
import { bulbasaur } from './bases/03-classes.ts'

const app =  document.querySelector<HTMLButtonElement>('#app')!

app.innerHTML = ` 
<h1>Hello ${name}! ${age}</h1>
<p>${templateString}</p>
<p>${bulbasaur.name}</p>
<p>${bulbasaur.getImageUrl}</p>
<img src="${bulbasaur.getImageUrl}" alt="${bulbasaur.name}>
` ;
