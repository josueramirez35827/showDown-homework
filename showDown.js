function fight() {
  let hero = prompt("Enter Your Hero Name:");
  let monster = prompt("Enter Your Monsters Name:");

  let villainHealth = 50;
  let heroHealth = 50;

  while (heroHealth > 0 && villainHealth > 0) {
    let heroDice = Math.floor(Math.random() * 20);
    let monsterDice = Math.floor(Math.random() * 20);



    if (heroDice == 1 || heroDice == 2) {
      heroHealth -= 5;
      alert(`${hero} hit themselves! ${hero}'s health is at ${heroHealth}.`);
    }
    else if (heroDice >= 3 && heroDice <= 10) {
      villainHealth -= 0;
      alert(`${hero} missed. ${monster}'s health is at ${villainHealth}.`);
    }
    else if (heroDice >= 11 && heroDice <= 18) {
      villainHealth -= 10;
      alert(`${hero} hit. ${monster}'s health is at ${villainHealth}.`);
    }
    else (heroDice == 19 || heroDice == 20)
    villainHealth -= 20;
    alert(`${hero} got a critical hit! ${monster}'s health is at ${villainHealth}.`);
  }



  if (monsterDice == 1 || monsterDice == 2) {
    villainHealth -= 5;
    alert(`${monster} hit themselves! ${monster}'s health is at ${villainHealth}.`);
  }
  else if (monsterDice >= 3 && monsterDice <= 10) {
    heroHealth -= 0;
    alert(`${monster} missed. ${hero}'s health is at ${heroHealth}.`);
  }
  else if (monsterDice >= 11 && monsterDice <= 18) {
    heroHealth -= 10;
    alert(`${monster} hit. ${hero}'s health is at ${heroHealth}.`);
  }
  else (monsterDice == 19 || monsterDice == 20)
  heroHealth -= 20;
  alert(`${monster} got a critical hit! ${hero}'s health is at ${heroHealth}.`);
}



if (villainHealth <= 0 && villainHealth < heroHealth) {
  alert(`Congratulations! ${hero} defeated ${monster}, ${hero} is the winner!!!`);
}
else if (heroHealth <= 0 && heroHealth < villainHealth) {
  alert(`${monster} defeated ${hero}, better luck next time.`);
}

//Bonus 1
else (heroHealth && villainHealth == 0)
alert(`${monster} and ${monster} have defeated each other! There is no winner.`);