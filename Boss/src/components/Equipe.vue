<template>
  <div>
    <div class="section-1">
      <p>
        Les Bulls de Chicago sont une franchise professionnelle
        de basketball basée à Chicago. Fondée le 26 janvier 1966,
        l'équipe est membre de la ligue majeure de basket-ball
        américain. Elle est fréquemment dénommé par ses initiales
        UC. Sa mascotte est <span>Benny le Taureau</span>.
      </p>
    </div>
    <div class="section-2" v-for="donnee in donnees" :key="donnee.id">
      <img v-bind:src="donnee.imgBulls" alt="img">
      <p>
        {{ donnee.textePalmares }}
      </p>
      <img v-bind:src="donnee.imgEquipe" alt="Jordan qui smash">
      <p>
        {{donnee.texteSaison }}
      </p>
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
  name: "Equipe",

  data() {
    return {
      donnees: []
    }
  },

  created() {
    axios.get('static/Equipe.json')
      .then(function (response) {
        console.log(response.data);
        this.donnees = response.data;
      }.bind(this))
      .catch(function (error){
        console.log(error);
      })
  }
}
</script>

<style scoped>

.section-1{
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/imgEquipe.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.section-1 p{
  color: white;
  width: 30vw;
  padding-top: 40vh;
  padding-left: 10vw;
}

.section-2{
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}

.section-2 img:first-of-type{
  width: 30vw;
  height: auto;
}

.section-2 img:last-of-type{
  width: 50vw;
  height: auto;
}

.section-2 p{
  margin-bottom: 10vh;
  width: 70vw;
  text-align: center;
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
