function iniciarTime(iniciaJogo: boolean) {
  var nome = 'Messi e amigos';
  //Royals 'Hoisting' KKKKK
  if (iniciaJogo) {
    let cidade = 'em Uberlândia';
  }

  console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(true);
