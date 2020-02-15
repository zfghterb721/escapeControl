window.setInterval(function(){
	$.get("http://192.168.1.30:1880/refresh").done(function(data){
		update(data)})
},1000);



$(document).ready(function(){
	$("#no13").click(function(){$.get('http://192.168.1.30:1880/state?toggle=laser', function(data, status){update(data)});});
	$("#no14").click(function(){$.get('http://192.168.1.30:1880/state?toggle=lamp', function(data, status){update(data)});});
	$("#no15").click(function(){$.get('http://192.168.1.30:1880/state?toggle=resettimer', function(data, status){update(data)});});
	$("#no16").click(function(){$.get('http://192.168.1.30:1880/state?toggle=eyeon', function(data, status){update(data)});});
	$("#no17").click(function(){$.get('http://192.168.1.30:1880/state?toggle=lasersmoke', function(data, status){update(data)});});
	$("#no18").click(function(){$.get('http://192.168.1.30:1880/state?toggle=siren', function(data, status){update(data)});});
	$("#no19").click(function(){$.get('http://192.168.1.30:1880/state?toggle=frontlights', function(data, status){update(data)});});
	$("#no20").click(function(){$.get('http://192.168.1.30:1880/state?toggle=backlights', function(data, status){update(data)});});
	$("#no21").click(function(){$.get('http://192.168.1.30:1880/state?toggle=dim', function(data, status){update(data)});});
	$("#no22").click(function(){$.get('http://192.168.1.30:1880/state?toggle=picture', function(data, status){update(data)});});
	$("#no23").click(function(){$.get('http://192.168.1.30:1880/state?toggle=exit', function(data, status){update(data)});});
	$("#no24").click(function(){$.get('http://192.168.1.30:1880/state?toggle=glass', function(data, status){update(data)});});
	$("#no25").click(function(){$.get('http://192.168.1.30:1880/state?toggle=barrelsmoke', function(data, status){update(data)});});
	$("#no26").click(function(){$.get('http://192.168.1.30:1880/state?toggle=bombstart', function(data, status){update(data)});});
	$("#no27").click(function(){$.get('http://192.168.1.30:1880/state?toggle=ceilingsmoke', function(data, status){update(data)});});
	$("#no28").click(function(){$.get('http://192.168.1.30:1880/unarmAlarm', function(data, status){});});
	$("#no29").click(function(){$.get('http://192.168.1.30:1880/callPhone', function(data, status){update(data)});});
	$("#no30").click(function(){$.get('http://192.168.1.30:1880/answerCall', function(data, status){update(data)});});
	$("#no31").click(function(){$.get('http://192.168.1.34:1880/screenon', function(data, status){update(data)});});
	$("#no32").click(function(){fetch('http://192.168.1.30:1880/c2pass', {
		method: 'post',
		body: JSON.stringify({password: "10110101"})
	  })})
	//$("#no32").click(function(){$.post('http://192.168.1.30:1880/c2pass', {password: "10110101"}, function(data, status){update(data)}, "json");});
	$("#no33").click(function(){$.get('http://192.168.1.30:1880/solveEye', function(data, status){update(data)});});
	$("#no34").click(function(){$.get('http://192.168.1.32:1880/screenon', function(data, status){update(data)});});
	
	$( "#hint" ).submit(function( event ) {
		console.log($( "input:first" ).val());
		$.get('http://192.168.1.31:1880/msg?message='+$( "input:first" ).val(), function(data, status){})
		event.preventDefault();
	});

})

function update(data) { 
		//main page flow
		if(data.status=="reset"){
			$("#currentstatus").css('color','rgb(0,255,0)'),
			$("#currentstatus").html("Running")
		}
		else{}
		if(data.status=="pause"){
			$("#currentstatus").css('color','rgb(255,255,0)'),
			$("#currentstatus").html("Paused")
		}
		else{}
		if(data.status=="end"){
			$("#currentstatus").css('color','rgb(255,0,0)'),
			$("#currentstatus").html("Ended")
		}
		else{}
		if(data.status=="resume"){
			$("#currentstatus").css('color','rgb(0,255,0)'),
			$("#currentstatus").html("Running")
		}
		else{}
		
		
		
		if(data.lights==0){
			$("#no1").css('background','rgb(0,255,0)')//,
			$("#no1").children().html("Light Solved")
		}
		else{$("#no1").css('background','rgb(255,0,0)')//,
			$("#no1").children().html("Light Unsolved")
		}
		if(data.laser==1){
			$("#no2").css('background','rgb(0,255,0)'),
			$("#no2").children().html("Computer Solved")
		}
		else{$("#no2").css('background','rgb(255,0,0)'),
			$("#no2").children().html("Computer Unsolved")
		}
		if(data.picture==0){
			$("#no3").css('background','rgb(0,255,0)'),
			$("#no3").children().html("Phone Dialed")
		}
		else{$("#no3").css('background','rgb(255,0,0)'),
			$("#no3").children().html("Phone Not Dialed")
		}
		if(data.glass==0){
			$("#no4").css('background','rgb(0,255,0)'),
			$("#no4").children().html("Retina Solved")
		}
		else{$("#no4").css('background','rgb(255,0,0)'),
			$("#no4").children().html("Retina Unsolved")
		}
		if(data.bomb==1){
			$("#no5").css('background','rgb(0,255,0)'),
			$("#no5").children().html("Bomb Defused")
		}
		else{$("#no5").css('background','rgb(255,0,0)'),
			$("#no5").children().html("Bomb Not Defused")
		}
		
		
		//read state only
		if(data.bombp==0){
			$("#no28").css('background','rgb(0,255,0)'),
			$("#no28").children().html("Bomb Active")
		}
		else{$("#no28").css('background','rgb(255,0,0)'),
			$("#no28").children().html("Bomb Inactive")
		}
		if(data.switchp==1){
			$("#no6").css('background','rgb(0,255,0)'),
			$("#no6").children().html("Switch Solved")
		}
		else{$("#no6").css('background','rgb(255,0,0)'),
			$("#no6").children().html("Switch Unsolved")
		}
		if(data.breakerp==1){
			$("#no7").css('background','rgb(0,255,0)'),
			$("#no7").children().html("Breaker Solved")
		}
		else{$("#no7").css('background','rgb(255,0,0)'),
			$("#no7").children().html("Breaker Unsolved")
		}
		if(data.thermp==1){
			$("#no8").css('background','rgb(0,255,0)'),
			$("#no8").children().html("Thermostat Solved")
		}
		else{$("#no8").css('background','rgb(255,0,0)'),
			$("#no8").children().html("Thermostat Unsolved")
		}
		if(data.surgep==1){
			$("#no9").css('background','rgb(0,255,0)'),
			$("#no9").children().html("Surge Solved")
		}
		else{$("#no9").css('background','rgb(255,0,0)'),
			$("#no9").children().html("Surge Unsolved")
		}
		if(data.eyep==1){
			$("#no10").css('background','rgb(0,255,0)'),
			$("#no10").children().html("Eye Solved")
		}
		else{$("#no10").css('background','rgb(255,0,0)'),
			$("#no10").children().html("Eye Unsolved")
		}
		if(data.microphonep==1){
			$("#no11").css('background','rgb(0,255,0)'),
			$("#no11").children().html("Microphone Solved")
		}
		else{$("#no11").css('background','rgb(255,0,0)'),
			$("#no11").children().html("Microphone Unsolved")
		}
		if(data.alarmp==1){
			$("#no12").css('background','rgb(0,255,0)'),
			$("#no12").children().html("Laser Tripped")
		}
		else{$("#no12").css('background','rgb(255,0,0)'),
			$("#no12").children().html("Laser Normal")
		}
		
		
		//Read and Write states
		if(data.laser==0){
			$("#no13").css('background','rgb(0,255,0)'),
			$("#no13").children().html("Laser On")
		}
		else{$("#no13").css('background','rgb(255,0,0)'),
			$("#no13").children().html("Laser Off")
		}
		if(data.lamp==1){
			$("#no14").css('background','rgb(0,255,0)'),
			$("#no14").children().html("Lamp On")
		}
		else{$("#no14").css('background','rgb(255,0,0)'),
			$("#no14").children().html("Lamp Off")
		}
		if(data.resettimer==1){
			$("#no15").css('background','rgb(0,255,0)')
		}
		else{$("#no15").css('background','rgb(255,0,0)')
		}
		if(data.eyeon==1){
			$("#no16").css('background','rgb(0,255,0)'),
			$("#no16").children().html("Eye Scanner On")
		}
		else{$("#no16").css('background','rgb(255,0,0)'),
			$("#no16").children().html("Eye Scanner Off")
		}
		if(data.lasersmoke==1){
			$("#no17").css('background','rgb(0,255,0)'),
			$("#no17").children().html("Laser Smoke On")
		}
		else{$("#no17").css('background','rgb(255,0,0)'),
			$("#no17").children().html("Laser Smoke Off")
		}
		if(data.siren==1){
			$("#no18").css('background','rgb(0,255,0)'),
			$("#no18").children().html("Siren On")
		}
		else{$("#no18").css('background','rgb(255,0,0)'),
			$("#no18").children().html("Siren Off")
		}
		if(data.frontlights==0){
			$("#no19").css('background','rgb(0,255,0)'),
			$("#no19").children().html("Front Lights On")
		}
		else{$("#no19").css('background','rgb(255,0,0)'),
			$("#no19").children().html("Front Lights Off")
		}
		if(data.backlights==0){
			$("#no20").css('background','rgb(0,255,0)'),
			$("#no20").children().html("Back Lights On")
		}
		else{$("#no20").css('background','rgb(255,0,0)'),
			$("#no20").children().html("Back Lights Off")
		}
		if(data.dim==1){
			$("#no21").css('background','rgb(0,255,0)'),
			$("#no21").children().html("Lights Dim")
		}
		else{$("#no21").css('background','rgb(255,0,0)'),
			$("#no21").children().html("Lights Bright")
		}
		if(data.picture==1){
			$("#no22").css('background','rgb(0,255,0)'),
			$("#no22").children().html("Picture Locked")
		}
		else{$("#no22").css('background','rgb(255,0,0)'),
			$("#no22").children().html("Picture Unlocked")
		}
		if(data.exit==0){
			$("#no23").css('background','rgb(0,255,0)'),
			$("#no23").children().html("Exit Door Unlocked")
		}
		else{$("#no23").css('background','rgb(255,0,0)'),
			$("#no23").children().html("Exit Door Locked")
		}
		if(data.glass==0){
			$("#no24").css('background','rgb(0,255,0)'),
			$("#no24").children().html("Glass Door Unlocked")
		}
		else{$("#no24").css('background','rgb(255,0,0)'),
			$("#no24").children().html("Glass Door Locked")
		}
		if(data.barrelsmoke==1){
			$("#no25").css('background','rgb(0,255,0)'),
			$("#no25").children().html("Barrel Smoke On")
		}
		else{$("#no25").css('background','rgb(255,0,0)'),
			$("#no25").children().html("Barrel Smoke Off")
		}
		if(data.bombstart==1){
			$("#no26").css('background','rgb(0,255,0)'),
			$("#no26").children().html("Bomb Started")
		}
		else{$("#no26").css('background','rgb(255,0,0)'),
			$("#no26").children().html("Bomb Not Started")
		}
		if(data.ceilingsmoke==1){
			$("#no27").css('background','rgb(0,255,0)'),
			$("#no27").children().html("Ceiling Smoke On")
		}
		else{$("#no27").css('background','rgb(255,0,0)'),
			$("#no27").children().html("Ceiling Smoke Off")
		}
		if(data.callPhone==1){
			$("#no29").css('background','rgb(255,255,255)'),
			$("#no29").children().html("Calling Phone....")
		}
		else{$("#no29").css('background','rgb(144,144,144)'),
			$("#no29").children().html("Call Phone")
		}
		if(data.phoneDialed==1){
			$("#no30").css('background','rgb(144,144,144)'),
			$("#no30").children().html("...")
		}
		else{$("#no30").css('background','rgb(144,144,144)'),
			$("#no30").children().html("Call Mom")
		}
		if(data.keypad==1){
			$("#no31").css('background','rgb(0,255,0)'),
			$("#no31").children().html("...")
		}
		else{$("#no31").css('background','rgb(144,144,144)'),
			$("#no31").children().html("Turn Keypad On")
		}
		$("#no34").css('background','rgb(144,144,144)')
		$("#no34").children().html("Computer 2 On")
		
		$("#no32").css('background','rgb(144,144,144)')
		$("#no32").children().html("Disarm Laser")
		
		$("#no33").css('background','rgb(144,144,144)')
		$("#no33").children().html("Solve Retina")
		
}
