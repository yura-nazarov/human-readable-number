module.exports = function toReadable(number) {
    let numberWords = '';
    let three = (String(number).length === 3) ? Math.floor(number / 100) : "";
    let two = ((String(number).length >= 2) && (+(String(number).slice(-2)) > 0)) ? Math.floor(+(String(number).slice(-2))) : "";
    let one = ((String(number).length === 3) && (+(String(number).slice(-2)) === 0)) ? "" : Math.floor(+(String(number).slice(-1)));

    function simpleNumbers(simpleNumb) {
        switch (simpleNumb) {
            case 0: return "zero"; break;
            case 1: return "one"; break;
            case 2: return "two"; break;
            case 3: return "three"; break;
            case 4: return "four"; break;
            case 5: return "five"; break;
            case 6: return "six"; break;
            case 7: return "seven"; break;
            case 8: return "eight"; break;
            case 9: return "nine"; break;

            case 10: return "ten"; break;
            case 11: return "eleven"; break;
            case 12: return "twelve"; break;
            case 13: return "thirteen"; break;
            case 14: return "fourteen"; break;
            case 15: return "fifteen"; break;
            case 16: return "sixteen"; break;
            case 17: return "seventeen"; break;
            case 18: return "eighteen"; break;
            case 19: return "nineteen"; break;

            case 20: return "twenty"; break;
            case 30: return "thirty"; break;
            case 40: return "forty"; break;
            case 50: return "fifty"; break;
            case 60: return "sixty"; break;
            case 70: return "seventy"; break;
            case 80: return "eighty"; break;
            case 90: return "ninety"; break;
            default:
                break;
        }
        return;
    }



    if (three !== "") {
        three = simpleNumbers(three) ? simpleNumbers(three) + " hundred " : "";
    }

    if (two !== "") {
        if (simpleNumbers(two)) {
            one = "";
            two = simpleNumbers(two);
        } else {
            two = simpleNumbers(Math.floor(two / 10) * 10);
            one = simpleNumbers(one);
        }
    }

    if (String(number).length === 1) {
        one = simpleNumbers(one);
    }

    console.log("three", three);
    console.log("two", two);
    console.log("one", one);

    numberWords = (three + two + " " + one).trim();

    return numberWords;
}

console.log(module.exports(200));


