	const input=document.getElementById("input");
	const searchBtn=document.getElementById("button")
	const result=document.getElementById("result")

searchBtn.addEventListener("click",()=>{
		const country=input.value;

		const url=`https://restcountries.com/v3.1/name/${country}?fullText=true`
		 fetch(url)
		.then(response=>response.json())                                                                                     
		.then(data=>{
        const language=Object.values(data[0].languages).join(" | ")

result.innerHTML=`
	<div class="first-section">
			<img src="${data[0].flags.png}"
			<h3 class="info">${data[0].name.common}</h3>
			  </div>
			   <div class="second-section">
			<br>
			<br>
			  <h2 >Capital:<span>${data[0].capital[0]}</span></h2>
			<h2>Population: <span>${data[0].population}</span></h2>
			<h2>Continent: <span>${data[0].continents[0]}</span></h2>
			<h2>Area: <span>${data[0].area}</span></h2>
			<h2>Language: <span>${language}</span></h2>
</div>
`
		})
		.catch(err=>{
			   if(input.value.length===0){
				result.innerHTML=`<h2 id="error">The input feild can not be empty</h1>`
				}
				else{
					result.innerHTML=`<h2 id="error">Please enter a valid contry name</h1>`
				}
	})
		  })
