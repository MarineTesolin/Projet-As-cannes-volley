
var homme = 0;
var femme = 0;
for ( var n = 0; n < database.length;n++){
	if (database[n].gender == "female"){
++femme ;
	}
	else {
		++homme ;
	}
}
console.log(homme)
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ['homme', 'femme'],
      datasets: [
        {
          label: "% Hommes/femmes",
          backgroundColor: ["#000000", "#CC0000"],
          data: [femme,homme]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: '% Hommes / Femmes'
      }
    }
});

	
	var somme = 0;
	for(m=0; m<database.length; m++)
	{
		somme += database[m].age
	

	}
	var moyenne1=Math.round(somme / database.length);
	console.log(moyenne1);

	var sommeadherent= database.length;

	$('.adherent1').append( sommeadherent);
	$('.moyenneage').append("Moyenne d'age: "+ moyenne1+' ans');
 

	var monVue = new Vue({
    el:"#content",
    data: {
        database,
        titres :{
            Nom : "nom prenom",
            Age: "age"
        },
        search:""
    },
    computed:{
        filtreNom() {
          return this.database.filter(adherent => {
            return adherent.name.toLowerCase().includes(this.search.toLowerCase())
          })
        }
    }


})

var item = database[0] ;
window.onload=function()
{

var app = new Vue({
      el: '#details'
  }) ;
  // quand on clique sur un element on maj la fiche personnelle
  $( ".item" ).on( "click", function() {
    item = database[$(this).attr("id")] ;
    app.$forceUpdate();
  });
}

$('#details').modal('show')