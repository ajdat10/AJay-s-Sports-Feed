
const SPORTS_LIST_URL = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4391`

const getNFL = async () =>{
    try{ 
        const response = await axios.get(SPORTS_LIST_URL)
        displayNFL(response.data)
        //  console.log(response.data) //IT WORKS!!!! Display an array of sports 
    }catch(error){
        console.log(error)
    }
}
const displayNFL = (data) =>{
    
    const displayDiv = document.querySelector('.myData')
    for (let i = 0; i< data.leagues.length; i++){
        
        console.log(data.leagues[i].strSport)
    const nflDiv = document.createElement('div')
    nflDiv.innerHTML = `${data.leagues[i].strSport}`
   
    
    

   displayDiv.appendChild(nflDiv)
    }
// getNFL()
}

window.onload = getNFL()
   
//     const buildDropdown = (data) => {
//         const dropdownDiv = document.querySelector('.dropdown')
//         const dropdown = document.createElement('select')
//         // console.log(typeof data)
//         data.sports.forEach(sports => {
//             console.log(sports)
//             let optionElement = document.createElement('option')
//             optionElement.innerText = `${sports.strSport}`
//             optionElement.setAttribute('value', sports.strSport)
//             dropdown.appendChild(optionElement)
//         })
//         dropdownDiv.appendChild(dropdown)
    // }
    

// window.onload = getSportsLeague
