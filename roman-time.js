//author: Vladimir Smirnov, FT-301

function ConvertTime(order, time) {
    if (time == 0)
        order.push([zero]);
    else
    {
        order.push(secondDigit[parseInt(time / 10)]);
        order.push(firstDigit[time % 10]);
    }
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
if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0)
	console.log('Время указано неверно');
else
{
    ConvertTime(order, hours);
    order.push([colon]);
    ConvertTime(order, minutes);

	for (line=0; line<7; line++)
	{
		var res = "";
		for(digit = 0; digit< order.length; digit++)
            for (element = 0; element < order[digit].length; element++)
			 res += order[digit][element][line];
		console.log(res);
	}
}