const API_KEY = '7357ed4da67c6f05462105e3cb413c302f38d0b7'
const WORKOUT_URL = 'https://wger.de/api/v2/workout/ '
console.log('hello world')


const getQuote = async() => {
    console.log('first')
    try{
        const response = await axios.get(API_KEY)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
 }
 const buildDropdown = (data)=>{
     const dropDownDiv = document.querySelector('.dropdown')
     const dropdown = document.createElement('select')
     dropdown.addEventListener('change', get)
 }  

 const getWorkoutData = async (event)=>{
     let workout = event.target.value
      const WORKOUT_DATA_URL = "https://wger.de/api/v2/workout/"
 }