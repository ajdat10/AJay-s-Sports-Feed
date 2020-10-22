
const SPORTS_LIST_URL = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4387`
const TEAM_LIST_URl = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387`


const getNBA = async () =>{
    try{ 
        const response = await axios.get(SPORTS_LIST_URL)
        displayNBA(response.data)
        getNbaTeams(response.data)
     
        // console.log(response.data) //IT WORKS!!!! Display an array of sports 
    }catch(error){
        console.log(error)
    }
}
const displayNBA= (data) =>{
    
    const displayDiv = document.querySelector('.myData')
    for (let i = 0; i< data.leagues.length; i++){
        
        // console.log(data.leagues[i].strSport)
    const nbaDiv = document.createElement('div')
    // nbaDiv.innerHTML = `${data.leagues[i].strSports}
    // ${data.leagues[i].strDescriptionEN}`
   
    
    

   displayDiv.appendChild(nbaDiv)
    }

}
const getNbaTeams = async () => {
    try{
        const response = await axios.get(TEAM_LIST_URl)
        // console.log(response.data)
        buildDropdown (response.data)
    }catch(error){
        console.log(error)
    }
}
    const buildDropdown = (data) => {
        const dropdownDiv = document.querySelector('.dropdown')
        const dropdown = document.createElement('select')
        dropdown.addEventListener('change', nbaResults)
        // console.log(typeof data)
        data.teams.forEach(teams => {
            // console.log(teams)
            let optionElement = document.createElement('option')
            optionElement.innerText = `${teams.strTeam}`
            optionElement.setAttribute('value', teams.idTeam)
            dropdown.appendChild(optionElement)
        })
        dropdownDiv.appendChild(dropdown)
       
    }
    
    const nbaResults = async (event) => {
        // console.log(event.target.value)
        let idTeam = event.target.value
        const TEAM_CHOICE_URL =`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${idTeam}`
        try{
            const response = await axios.get(TEAM_CHOICE_URL)
            console.log(response)
            let scheduleData = response.data
            // console.log(scheduleData)        
            let formattedData ={
                teamName:scheduleData.strTeam, 
                scheudled: scheduleData.strEvent,
                location: scheduleData.strEventAlternate
                

            }
            console.log(formattedData)
        displayNbaResults(formattedData)
        }catch(error){
            console.log(error)
        }
    }
    const displayNbaResults = (scheduleData) => {
        let searchArea = document.querySelector('.search')
        let resultWrapper = document.createElement('div')
        let resultHeader = document.createElement('h1')
        let currentScheduleDisplay = document.createElement('h3')
        
        resultHeader.innerText= scheduleData.teamName
        currentScheduleDisplay.innerText = `The last few games this team played were: ${scheduleData.scheudled}`
        resultWrapper.className = 'search-result'
        
        
        resultWrapper.appendChild(resultHeader)
        resultWrapper.appendChild(currentScheduleDisplay)
        searchArea.appendChild(resultWrapper)
        

    }

window.onload = getNBA()


