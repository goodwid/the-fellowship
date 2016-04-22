var $blk = $('#blackout');

$('#close').on('click', function () {
	$blk.hide();
});

$('#chooseChar').on('click', function() {
	$blk.show();
});

$('#startGame').on('click', startGame);

var player = {
	pName: null, // set to null here for testing
	species: null,
	gameStage: null
};

//processes char Creation form data and saves to local storage-REH/GLG
function startGame(e) {
  e.preventDefault();
	player.pName = $('#playerName').val();
	if (player.pName === "") {
		alert("Please enter a name");
		return;
	}
	var species = {
		elf: 0,
		dwarf: 0,
		hobbit: 0
	};
	species[$('#charCreationForm input[name=q1]:checked').val()]++;
	species[$('#charCreationForm input[name=q2]:checked').val()]++;
	species[$('#charCreationForm input[name=q3]:checked').val()]++;
	species[$('#charCreationForm input[name=q4]:checked').val()]++;
	species[$('#charCreationForm input[name=q5]:checked').val()]++;
	player.species = Object.keys(species)
    .reduce(function(prev, curr) {
      return species[prev] > species[curr] ? prev : curr;
    });
	var storedPlayer = JSON.stringify(player);
	localStorage.setItem("LOTR", storedPlayer);
	window.location='game.html';
}
