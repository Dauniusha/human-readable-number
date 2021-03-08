module.exports = function toReadable (number) {
    switch(number) {
        case 100:
            return 'one hundred';
        case 200:
            return 'two hundred';
        case 300:
            return 'three hundred';
        case 400:
            return 'four hundred';
        case 500:
            return 'five hundred';
        case 600:
            return 'six hundred';
        case 700:
            return 'seven hundred';
        case 800:
            return 'eight hundred';
        case 900:
            return 'nine hundred';
    }
    let str = '';
    function choose(residue){
        switch (residue) {
            case 1:
                str += 'one';
                break;
            case 2:
                str += 'two';
                break;
            case 3:
                str += 'three';
                break;
            case 4:
                str += 'four';
                break;
            case 5:
                str += 'five';
                break;
            case 6:
                str += 'six';
                break;
            case 7:
                str += 'seven';
                break;
            case 8:
                str += 'eight';
                break;
            case 9:
                str += 'nine';
                break;
            case 10:
                str += 'ten';
                break;
            case 11:
                str += 'eleven';
                break;
            case 12:
                str += 'twelve';
                break;
            case 13:
                str += 'thirteen';
                break;
            case 14:
                str += 'fourteen';
                break;
            case 15:
                str += 'fifteen';
                break;
            case 16:
                str += 'sixteen';
                break;
            case 17:
                str += 'seventeen';
                break;
            case 18:
                str += 'eighteen';
                break;
            case 19:
                str += 'nineteen';
                break;
            case 20:
                str += 'twenty';
                break;
            case 30:
                str += 'thirty';
                break;
            case 40:
                str += 'forty';
                break;
            case 50:
                str += 'fifty';
                break;
            case 60:
                str += 'sixty';
                break;
            case 70:
                str += 'seventy';
                break;
            case 80:
                str += 'eighty';
                break;
            case 90:
                str += 'ninety';
                break;
            default:
                chose = false;
        }
    }
    if (number == 0)
        return 'zero';
    if (number >= 100) {
        choose(Math.floor(number / 100))
        str += ' hundred ';
    }
    let temp = number % 10;
    if (number % 100 > 20) {
        choose((number - temp) % 100)
        if (temp) {
            str += ' ';
            choose(temp);
        }
    }
    else
        if (number % 100) {
            choose(number % 100);
        }
        else
            str -= ' ';
    return str;
}
