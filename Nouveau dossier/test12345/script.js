// variables globales
var item = database[0] ;
var stat1 = 0 ;
var stat2 = 0 ;
var stat3 = 0 ;
var stat4 = 0 ;

// On attend le chargement complet de la page
window.onload=function()
{

  // initialisation du composant de table
  var table = new Vue({
      el: '#maintable',
      data: database 
  }) ;


  // initialisation du composant de fiche perso
  var app = new Vue({
      el: '#details',
      data : database 
  }) ;

  // quand on clique sur un element on maj la fiche personnelle
  $( ".item" ).on( "click", function() {
    item = database[$(this).attr("id")] ;
    app.$forceUpdate();
  });


  // calcul des statistiques
  for (i=0 ; i < database.length ; i++)
  {
    stat1 ++;
    if (database[i].gender == "male") stat2 ++ ;
    if (database[i].gender == "female") stat3 ++ ;
    stat4 = stat4 + database[i].age ;
  }
  stat4 = Math.round(stat4 / stat1)+" ans";

  // initialisation du composant de stats
  var stat = new Vue({
      el: '#stats'
  }) ;

}

