<template>
  <div id="app">
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

body{
  margin: 0;
  overflow-x: hidden;
  font-family: Raleway;
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
