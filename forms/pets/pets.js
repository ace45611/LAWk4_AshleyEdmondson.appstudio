//Create an array named 'petNames': 
let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
console.log(`The pet names are: ${petNames}.`)

//Create a second new array named 'withSal'
//Add 'Sal' to the end of the new array
let withSal = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam', 'Sal']
console.log(`The new pet names include: ${withSal}.`)

//Add 'Sal' to the end of the 'patNames' array:
petNames.push('Sal')
console.log(`The new petNames array includes the names: ${petNames}`)

//Get the third pet name from the 'petNames' array:
thirdPetName = petNames[2]
console.log(`The third pet is named: ${thirdPetName}.`)

//Get the count of the number of items in the array petNames: 
petNamesLength = petNames.length
console.log(`The array has ${petNamesLength} names in it.`)

//Remove the last item from petNames:
petNames.pop()
console.log(`The new pet names inlcude: ${petNames}.`)
