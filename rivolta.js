var attivo = true;
var mobile = false;
var tablet = false;
var dimensione = window.matchMedia("(max-width: 600px)"); 
var dimensione2 = window.matchMedia("(max-width: 1023px)"); 

//controlla le dimensioni dello schermo e restituisce la vista correttta
async function controlloMediaQuery() {
  if (dimensione.matches) { // If media query matches
    mobile = true;
  } else if (dimensione2.matches){
    mobile = false;
    tablet = true;
  }
  else{
    mobile = false;
    tablet = false;
  }
  
	  // Per catturare pressione del tasto enter
	var inputButton = document.getElementById("passwordInput");

	inputButton.addEventListener("keypress", function(event) {
	  if (event.key === "Enter") {
		event.preventDefault();
		document.getElementById("buttonInput").click();
	  }
	});
  
  sbloccaSfida("start");  
  
} 

//loader, non utilizzato
function carica(){
    setTimeout(function(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("vista").style.display = "inline"; }, 1000);
} 

function sbloccaSfida(sfida){
	
	var titolo = document.getElementById("titolo");
	var descrizione = document.getElementById("descrizione");
	var testo = document.getElementById("testoSfida");
	var foto = document.getElementById("foto");
	var inputIndizio = document.getElementById("inputIndizio");	
	
	document.getElementById("casella").style.visibility = "hidden";
	foto.style.visibility = "hidden";
	foto.style.height = "0";
	foto2.style.visibility = "hidden";
	foto2.style.height = "0";
	document.getElementById("passwordInput").value = "";
	endCursor(descrizione);
	endCursor(testo);
	endCursor(inputIndizio);
	
	let title;
	let desc;
	let text;
	let img;
	let indizio;
	let time = 0;
	let immagine = false;
	
	sfida = sfida.toLowerCase();
	
	switch(sfida){
		
		// ----- PER LE SFIDE ----- 
		
		case "3406966054":
			title = "PIAZZA LA BOMBA";
			
			img = "";
			
			desc = "Senza armi non potranno pi\u00F9 minacciarci. Facciamo saltare in aria il loro arsenale, "+
					"piazziamo delle bombe lungo tutto il perimetro senza farci prendere";
			
			text = "Fai un giro completo del campo d\u0027erba di Piazza d\u0027Armi. "+
					"I componenti della squadra faranno un giro a testa a mo di staffetta. " +
					"Se barate lo fate di nuovo :)";
			
			indizio = "Password: ti verr\u00E0 fornita alla fine della sfida";			
		break;
		
		case "cpia5torinoeduit":
			title = "IL DISCORSO";
			
			img = "";
		
			desc = "Meglio un culo gelato che un gelato nel culo. No forse non era cos\u00EC. Scrivi tu dai";
		
			text = "Scrivi una poesia con rima baciata sulla libert\u00E0 di 14 versi usando le parole: "+
				"comunitroia, finocchio, segreto, tarallo, scafazzare, incapace circonvenuto, liceo matematico";
			
			indizio = "Password: ti verr\u00E0 fornita alla fine della sfida";
		break;
		
		case "besialegermano":
			title = "IL GIUSTO APPOGGIO";
			
			img = "";
		
			desc = "Per vincere non serve solo la forza ma anche l\u0027appoggio del popolo. O il loro terrore";
		
			text = "Mettere a terra al massimo il seguente numero di parti del corpo a terra. Una persona dovrà fare le foto. \n"+
				"- 2 PIEDI \n"+
				"- 1 PIEDE, 32GINOCCHIA \n"+
				"- 4 MANI, 1 PIEDE \n";
			
			indizio = "Password: ti verr\u00E0 fornita alla fine della sfida";
		break;
		
		case "marchesiellotrucco":
			title = "IL MERCATO";
			
			img = "";
		
			desc = "Noi siamo ovunque ma non ci troverai mai";
		
			text = "Nascondersi il nemico in questa guerra \u00E8 un\u0027arte fondamentale. E quindi lo sono i travestimenti. Sappiamo che un informatore nemico si trova da Yasmine. "+
					"Uno di voi si avvolger\u00E0 nella carta stagnola e si far\u00E0 passare per un kebab arrotolato. Andate quindi da Yasmine e fatevi fotografare DENTRO al "+
					"locale con il travestimento addosso. Sulla stagnola scrivete \'SENZA PICCANTE, SENZA CIPOLLA, SENZA CARNE E SENZA IMPASTO\'";
			
			indizio = "Password: ti verr\u00E0 fornita alla fine della sfida";
		break;
		
		case "aibambinichestannocrescendo":
			title = "IL PALAZZO";
			
			img = "";
		
			desc = "Solo chi \u00E8 pronto al sacrificio pu\u00F2 aspirare a diventare un leader";
		
			text = " Come da tradizione, ogni leader che si rispetti e che ambisca a governare deve dimostrare la propria forza "+
				"e di essere disposto a sacrificarsi. La tradizione vuole che venga quindi offerta in sacrificio una parte di s\u00E8. "+
				"Ma non siamo barbari, niente taglio delle dita o delle orecchie: una ceretta ad un uomo andr\u00E0 pi\u00F9 che bene. A seguire, "+
				"chi non ha preso parte alla ceretta, deve sottoporsi comunque a un altro rito d\u0027iniziazione: una ragazza dovr\u00E0 sculacciare "+
				"in modo divertente un ragazzo. Ovviamente filmato cos\u00EC da potervi ricattare in futuro quando sarete personaggi famosi";
			
			indizio = "Password: ti verr\u00E0 fornita alla fine della sfida";
		break;
			
		case "4":
			title = "LA PIAZZA";
			
			img = "";
		
			desc = "La voce del popolo\u003F Non esiste, ognuno ha la propria voce";
		
			text = "Intervista un uomo che non conosci, chiedigli qual \u00E8 secondo lui il miglior metodo di depilazione, e perch\u00E8. Filma il tutto ";
			
			indizio = "Password: ti verr\u00E0 fornita alla fine della sfida";
		break;
		
		// ----- PER I LUOGHI ----- 
		case "donpedro":
			title = "L\u0027ARSENALE";
			
			img = "arsenale.png";
		
			desc = "";
		
			text = "";
			
			indizio = "Numero di telefono del laboratorio restauro";
			
			immagine = true;
			
		break;
		
		case "topolore":
			title = "LA PIAZZA";
			
			img = "duomo.png";
		
			desc = "";
		
			text = "";
			
			indizio = "Numero di santi affrescati sulla facciata del duomo";
			
			immagine = true;
		break;
		
		case "beccatele":
			title = "IL TRIBUNALE";
			
			img = "tribunale.png";
		
			desc = "";
		
			text = "";
			
			indizio = "Email: sedepinerolo@ ... ";
			
			immagine = true;
		break;
		
		case "aghislove":
			title = "IL MERCATO";
			
			img = "mercato.png";
		
			desc = "";
		
			text = "";
			
			indizio = "Via Trieste 8, cognomi del campanello 3P del lato sinistro";
			
			immagine = true;
		break;
		
		case "pussyasco":
			title = "IL PALAZZO";
			
			img = "palazzo.png";
		
			desc = "";
		
			text = "";
			
			indizio = "Sentiero laudato sii: Che tipo di mondo desideriamo trasmettere a coloro che verranno dopo di noi? ...";
			
			immagine = true;
			
		break;
		
		case "ciabatta":
			title = "LA RIUNIONE";

			img = "marconi2.png";

			desc = "";

			text = "";

			indizio = "Targa commemorativa quinto cognome e nome colonna destra";

			immagine = true;

		break;

		
		// ----- PER IL TUTORIAL ----- 
		
		case "start":
			title = "MY SPACE"
			
			img = "";
			
			desc = "Una sola Terra";
			
			text = "Grazie a questa applicazione, la base pu\u00F2 comunicare direttamente con i soldati sul campo. In alto troverai sempre il titolo della missione, "+
					"(MY SPACE per adesso), subito sotto la storia collegata a questa missione (ora \'una sola Terra\') e al posto di questo testo troverai sempre "+
					"le indicazioni per portare a termine la missione. Infine sotto hai la possibilit\u00E0 di mettere una parola d'odrine che ti verr\u00E0 fornita "+
					"tramite suggerimento o come ricompensa e ti servir\u00E0 per avanzare alla missione successiva."
					
			indizio = "Per iniziare digita Bubi";
			
			break;
			
		case "bubi":
			alert("PASSWORD ERRATA");
			
			title = "ERRORE";
			
			img = "";
			
			desc = "Fregato";
			
			text = "Il messaggio che ti \u00E8 appena stato mostrato comparir\u00E0 quando digiti una password errata. Questa applicazione non salva i tuoi progressi "+
					"ma non preoccuparti: basta inserire l'ultima password che hai ottenuto e tornerai al punto di prima. Facciamo un esempio: con la password suggerita "+
					"qua sotto tornerai alla pagina precedente. Fai attenzione: il tutorial \u00E8 finito, da adesso inizia la missione!";
			
			indizio = "Scrivi start e premi OK, poi dopo non scrivere Bubi ma inserisci la password che vi \u00E8 stata data sul biglietto";
			
			break;

		case "uccellato":
			title = "VITTORIA"
			
			img = "";
			
			desc = "Fine";
			
			text = "Le missioni sono finite, torna subito alla base"
					
			indizio = "";
			
		break;
			
		default:
			alert("PASSWORD ERRATA");
			
			title = "ERRORE";
			
			img = "notFound.png";
			
			desc = "Password errata. Riprova";
			
			text = "";
			
			indizio = "";
			
			immagine = true;
			
		 break;
	}
	if(title !== ""){
		titolo.textContent = "";
		write(title, titolo, 100);
	}
	if(desc !== ""){
		descrizione.textContent = "";
		descrizione.style.height = "max-content";
		setTimeout(restartCursor, 900, descrizione);
		setTimeout(write, 1000, desc, descrizione, 2000/desc.length);
	} else {
		descrizione.style.height = "0%";
	}
	
	if(text !== ""){
		testo.textContent = "";
		testo.style.height = "max-content";
		setTimeout(restartCursor, 3000, testo);
		setTimeout(write, 4000, text, testo, 4000/text.length);
	} else if(img !== ""){
		testo.textContent = "";
		setTimeout(function(){
			foto.style.height = "32%";
			foto2.style.height = "100%";
			foto2.style.visibility = "visible";
			foto.style.visibility = "visible";
			foto.style.backgroundImage = "url("+img+")";
		}, 1000);
		setTimeout(imageReveal, 1000);
	} else {
		testo.style.height = "0%";
	}
	
	let indizioTimer;
	let indizioCursor;
	if(immagine){
		indizioCursor = 2500;
		indizioTimer = 3000;
	}
	else {
		indizioCursor = 8500;
		indizioTimer = 9000;
	}
	
	if(indizio !== ""){
		inputIndizio.textContent = "";
		inputIndizio.style.height = "max-content";
		setTimeout(restartCursor, indizioCursor, inputIndizio);
		setTimeout(write, indizioTimer, indizio, inputIndizio, 2000/indizio.length);
	} else {
		inputIndizio.style.height = "0%";
	}
	
	
	let casellaTimer;
	if(immagine){
		casellaTimer = 5000;
	}
	else casellaTimer = 12000;
	
	setTimeout(function(){
		document.getElementById("casella").style.visibility = "visible";
	}, casellaTimer);
	
}

function write(text, id, time){
	var l=text.length;
	var current = 0;

	var write_text = function() {
	  id.textContent+=text[current];
	  if(current < l-1) {
		current++;
		setTimeout(function(){write_text()},time);
	  } else {
		id.textContent = id.textContent;
		setTimeout(endCursor, 0, id);
	  }
	}
	setTimeout(function(){write_text()},time);
}

function endCursor(id){
	id.classList.add('endCursor'); 
}

function restartCursor(id){
	id.classList.remove('endCursor'); 
}

function imageReveal(){
	let current = 100;
	let percent;
	
	var load_image = function() {
		percent = current + "%";
		if(current > 0){
			current--;
			document.getElementById("foto2").style.height = percent;
			setTimeout(function(){load_image()},15);
		}
		else {
			document.getElementById("foto2").style.height = percent;
		}
	}
	setTimeout(function(){load_image()},50);	
}
