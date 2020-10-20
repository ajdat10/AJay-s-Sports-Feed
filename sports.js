
const SPORTS_LIST_URL = `https://www.thesportsdb.com/api/v1/json/1/all_sports.php`

const getSportsLeague = async () =>{
    try{ 
        const response = await axios.get(SPORTS_LIST_URL)
        buildDropdown(response.data)
    //  console.log(response.data) //IT WORKS!!!! Display an array of sports 
    }catch(error){
        console.log(error)
    }
}
    const buildDropdown = (data) => {
        const dropdownDiv = document.querySelector('.dropdown')
        const dropdown = document.createElement('select')
        // console.log(typeof data)
        data.sports.forEach(sports => {
            console.log(sports)
            let optionElement = document.createElement('option')
            optionElement.innerText = `${sports.strSport}`
            optionElement.setAttribute('value', sports.strSport)
            dropdown.appendChild(optionElement)
        })
        dropdownDiv.appendChild(dropdown)
    }
    

window.onload = getSportsLeague
