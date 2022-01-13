<template>
  <div>
    <div class="section-1">
      <p>
        A côté du basket ball, Michael Jordan à
        réalisé de nombreux projets. Un des plus
        populaire et plus répandu est son
        partenariat avec la marque Nike. Ce qui
        lui vaudra une polémique et un énorme
        succès.
      </p>
    </div>
    <div class="section-2">
      <img src="../assets/nike.png" alt="logo nike">
      <p>
        Sa maîtrise du ballon de basket va le faire connaître et repérer par
        la maque Nike. Ensemble ils vont faire un partenariat et,
        la air Jordan 1 voit le jour.
      </p>
    </div>
    <div class="section-3">
      <img src="../assets/airJordan1.jpg" alt="image air Jordan">
      <div>
        <h2>
          Air Jordan
        </h2>
        <p>
          Cette basket, la ait Jordan 1 est la première chaussure
          de basket avec des couleurs. Michael Jordan, lors de
          son premier match avec ces basket créer une véritable
          polémique car il porte des baskets avec des couleurs et
          non seulement en noir.
          Nike va aussi être pris dans la polémique mais cela va
          s'avérer leurs apporter une popularité sans égal.
        </p>
      </div>
    </div>

    <hr>

    <div class="section-4">
      <div>
        <h2>
          Nike air jordan
        </h2>
        <p>
          La jordan brand ou Air Jordan est une filiale de Nike
          créée en 1997. Frappée du nom de Michael Jordan,
          ancien joueur des Bulls de Chicago en NBA.
          Elle produit des équipements sportifs, principalement
          chaussures et vêtements. La marque est principalement
          associée à la série des 23 chaussures de basket créées
          pour le célèbre basketteur jusqu'en 2009. Inspirées
          par la personnalité du joueur ou par ses passions.
        </p>
      </div>
      <img src="../assets/logoAirJordan.png" alt="logo Air Jordan">
    </div>
  </div>
</template>

<script>
export default {
  name: "Realisation"
}
</script>

<style scoped>

.section-1{
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/imgNike.jpg");
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-2 img{
  width: 10vw;
  height: auto;
}

.section-2 p{
  width: 40vw;
  text-align: center;
}

.section-3{
  margin-top: 5vh;
  width: 100vw;
  display: flex;
  justify-content: center;
}

.section-3 img{
  width: 40vw;
  height: auto;
}

.section-3 h2{
  color: white;
  margin: 0;
  -webkit-text-stroke: 1px #CE1141;
}

.section-3 div{
  align-items: center;
  width: 40vw;
  display: flex;
  flex-direction: column;
}

.section-3 p{
  margin-left: 5vw;
  margin-top: 10vh;
  width: 40vw;
}

hr{
  margin-top: 10vh;
  width: 40vw;
}

.section-4{
  margin-top: 5vh;
  display: flex;
  width: 100vw;
  justify-content: center;
}

.section-4 h2{
  color: white;
  margin: 0;
  -webkit-text-stroke: 1px #CE1141;
}

.section-4 div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-4 div p{
  width: 30vw;
  text-align: right;
}

</style>
