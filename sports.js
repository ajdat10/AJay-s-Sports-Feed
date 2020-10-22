
const SPORTS_LIST_URL = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4391`
const TEAM_LIST_URl = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391`


const getNFL = async () =>{
    try{ 
        const response = await axios.get(SPORTS_LIST_URL)
        displayNBA(response.data)
        getNbaTeams(response.data)

    }catch(error){
        console.log(error)
    }
}
const displayNBA = (data) =>{
    
    const displayDiv = document.querySelector('.myData')
    for (let i = 0; i< data.leagues.length; i++){
           
    const nflDiv = document.createElement('div')
    displayDiv.appendChild(nflDiv)
    }
}
const getNbaTeams = async () => {
    try{
        const response = await axios.get(TEAM_LIST_URl)
        buildDropdown (response.data)
    }catch(error){
        console.log(error)
    }
}
const buildDropdown = (data) => {
    const dropdownDiv = document.querySelector('.dropdown')
    const dropdown = document.createElement('select')
    dropdown.addEventListener('change', NflResults)
    data.teams.forEach(teams => {
        let optionElement = document.createElement('option')
        optionElement.innerText = `${teams.strTeam}`
        optionElement.setAttribute('value', teams.idTeam)
        dropdown.appendChild(optionElement)
    })
    dropdownDiv.appendChild(dropdown)   
}

const NflResults = async (event) => {
    let idTeam = event.target.value
    const TEAM_CHOICE_URL =`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${idTeam}`
    try{
        const response = await axios.get(TEAM_CHOICE_URL)
            
        let scheduleData = response.data.events       
        const displayNflResults = (data) => { 
            let searchArea = document.querySelector('.search')
            let resultHeader = document.querySelector('.title')
                
            resultHeader.innerText = 'The next five games scheduled....'
            
            for (let i = 0; i < data.length; i++){
                let currentScheduleDisplay = document.createElement('h5')
                let gameDate = document.createElement('h6')
                gameDate.innerText = `${data[i].dateEvent}`
                currentScheduleDisplay.innerText =  `${data[i].strEvent}`
                resultHeader.appendChild(currentScheduleDisplay)
                resultHeader.appendChild(gameDate)
            }
                
            searchArea.appendChild(resultHeader)
            }

        displayNflResults(scheduleData)
        }catch(error){
            console.log(error)
        }
    }
window.onload = getNFL()


