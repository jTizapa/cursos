import './style.css'  
import { name, age, isValid } from './bases/01-types.ts'

const app =  document.querySelector<HTMLButtonElement>('#app')!

app.innerHTML = ` 
<h1>Hello ${name}! ${age}</h1>
` ;