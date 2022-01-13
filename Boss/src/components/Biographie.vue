<template>
  <div>
    <div class="section-1">
      <p>
        Surnomé "le plus grand joueur de basket- ball
        de tous les temps", Michael Jordan à contribué
        à démocratiser le basket dans les années
        80 et, à battre tous les records dans ce sport.
      </p>
    </div>
    <div class="section-2">
      <p>
        Le numéro 23 dit Michael Jordan reste une icône dans le monde du sport,
        surtout du basket-ball. Grâce à lui, beaucoup de personnes ont
        pu trouver une passion et un modèle à suivre.
      </p>
      <h2>
        23
      </h2>
    </div>

    <div class="section-3">
      <h2>Histoire</h2>
      <div class="colonneGlobale">
        <div class="colonneGauche">
          <img src="../assets/smash.jpg" alt="image smash">
        </div>
        <div class="colonneDroite">
          <div>
            <h3>
              Age
            </h3>
            <h3>
              Taille
            </h3>
            <h3>
              Poids
            </h3>
            <h3>
              Surnom
            </h3>
            <h3>
              Date de naissance
            </h3>
          </div>
          <div>
            <p>
              58 ans
            </p>
            <p>
              1m 96
            </p>
            <p>
              98 kg
            </p>
            <p>
              Air Jordan
            </p>
            <p>
              17 février 1963
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-4">
      <img src="../assets/add.png" alt="icone ajouter">
      <p>
        Ajouter une information sur <span> Michael Jordan</span>
      </p>
      <hr>
    </div>
  </div>

</template>

<script>
export default {
  name: "Biographie"
}
</script>

<style scoped>

.section-1{
  width: 200vw;
  height: 100vh;
  background-image: url("../assets/imgBio.jpg");
  background-size: contain;
  background-repeat: no-repeat;
}

.section-1 p{
  width: 30vw;
  color: white;
  padding-top: 40vh;
  padding-left: 10vw;
}

.section-2{
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-2 p{
  text-align: center;
  width: 30vw;
}

.section-2 h2{
  color: white;
  margin: 0;
  font-size: 20em;
  -webkit-text-stroke: 5px #CE1141;
}

/*SECTION 3*/

.section-3{
  padding-top: 5vh ;
  background-color: #1F1F1F;
  color: white;
}

.section-3 h2{
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
}

.colonneGlobale{
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.colonneGauche{
  width: 40vw;
}

.colonneDroite{
  width: 40vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

.colonneDroite h3{
  margin: 10vh 0 0 0;
}

.colonneDroite p{
  margin: 10vh 0 0 0;
}

.colonneDroite div{
  margin: 0 5vw 0 0;
}

/*SECTION 4*/

.section-4{
  margin: 0;
  background-color: #1F1F1F;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.section-4 img{
  padding-top: 5vh;
  width: 5vw;
  height: auto;
}

.section-4 p{
  text-align: center;
  width: 20vw;
}

</style>
