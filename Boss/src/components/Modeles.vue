<template>
  <div>
    <div class="ligneEtiquette">
      <div v-for="modele in donnees" :key="modele.id" class="etiquette">
        <h4>{{ modele.titre }}</h4>
        <img :src="modele.img" alt="imageChaussure">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modeles",
  data() {
    return {
      donnees: []
    }
  },

  created() {
    axios.get('static/modeles.json')
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

.ligneEtiquette{
  width: 100vw;
  display: flex;
  margin: 5vh auto 0 auto;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.etiquette{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: #FDFDFD solid 1px;
  border-radius: 50px;
  box-shadow: 5px 10px 10px #D9D3D9, -5px -5px 10px #D9D3D9;
  width: 30vw;
  margin-bottom: 5vh;
}

</style>
