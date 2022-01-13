<template>
  <div>
    <div class="section-1">
      <p>
        Les Bulls de Chicago sont une franchise professionnelle
        de basketball basée à Chicago. Fondée le 26 janvier 1966,
        l'équipe est membre de la ligue majeure de basket-ball
        américain. Elle est fréquemment dénommé par ses initiales
        UC. Sa mascotte est Benny le Taureau.
      </p>
    </div>
    <div class="section-2">
      <img src="../assets/logoChicagoBulls.png" alt="logo equipe Chicago Bulls">
      <p>
        Après deux décennies sans grands succès, les Bulls ont acquis un des plus beaux palmarès de la NBA et
        une reconnaissance internationale dans les années 1990. Emmenés par l'entraîneur Phil Jackson et par Michael Jordan,
        considéré comme le meilleur basketteur de tous les temps.
      </p>
      <img src="../assets/EquipeSection2.jpg" alt="Jordan qui smash">
      <p>
        Lors de la saison 1995-1996, ils établissent l'ancien record du plus grand nombre de victoires en saison
        régulière 72 matchs gagnés sur 82 joués (battu lors de la saison 2015-2016 par les Warriors de Golden State).
        Avec six titres NBA à son actif, elle est la troisième franchise la plus titrée de la ligue derrière les Celtics de Boston et
        les Lakers de Los Angeles, et n'a jamais perdu une finale dans toute son histoire.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Equipe"
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

</style>
