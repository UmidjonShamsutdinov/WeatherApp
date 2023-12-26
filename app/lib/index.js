



export const weatherApi = async(location)=>{
    const API_KEY = "644f6ce0ca9e401ebb891832211707";    
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`)
    const data =  await response.json()
    return data
}


