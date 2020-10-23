
const SPORTS_LIST_URL = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4387`
const TEAM_LIST_URl = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387`


const getNBA = async () =>{
    try{ 
        const response = await axios.get(SPORTS_LIST_URL)
        displayNBA(response.data)
        getNbaTeams(response.data)
     
       
    }catch(error){
        console.log(error)
    }
}
const displayNBA= (data) =>{
    
    const displayDiv = document.querySelector('.myData')
    for (let i = 0; i< data.leagues.length; i++){
        
     
    const nbaDiv = document.createElement('div')
   displayDiv.appendChild(nbaDiv)
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
        dropdown.addEventListener('change', nbaResults)
    
        data.teams.forEach(teams => {
            
            let optionElement = document.createElement('option')
            optionElement.innerText = `${teams.strTeam}`
            optionElement.setAttribute('value', teams.idTeam)
            dropdown.appendChild(optionElement)
        })
        dropdownDiv.appendChild(dropdown)
       
    }
    
    const nbaResults = async (event) => {
      
        let idTeam = event.target.value
        const TEAM_CHOICE_URL =`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${idTeam}`
        try{
            const response = await axios.get(TEAM_CHOICE_URL)
   
            let eventData = response.data.results
             
           const displayNbaResults = (data) =>{
               let searchArea = document.querySelector('.search')
               let resultHeader = document.querySelector('.title')
               
               resultHeader.innerText = `Since the season is over, these are the last five games played....`

               for (let i = 0; i < data.length; i++){
                let currentEventDisplay = document.createElement('h5')
                let gameDate = document.createElement('h6')
                gameDate.innerText = `${data[i].dateEvent}`
                currentEventDisplay.innerText =  `${data[i].strEvent}`
                resultHeader.appendChild(currentEventDisplay)
                resultHeader.appendChild(gameDate)

            }
                
            searchArea.appendChild(resultHeader)
            }

        displayNbaResults(eventData)
        }catch(error){
            console.log(error)
        }
    }


window.onload = getNBA()


