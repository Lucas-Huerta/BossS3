<template>

  <div class="main">
    <h1>
      Ajouter un nouvel article
    </h1>

    <form @submit.prevent="creer">
      <div class="ligne">
        <input type="text" placeholder="Nom" v-model="nom">
        <input type="text" placeholder="Prenom" v-model="prenom">
      </div>
      <input type="text" placeholder="Email" class="mail" v-model="email">
      <div class="ligne">
        <input type="text" placeholder="Intitulé" v-model="intitule">
        <input type="text" placeholder="Catégorie" v-model="categorie">
      </div>
      <input type="text" placeholder="Texte" class="text" v-model="texte">

      <button class="boutonRouge">
          Ajouter
      </button>
    </form>

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
  name: "Formulaire",

  data () {
    return {
      // imageData: param.imageParticipant, // Image par défaut
      participant :{      // Structure d'un participant
        nom:       null,
        prenom:    null,
        email :    null,
        intitule:  null,
        categorie: null,
        texte: null,
      },
    }
  },

  created() {
    axios.get('static/Biographie.json')
      .then(function (response) {
        console.log(response.data);
        this.donnees = response.data;
      }.bind(this))
      .catch(function (error){
        console.log(error);
      })
  },

  methods :{
    creer: function(){
      // Requête Ajax pour Upload image
      axios({
        method: 'post',
        url : 'static/Biographie.json',
      }).then(function (response) {
        // Création du participant
        // Formatage de la date de naissance
        axios({
          method: 'post',
          data :  {
            fields : {
              nom :         this.nom,
              prenom :      this.prenom,
              email :       this.email,
              intitule :    this.intitule,
              categorie :   this.categorie,
              texte:        this.texte
            }
          },
          // url: param.host+'participant',
        }).then(function (response) {
          this.$router.push('/Biographie');
        }.bind(this))
          .catch(error => {
            console.log("ERREUR création infos");
            console.log(error)
          })
      })
    }
  }
}
</script>

<style scoped>

.main{
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
}

h1{
  color: white;
  text-align: center;
  margin: 0;
  -webkit-text-stroke: 1px #CE1141;
}

.ligne{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 5vh auto 0 auto;
  width: 30vw;
}

.mail{
  display: flex;
  flex-direction: row;
  margin: 5vh auto 0 auto;
  width: 40vw;
}

.text{
  display: flex;
  flex-direction: row;
  margin: 5vh auto 0 auto;
  width: 40vw;
  height: 20vh;
}

form button{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 5vh;
  margin: 5vh auto 5vh auto;
  color: white;
}

form button a{
  color: white;
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
