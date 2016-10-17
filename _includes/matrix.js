
var run = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // Give the canvas the full screen height
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // korean characters from taken from the unicode charset
    var korean = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑".split("");

    var font_size = 13;
    var columns = canvas.width/(font_size); //number of columns for the rain

    // An array of drops - one per column
    var drops = [];

    /*
      x is the x-coordinate of the matrix of raindrops,
      each y-coordinate of the drop is initially the same
    */
    for(var x = 0; x < columns; x++)
    	drops[x] = 1;

    // Drawing the characters
    function draw()
    {
        // var clrs = ["#2ecc71","#3498db", "#9b59b6", '#f1c40f', '#e74c3c'];
    	//Black BG for the canvas
    	//translucent BG to show trail
    	ctx.fillStyle = "rgba(0, 0, 0  , 0.1)";
    	ctx.fillRect(0, 0, canvas.width, canvas.height);

    	ctx.font = font_size + "px arial";

    	// Looping over drops
    	for (var i = 0; i < drops.length; i++)
    	{
            var num = Math.floor(Math.random() * clrs.length);

            ctx.fillStyle = clrs[num]; //green text

    		//a random korean character to print
    		var text = korean[Math.floor(Math.random()*korean.length)];
    		// x = i*font_size, y = value of drops[i]*font_size
    		ctx.fillText(text, i*font_size, drops[i]*font_size);

    		//sending the drop back to the top randomly after it has crossed the screen
    		//adding a randomness to the reset to make the drops scattered on the Y axis
    		if (drops[i]*font_size > (canvas.height / 2) || drops[i]*font_size > canvas.height && Math.random() > 0.975)
    			drops[i] = 0;

    		//incrementing Y coordinate
    		drops[i]++;
    	}
    }

    setInterval(draw, 33);
}

window.onload = run;
