module.exports = function toReadable(number) {
    let result = "";
    let digitals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
        "12", "13", "14", "15", "16", "17", "18", "19"
    ];
    let units = ["zero", "one", "two", "three", "four", "five", "six", "seven",
        "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];
    let dozens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy",
        "eighty", "ninety"
    ];
    let hundreds = ["one hundred", "two hundred", "three hundred", "four hundred",
        "five hundred", "six hundred", "seven hundred", "eight hundred",
        "nine hundred"
    ];

    let str = String(number);
    let arr = str.split("");

    switch (arr.length) {
        case 1:
            for (let i = 0; i < digitals.length; i++) {
                if (digitals[i] === str) {
                    result = result + units[+digitals[i]];
                }
            };
            break;
        case 2:
            if (number < 20) {
                for (let i = 0; i < digitals.length; i++) {
                    if (digitals[i] === str) {
                        result = result + units[+digitals[i]];
                    }
                };
                break;
            } else {
                if (+arr[1] === 0) {
                    for (let i = 0; i < digitals.length; i++) {
                        if (digitals[i] === arr[0]) {
                            result = result + dozens[(+digitals[i]) - 2];
                        }
                    };
                    break;
                } else {
                    for (let i = 0; i < digitals.length; i++) {
                        if (digitals[i] === arr[0]) {
                            result = result + dozens[(+digitals[i]) - 2];
                        }
                    };
                    for (let i = 0; i < digitals.length; i++) {
                        if (digitals[i] === arr[1]) {
                            result = result + " " + units[+digitals[i]];
                        }
                    };
                    break;
                }
            };
        case 3:
            for (let i = 0; i < digitals.length; i++) {
                if (digitals[i] === arr[0]) {
                    result = result + hundreds[(+digitals[i]) - 1];
                }
            };
            let dozen = +(arr[1] + arr[2]);
            if (dozen === 0) {
                break;
            }
            if (dozen < 20) {
                for (let i = 0; i < digitals.length; i++) {
                    if (digitals[i] === String(dozen)) {
                        result = result + " " + units[+digitals[i]];
                    }
                };
                break;
            } else {
                if (+arr[2] === 0) {
                    for (let i = 0; i < digitals.length; i++) {
                        if (digitals[i] === arr[1]) {
                            result = result + " " + dozens[(+digitals[i]) - 2];
                        }
                    };
                    break;
                } else {
                    for (let i = 0; i < digitals.length; i++) {
                        if (digitals[i] === arr[1]) {
                            result = result + " " + dozens[(+digitals[i]) - 2];
                        }
                    };
                    for (let i = 0; i < digitals.length; i++) {
                        if (digitals[i] === arr[2]) {
                            result = result + " " + units[+digitals[i]];
                        }
                    };
                    break;
                }
            }
    }
    return result
};
