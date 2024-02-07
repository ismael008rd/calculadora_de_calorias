
const form = document.querySelector('#form')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
   console.log('submitado')

  

   const idade = getInputNumberValue('age')
   const peso = getInputNumberValue('weight')
   const altura =Number(document.querySelector('#height').value*100)

  
   const gender = getSelectValue('gender')
   const activeLevel = getSelectValue("activity_level")
   
   console.log(altura)
     
  


   

   
   console.log(gender)

   console.log( typeof idade)
   console.log(peso)
   console.log(altura)

   const tmb= Math.round(
    gender==='female'
    ?(655+(9.6 *peso)+(1.8*altura)-(4.7*idade)):(65+(13.7 *peso)+(5*altura)-(6.8*idade))
   )


   const maintenance = Math.round(tmb* Number( activeLevel))
   const loseWeight= maintenance-450
   const gainWeight= maintenance+450

   console.log(maintenance)
   const layout = `
   <ul>
   <li>Seu metabolismo é de <strong>${tmb}calorias</strong></li>
   <li>
     Para manter o seu peso precisa consumir em média
     <strong>${maintenance} calorias</strong>
   </li>
   <li>
     Para peder peso você precisa consumir em média
     <strong>${loseWeight} calorias</strong>
   </li>
   <li>
     Para ganhar peso você precisa em média
     <strong>${gainWeight} calorias</strong>
   </li>
   </ul>
   `

   const result = document.querySelector('.result-content')
   result.innerHTML=layout
})

function getSelectValue(id){
    const select = document.getElementById(id)
      return select.options[select.selectedIndex].value
   }

   function getInputNumberValue(id){
    return Number(document.getElementById(id).value)
   }
