//author: Vladimir Smirnov, FT-301

function ConvertTime(order, time) {
    if (time == 0)
        return [[zero], []];
    else
        return [secondDigit[parseInt(time / 10)], firstDigit[time % 10]] 
}

var hours = process.argv[2];
var minutes = process.argv[3];
var ten = ["________", "_$$__$$_", "__$$$$__", "___$$___", "__$$$$__", "_$$__$$_", "________"];
var five = ["________", "_$$__$$_", "_$$__$$_", "_$$__$$_", "__$$$$__", "___$$___", "________"];
var one = ["________", "_$$$$$$_", "___$$___", "___$$___", "___$$___", "_$$$$$$_", "________"];
var fifty = ["________", "_$$_____", "_$$_____", "_$$_____", "_$$_____", "_$$$$$$_", "________"];
var colon = ["________", "________", "___$$___", "________", "___$$___", "________", "________"];
var zero = ["________", "________", "________", "_$$$$$$_", "________", "________", "________"];
var firstDigit = [[], [one], [one, one], [one, one, one], [one, five], [five],
				  [five, one], [five, one, one], [five, one, one, one], [one, ten]];
var secondDigit = [[], [ten], [ten, ten], [ten, ten, ten], [ten, fifty], [fifty]];
var order = [];
var amountOfLines = 7;
if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0)
	console.log('Время указано неверно');
else
{
    var romanNumbers = ConvertTime(order, hours);
    order.push(romanNumbers[0]);
    order.push(romanNumbers[1]);
    order.push([colon]);
    romanNumbers = ConvertTime(order, minutes);
    order.push(romanNumbers[0]);
    order.push(romanNumbers[1]);
    var line;

	for (line=0; line<amountOfLines; line++)
	{
		var res = "";
		for(digit = 0; digit< order.length; digit++)
            for (element = 0; element < order[digit].length; element++)
			 res += order[digit][element][line];
		console.log(res);
	}
}