let allNumbers = []

while (true) {

    let randomNumber = Math.floor(Math.random() * 20) + 1

    if (!allNumbers.includes(randomNumber)) {

        allNumbers.push(randomNumber)

    }

    console.log(randomNumber)
    console.log(allNumbers)

    if (allNumbers.length >= 20) {
        
        break

    }

}
