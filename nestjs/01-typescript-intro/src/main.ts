import './style.css'  
import { name, age, templateString } from './bases/01-types.ts'
import { bulbasaur, charmander } from './bases/02-objects.ts'

const app =  document.querySelector<HTMLButtonElement>('#app')!

app.innerHTML = ` 
<h1>Hello ${name}! ${age}</h1>
<p>${templateString}</p>
<p>${bulbasaur.name}</p>  
<p>${charmander.name}</p>
<p></p>${charmander.age}</p>
` ;
