
const SPORTS_LIST_URL = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4391`
const TEAM_LIST_URl = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391`

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
        
        // console.log(data.leagues[i].strSport)
    const nflDiv = document.createElement('div')
    nflDiv.innerHTML = `${data.leagues[i].strBadge}
    ${data.leagues[i].strDescriptionEN}`
   
    
    

   displayDiv.appendChild(nflDiv)
    }
// getNFL()
}
const getNflTeams = async () => {
    try{
        const response = await axios.get(TEAM_LIST_URl)
        console.log(response.data)
        buildDropdown (response.data)
    }catch(error){
        console.log(error)
    }
}
    const buildDropdown = (data) => {
        const dropdownDiv = document.querySelector('.dropdown')
        const dropdown = document.createElement('select')
        // console.log(typeof data)
        data.teams.forEach(teams => {
            console.log(teams)
            let optionElement = document.createElement('option')
            optionElement.innerText = `${teams.strTeam}`
            optionElement.setAttribute('value', teams.strTeam)
            dropdown.appendChild(optionElement)
        })
        dropdownDiv.appendChild(dropdown)
    }
    


window.onload = getNflTeams()
   

// window.onload = getSportsLeague
