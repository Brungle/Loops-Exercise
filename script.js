for (i = 1; i < 8; i++){
    console.log(i);
  }

  for (i = 5; i < 26; i+=4){
    console.log(i);
  }

  const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`,
  ]

  for (char of wizards){
   

    for (harryPooper of char){
      console.log(harryPooper);
    }
  }


  let harryPotterMovies = 0;
while (harryPotterMovies <= 8){
  console.log(harryPotterMovies);
  harryPotterMovies++;
}