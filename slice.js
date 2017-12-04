/*
	NOTE:
	===============================================================================================
	This Project`s code is compared to the previous projects a bit more style oriented.
	( https://github.com/Incrementis/Repository-INDEX-/wiki/Effective-Javascript )
	
	Parts of the code below could be optimized by using OOP, but due to simplicity and
	demonstration purpose, it is kept as it is.
	
	Also global variables (e.g. all the variables in the 'for' loop beneath) 
	serve here only for demonstartion purposes. They should be avoided! 
	
	TIP:
	Mark a word with the mouse/keyboard to highlite every same word within the whole document(Notepad++)
	
	===============================================================================================
*/


//This array will be sliced
var cakeSlices = [];

//Generating visible content in browser
for( var ID = 0; ID <= 8; ID++ )
{
	//----CAKE----//
	
	var Cake =  document.getElementById('cake');
	
	//Part of the image filenames
	var cakeName = "C";
	
	
	var img_and_style = '<img style="position:absolute; opacity=1; left:';
	var calc_Position = 'calc(50% - 200px); left:-webkit-calc(50% - 200px);left:-moz-calc(50% - 200px);"';
	var id = 'id="c';
	var source = ' src="Cake/C';
	
	//Generating the cake slice images in browser
	if(ID < 8)
	{
		
		Cake.innerHTML += 	img_and_style + calc_Position + id + ID + '"' + source + ID + '.png" >';
		
		cakeSlices.push(ID);
	}
	
	
	//----DROP-LIST----//
	
	var slicePos = document.getElementsByClassName('droplist');
	
	//Filling the drop list
	if(ID === 0)
	{
		//1. Startposition
		slicePos[0].innerHTML += '<option>' + ID + '</option>';
		
		
		//2. Endposition
		slicePos[1].innerHTML += '<option>DEACTIVATED</option>';
		slicePos[1].innerHTML += '<option>' + ID + '</option>';
	}
	else
	{
		//1. Startposition
		slicePos[0].innerHTML += '<option>' + ID + '</option>';
		slicePos[0].innerHTML += '<option>' + (-ID) + '</option>';
		
		//2. Endposition
		slicePos[1].innerHTML += '<option>' + ID + '</option>';
		slicePos[1].innerHTML += '<option>' + (-ID) + '</option>';
	}

	
}	


//Purpose: Cuts the cake and puts the slices on to the plate 
function sliceIt()
{
	//Getting all cake slices
	var slices 	= document.getElementById('slices');
	slices 		= slices.getElementsByTagName('IMG');
	
	var begin 	= document.getElementsByClassName('droplist')[0].value;
	var ending	= document.getElementsByClassName('droplist')[1].value;
	var slicing = 0;
	
	
	/*
		ATTENTION:
		Slicing all the cake slices which are selected per drop-list
	*/
	if(ending !== "DEACTIVATED")
	{
		slicing = cakeSlices.slice(begin, ending);
	}
	else
	{
		slicing = cakeSlices.slice(begin);
	}
	
	//MONITOR - doublechecking slicing result in console
	console.log(slicing);
	

	//Reseting cake and plate
	for( var sliceNumber = 0; sliceNumber < 8; sliceNumber++ )
	{
		var resetCake = document.getElementById("c" + sliceNumber ).style;
		var resetSlice = document.getElementById("s" + sliceNumber ).style;
		
		resetCake.opacity = 1;
		resetSlice.visibility = "hidden";
	}
	
	
	//Making all cake slices visible which are in selected range
	for( var position = 0; position < slicing.length; position++ )
	{
		
		//There is no id="c8" and no id="s8" in the html image tags
		if( slicing[position] < 8 )
		{
			
			var styleCake = document.getElementById("c" + slicing[position]).style;
			var styleSlice = document.getElementById("s" + slicing[position]).style;
			
			styleCake.opacity = 0.2;
			styleSlice.visibility = "visible";
			
		}		
		
	}
	
}