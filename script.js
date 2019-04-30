let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
let grantWins = 0;
let userDamage = 0;
let grantDamage = 0;
let game = prompt("Do you want to play? yes or no ");






if (game === "yes") {
    user = prompt("Choose your name", "Wang");
    while (grantWins <= 1 && userWins <= 3) {
        userDamage = Math.floor(Math.random() * 2) + 1;
        grantDamage = Math.floor(Math.random() * 2) + 1;
        if (grantHealth <= 0) {
            userWins++;
            grantHealth = 10;
        } else if (userHealth <= 0) {
            console.log(`you lose.`)
            break;
        } else if (userWins === 3) {
            console.log(`you win`);
            break;

        } else {

            console.log(`Grant has ${grantHealth = grantHealth - grantDamage} health left`);
            console.log(`Wang has ${userHealth = userHealth - userDamage} health left`);
        }

    }

}









