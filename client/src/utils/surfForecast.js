//***This file deprecated.  This was the code for my weather app that I converted to the stormglass api to fetch current noaa buoy conditions for each of our surf spots in the db */



// // // const searchSurfForecastButton = document.getElementById("search-by-city-button");//search button
// // // const clearCityHistoryButton = document.getElementById("clear-history-btn");//currently not used
// // // const currentSurfReportElement = document.getElementById("current-surf-report");//element to house api data
// const timeStamp = new Date().getTime();//included this in case we want to create unique api fetch ids
// let surfSpot = "";//defining surfSpot as empty string
// let lat = 0;//defining latitude as number 0
// let lng = 0;//defining longitude as number 0
// let params = "swellHeight,swellPeriod,swellDirection,windSpeed,windDirection";//data fields to be returned from stormglass api fetch
// let source = "noaa";//source of data @ stormglass.  There are several options but I'm familiar with NOAA (National Oceanographic & Atmospheric Admin.)
// // let currentSurfSpot = ""; 
// // // let cityHistoryArr = [];

// // //define ranges within the numerical points of the compass as the 16 cardinal compass directions (N, NNW, NW, WWW, W, etc...)
// function getCardinalDirection(degrees) {
//     const degreeRanges = [
//         { direction: "N", range: [0, 11.25] },
//         { direction: "NNE", range: [11.25, 33.75] },
//         { direction: "NE", range: [33.75, 56.25] },
//         { direction: "ENE", range: [56.25, 78.75] },
//         { direction: "E", range: [78.75, 101.25] },
//         { direction: "ESE", range: [101.25, 123.75] },
//         { direction: "SE", range: [123.75, 146.25] },
//         { direction: "SSE", range: [146.25, 168.75] },
//         { direction: "S", range: [168.75, 191.25] },
//         { direction: "SSW", range: [191.25, 213.75] },
//         { direction: "SW", range: [213.75, 236.25] },
//         { direction: "WSW", range: [236.25, 258.75] },
//         { direction: "W", range: [258.75, 281.25] },
//         { direction: "WNW", range: [281.25, 303.75] },
//         { direction: "NW", range: [303.75, 326.25] },
//         { direction: "NNW", range: [326.25, 348.75] },
//         { direction: "N", range: [348.75, 360] },
//     ];

//     for (let i = 0; i < degreeRanges.length; i++) {
//         if (degrees >= degreeRanges[i].range[0] && degrees < degreeRanges[i].range[1]) {
//             return degreeRanges[i].direction;
//         }
//     }
//     return "N"; // default direction if degrees is not within any of the defined ranges
// }

// export const getSurfConditions = (surfSpot) => {

// // function handleSearchButton(event) {
// //     event.preventDefault();

//     // surfSpot = document.getElementById("searched-city-input").value;

//     // Hardcoding the names and coordinates is def not an ideal solution.  However, because this is not part of the MVP I didn't want to spend any additional time on this nice to have accessory API call.  Better to focus efforts on hitting the actual criteria.

//     //********This switch case is the dropdown menu*****
//     //And whatever you pick will send the hard-coded coordinates of that location to the api in getSurfReport() below

//     if (surfSpot) {//if surfSpot is true (clicked)
//         switch (surfSpot) {//then given the surf spot entered in the input field
//             case "Ocean Beach"://Match with one of these cases
//                 getSurfReport(surfSpot, 37.75545, -122.5292);//To identify the coordinates and pass them as parameters along with the name of the spot to the API call function getSurfReport.  
//                 break;
//             case "Steamer Lane":
//                 getSurfReport(surfSpot, 41.37268, -71.2410);
//                 break;
//             case "Trestles":
//                 getSurfReport(surfSpot, 37.9226, -122.7399);
//                 break;
//                 case "Other Surf Spots here":
//                 getSurfReport(surfSpot, 37.9226, -122.7399);
//                 break;
//                 // case "Add a New Spot"://
//                 // addNewSpot(params, here);
//                 // break;
//             default:
//                 prompt("Report Unavailable");
//         }
//     } else {
//         prompt("Surf spot search field required");
//     }
// }

// async function getSurfReport(surfSpot,lat,lng) {//function that accepts the 3 parameters from above and fetches data based on their values (lat & lng are the functionals here) plus other defined vars params & source
  
//     const response = await fetch(
//         `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&source=${source}&timestamp=${timeStamp}`,

//         {
//             headers: {
//                 Authorization:
//                     "5c5365e4-a940-11ed-a138-0242ac130002-5c53665c-a940-11ed-a138-0242ac130002",//API key
//             },
//         }
//     );

//     const surfReport = await response.json();//defining api response as json object
//     console.log(surfReport)
//     // currentSurfSpot = surfSpot; // Assign the value of surfSpot to currentSurfSpot
//     renderSurfForecast(surfReport);//passes data to renderSurfForecast
//     return surfReport;
// }

// function renderSurfForecast(surfReport) {

//     if (surfReport && surfReport.hours && surfReport.hours.length > 0) {
//         const currentTimePeriod = surfReport.hours[0];
//         const currentSwellHeight = Math.ceil(3.28 * currentTimePeriod.swellHeight.noaa);
//         const currentSwellPeriod = Math.ceil(currentTimePeriod.swellPeriod.noaa);
//         const currentSwellDirection = currentTimePeriod.swellDirection.noaa;
//         const currentWindSpeed = Math.ceil(currentTimePeriod.windSpeed.noaa);
//         const currentWindDirection = currentTimePeriod.windDirection.noaa;
//         const currentSurfReportHTML =
//             `<h2>${surfSpot}</h2>
//       <p>Swell Height: ${currentSwellHeight}ft.</p>
//       <p>Swell Period: @ ${currentSwellPeriod} secs</p>
//       <p>Swell Direction (of origin): ${getCardinalDirection(currentSwellDirection)}</p>
//       <p>Wind: ${currentWindSpeed} mph from the ${getCardinalDirection(currentWindDirection)}</p>`

// //     //     currentSurfReportElement.innerHTML = currentSurfReportHTML;
// //     // } else {
// //     //     currentSurfReportElement.innerHTML = "No surf report available";
// //     // }
// // }

// // searchSurfForecastButton.addEventListener("click", handleSearchButton);

// // };
// // }
