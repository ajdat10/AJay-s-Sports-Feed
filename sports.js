const API_KEY ='1'
const SPORTS_LIST_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/all_sports.php`

const getSpotsLeague = async () =>{
    try{ const respones = await axios.get(SPORTS_LIST_URL)
        buildDropdown(respones.data)
    // console.log(respones.data) //IT WORKS!!!! Display an array of sports 
    }catch(error){
        console.log(error)
    }
    
}
// getSportsLeague
const buildDropdown = (data)=>{
    // const dropDownDiv = document.querySelector('.dropdown')
    const dropdown = document.createElement('select')
    data.array.forEach(league => {
        
    });
    // dropdown.addEventListener('chanage', getSpotsLeague)
    // data.array.forEach(league => {
    //     // console.log(league)
    // let optionElement = document.createElement('option')
    // optionElement.innerText = `${league.description}${league.league}`
    // optionElement.setAttribute('value', league.league)    
    // });
    // dropDownDiv.appendChild(dropdown)
}
window.onload = getSpotsLeague
