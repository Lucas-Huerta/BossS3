<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h1>
          Michael Jordan
        </h1>
      </router-link>
      <ul>
        <li>
          <router-link to="Biographie" alt="Biographie">
            Biographie
          </router-link>
        </li>
        <li>
          <router-link to="Realisation" alt="Réalisations">Réalisations</router-link>
        </li>
        <li>
          <router-link to="Equipe" alt="Equipe">Équipe</router-link>
        </li>
        <li>
          <router-link to="Formulaire" alt="Ajouter">Ajouter</router-link>
        </li>
      </ul>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

/*NORMALISER*/

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


@font-face {
  font-family: 'Academic M54';
  src: url("assets/Police/AcademicM54.ttf");
}

#app{
  margin: 0;
}

body{
  margin: 0;
  overflow-x: hidden;
  font-family: Raleway,serif;
  font-weight: normal;
}

h1{
  font-family: "Academic M54";
  font-size: 2.5em;
  -webkit-text-stroke: 1px #CE1141;
}

h2{
  font-family: "Academic M54";
  font-size: 2em;
  -webkit-text-stroke: 0.5px #CE1141;
}

h1 h2{
  text-transform: uppercase;
  letter-spacing: 2px;
}

li{
  list-style: none;
}

a{
  font-style: none;
  text-decoration: none;
}

span{
  color: #CE1141;
  font-weight: bold;
}

/*NAV*/

header{
  color: white;
  margin-top: 0;
  margin-bottom: 0;
  width: 100vw;
  background-color: #1F1F1F;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

header a{
  color: white;
}

header ul{
  display: flex;
  justify-content: space-around;
}

header ul a:hover{
  color: #CE1141;
}

header li{
  margin-right: 2vw;
}

/*BOUTON */

.boutonRouge{
  width: 10vw;
  height: auto;
  border: #FDFDFD solid 1px;
  border-radius: 50px;
  background-color: #CE1141 ;
  text-transform: uppercase;
}

</style>
