var init = function (){
	//manejador de eventos de formulario
	document.forms.formPlayGame.addEventListener('submit', checkResponse, false);
};

var checkResponse = function(ev_form){
	ev_form.preventDefault(); //`reveemos la redireccion del formulario

	// comprobamos la eleccion
	var selectInput = this.elements.selectUsuario[this.elements.selectUsuario.selectedIndex];

	if( !selectInput.value ){ //comprobamos la mano seleccionado
		window.alert('Elige una Mano!!!'); //alertamos de la falta de eleccion
	}else{
		this.elements.selectUsuario.selectedIndex = 0; //reseteamos el indice
		checkBetting(selectInput); //permitimos la apuesta
	}
};

var aleatorio = function (minimo, maximo){
	return Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
};

var checkBetting = function (userResponse){
	var	opcionesMano = {
				0 : 'piedra',
				1 : 'papel',
				2 : 'tijera',
				3 : 'lagarto',
				4 : 'spock'
			},
			opcionUsuario = userResponse.value,
			opcionMaquina = aleatorio(0, 4),
			humanBet = opcionesMano[ parseInt(opcionUsuario, 10) ],
			machineBet = opcionesMano[ opcionMaquina ];

	if( humanBet === machineBet ){ //EMPATE
		window.alert( empateResponse(humanBet, machineBet) );
	}else{ //JUEGO
		playGame(humanBet, machineBet, opcionesMano);
	}
};

var playGame = function (humanBet, machineBet, opciones){
	var	result	= "algo ha fallado",
			win		= "!!! Ganaste :) !!!",
			lose		= "!!! Perdiste :( !!!";

	switch(humanBet){
		case opciones[0]: //PIEDRA
			if			( machineBet === opciones[1] ) { result = lose; }
			else if	( machineBet === opciones[3] ) { result = win;	}
			else if	( machineBet === opciones[4] ) { result = lose;	}
			else if	( machineBet === opciones[2] ) { result = win;	}
			break;

		case opciones[1]: //PAPEL
			if			( machineBet === opciones[0] ) { result = win; }
			else if	( machineBet === opciones[2] ) { result = lose;	}
			else if	( machineBet === opciones[3] ) { result = lose;	}
			else if	( machineBet === opciones[4] ) { result = win;	}
			break;

		case opciones[2]: //TIJERA
			if			( machineBet === opciones[0] ) { result = lose; }
			else if	( machineBet === opciones[1] ) { result = win;	}
			else if	( machineBet === opciones[3] ) { result = win;	}
			else if	( machineBet === opciones[4] ) { result = lose;	}
			break;

		case opciones[3]: //LAGARTO
			if			( machineBet === opciones[0] ) { result = lose; }
			else if	( machineBet === opciones[1] ) { result = win;	}
			else if	( machineBet === opciones[2] ) { result = lose;	}
			else if	( machineBet === opciones[4] ) { result = win;	}
			break;

		case opciones[4]: //SPOCK
			if			( machineBet === opciones[0] ) { result = win; }
			else if	( machineBet === opciones[1] ) { result = lose;	}
			else if	( machineBet === opciones[2] ) { result = win;	}
			else if	( machineBet === opciones[3] ) { result = lose;	}
			break;
		}

	window.alert( resultResponse(humanBet, machineBet, result) );
};

var resultResponse = function (humanBet, machineBet, result){
	var text = "";
	text += result+'\n';
	text += 'Humano: '+humanBet+'\n';
	text += 'Maquina: '+machineBet+'\n';
	return text;
};

var empateResponse = function (humanBet, machineBet){
	var text = "";
	text += '!!!EMPATE!!!\n';
	text += 'Humano: '+humanBet+'\n';
	text += 'Maquina: '+machineBet+'\n';
	text += "- vuelve a intentarlo -";
	return text;
};

window.addEventListener('load', init, false);