// JavaScript File

var a = Number(prompt('Input a:'));
document.write(' a = ' + a + ';');
var b = Number(prompt('Input b:'));
document.write('<br> b = ' + b + ';');
var c = Number(prompt('Input c:'));
document.write('<br> c = ' + c + ';');

function eqDiscrim(a, b, c) {
    if ((Math.pow(b, 2) - 4 * a * c) > 0)
        return Math.pow(b, 2) - 4 * a * c;
    if ((Math.pow(b, 2) - 4 * a * c) == 0)
        return (Math.pow(b, 2) - 4 * a * c);
    else
        return (Math.pow(b, 2) - 4 * a * c) + document.write('<br>Дискримінант D < 0');
}

var discrim = eqDiscrim(a, b, c);
document.write('<br>Discriminant D = ' + discrim + ';');

function equal(val)
    {
        var X1;
        var X2;
        var X;
        if (val > 0)
        {
            X1 = (0 - b + Math.sqrt(val) / (2 * a));
            X2 = (0 - b - Math.sqrt(val) / (2 * a));
            return document.write('<br>X1 = ' + X1 + ';' + ' ' + 'X2 = ' + X2);
        }

        else if (val == 0)
        {
            X = (0 - b) / (2 * a);
            return document.write('<br>X = ' + X);
        }
        else
             return document.write('<br>Рівняння не має дійсних коренів');
        
    }

equal(discrim);
