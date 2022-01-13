<template>

  <div>
    <header>
      <h1>
        Michael Jordan
      </h1>
      <ul>
        <li>
          <a href="#" alt="Biographie">Biographie</a>
        </li>
        <li>
          <a href="#" alt="Réalisations">Réalisations</a>
        </li>
        <li>
          <a href="#" alt="Equipe">Equipe</a>
        </li>
        <li>
          <a href="#" alt="Ajouter">Ajouter</a>
        </li>
      </ul>
    </header>

    <div class="section-1">
      <div>
        <p>
          Surnomé "le plus grand joueur de basket- ball
          de tous les temps", Michael Jordan à contribué
          à démocratiser le basket dans les années
          80 et, à battre tous les records dans ce sport.
        </p>
        <button class="boutonRouge">
          <a href="#" alt="bouton en savoir plus">
           Découvir
          </a>
        </button>
      </div>
    </div>

    <div class="section-2">
      <div>
        <h2>
          A propos
        </h2>
        <p>
          Devenu une légende du sport, découvrer l'histoire
          incroyable de <span>Michael Jordan</span>. Une icône du monde du
          <span>basket-ball</span> et du <span>sport</span> à part entière. Mais aussi, un
          homme qui à su toucher le cœur de millions de personnes.
        </p>
        <div>
          <img src="../assets/basket-ball.png" alt="icone balle de basket">
          <img src="../assets/nike.png" alt="icone marque nike">
        </div>
      </div>
      <div>
        <img src="../assets/sectionInfos.jpg" alt="image section Infos">
      </div>
    </div>

    <div class="section-3">
      <img src="../assets/lancerBallonRogner.png" alt="image réalisations">
      <div>
        <h2>
          Ses realisations
        </h2>
        <p>
          Michael Jordan, à côté du sport était présent au sein
          de multitudes de mouvements. Il a par exemple créer
          une vraie mode et un réel mouvement autour du monde
          de la <span>basket</span>, avec Nike et la <span>Air Jordan 1</span>.
        </p>
      </div>
    </div>

    <div class="section-4">
      <h2>
        SON EQUIPE
      </h2>
      <img src="../assets/logoChicagoBulls.png" alt="logo Chicago Bulls">
      <p>
        Que serait devenu <span>Michal Jordan</span> sans son équipe de cœur,
        les <span>Chicago Bulls</span>. C'est avec cette équipe qu'il à remporté
        tous ses trophées. Etant rester dans ce club de 1984 à 1998, il a
        poussé cette équipe dans le podium du basket.
      </p>
    </div>
  </div>

</template>

<script>
export default {
  name: "Accueil"
}
</script>

<style scoped>

.section-1{
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/imgAccueil.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}

.section-1 div{
  color: white;
  width: 30vw;
  padding-top: 40vh;
  padding-left: 10vw;
}

.boutonRouge{
  margin-top: 5vh;
}

.boutonRouge a{
  color: white;
}

/*SECTION 2 */

.section-2{
  display: flex;
  width: 100vw;
  flex-direction: row;
  justify-content: center;
  margin: 10vh 0 0 0 ;
}

.section-2 h2{
  text-decoration: underline black;
}

.section-2 div:first-child{
  width: 40vw;
  display: flex;
  flex-direction: column;
}

.section-2 div:first-child div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.section-2 div:first-child img{
  width: 10vw;
  height: auto;
}

.section-2 div:last-child{
  width: 30vw;
  display: flex;
}

.section-2 img{
  width: 30vw;
  height: auto;
}

/*SECTION 3 */

.section-3{
  background-color: #1F1F1F;
  color: white;
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  text-align: right;
}

.section-3 h2{
  text-decoration: underline white;
}

.section-3 div{
  display: flex;
  flex-direction: column;
  width: 30vw;
}

.section-3 img{
  width: 30vw;
  height: auto;
  margin-bottom: 0;
}

/*SECTION 4*/

.section-4{
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-4 h2{
  text-decoration: underline black;
}

.section-4 p{
  text-align: center;
  width: 40vw;
}


</style>
