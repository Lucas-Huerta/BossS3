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
      <router-link to="Formulaire">
        <img src="../assets/add.png" alt="icone ajouter">
      </router-link>
      <p>
        Ajouter une information sur <span> Michael Jordan</span>
      </p>
      <hr>
    </div>
    <footer>
      <div class="footerPremCol">
        <p>
          Exercice réalisé dans le
          cadre d'un projet pédagogique
          au département MMI de Montbéliard.
        </p>
      </div>
      <div class="footerDeuxCol">
        <h2>
          Pages
        </h2>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="Biographie">Biographie</router-link></li>
          <li><router-link to="Realisation">Réalisation</router-link></li>
          <li><router-link to="Formulaire">Ajouter</router-link></li>
        </ul>
      </div>
      <div class="footerTroisCol">
        <h2>Contact</h2>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: "Biographie"
}
</script>

<style scoped>

.section-1{
  width: 100vw;
  height: 100vh;
  margin-top: 0;
  background-image: url("../assets/imgBioRogner.png");
  background-size: cover;
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

.section-4 hr{
  width: 40vw;
  border: white 1px solid;
}

/*FOOTER*/

footer{
  background-color: #1F1F1F;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
}

footer a{
  color: white;
}

footer ul{
  padding: 0;
}

footer div{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footerPremCol{
  display: flex;
  margin-top: 10vh;
  width: 20vw;
}

.footerPremCol p{
  width: 20vw;
}

.footerDeuxCol{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  text-align: center;
}

.footerTroisCol{
  width: 20vw;
}

</style>
