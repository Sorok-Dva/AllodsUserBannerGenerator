/**
 * From https://developers.allods-nova.eu/
 * Developed by Сорок два (https://github.com/Sorok-Dva/)
 */
let canvas, ctx;

let createImage = () => {
	let namecrt = $("#namecrt").val();
	let lvlcrt = $("#lvlcrt").val();
	let shardcrt = $("#shardcrt").val();
	let gscrt = $("#gscrt").val();
	let guildcrt = $("#guildcrt").val();
	let race_path = $("#race_path").val();
	let fac_path = $("#fac_path").val();
	let class_path = $("#class_path").val();
	let output = $("#output").val();
	
	// Canvas ignition
	if (!canvas) {
		canvas = document.getElementById('userbar'); ctx = canvas.getContext('2d');
		canvas.width = 470;
		canvas.height = 80;	
	} else ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		
	// Background ignition
	let background = new Image();
	background.src = './images/bg.jpg';
	
	// Draw background canvas image
	background.onload = () =>  {
		ctx.drawImage(background, 0, 0)
		
		//Text Name
		ctx.font = '16px Allods';
		ctx.fillStyle = 'gold';
		ctx.fillText(namecrt, 145, 35);

		//Text Lvl
		ctx.font = '13px Allods';
		ctx.fillStyle = 'gold';
		ctx.fillText(lvlcrt, 113, 59);
		
		//Text Server
		ctx.font = '12px Allods';
		ctx.fillStyle = 'white';
		ctx.fillText(shardcrt, 145, 68);	
		
		//Text Guild
		ctx.font = '10px Allods';
		ctx.fillStyle = 'white';
		ctx.fillText(guildcrt, 145, 52);	
		
		//Text GS
		ctx.font = '10px HelveticaRegular';
		ctx.fillStyle = 'white';
		ctx.fillText(gscrt, 400, 68);	
	};
	
	// Images ignition
	let race = new Image();
	let faction = new Image();
	let charClass = new Image();
		
	// Images src
	race.src = './images/' + race_path;
	faction.src = './images/' + fac_path;
	charClass.src = './images/' + class_path;
		
	// Draw Images
	race.onload = () => ctx.drawImage(race, 25, 2);
	charClass.onload = () => ctx.drawImage(charClass, 111, 12);
	faction.onload = () => ctx.drawImage(faction, 410, 6); 	
}