const fs = require('fs');
const latestEp = 975;
const number = 4;
var fetchData = () => {
    var eps = [];
    try {
        var notesString = fs.readFileSync('ep-data.json');
        notes = JSON.parse(notesString);
        console.log('Finish Loading.');

    } catch (error) {
        console.log('Something goes wrong. Note not added.');
    }
    return eps;
};

var saveData = (eps) => {
    fs.writeFileSync('ep-data.json', JSON.stringify(eps));
};

var randChooseEps = (number, data) => {
    var temp = [];
    console.log('Today episodes: ');
    for (let i = 0; i < number; i++) {
        var episode = Math.floor(Math.random() * (latestEp - 1) + 1);
        var ep = {
            episode
        };

        var isDuplicate = checkWatched(ep, data, temp);

        while (isDuplicate === true) {
            ep.episode = Math.floor(Math.random() * (latestEp - 1) + 1);
            isDuplicate = checkWatched(ep, data, temp);
        }

        temp.push(ep);
        data.push(ep);
    }

    temp.forEach(element => {
        console.log(element.episode);
        
    });
};

var checkWatched = (chosenEp, data, temp) => {
    var foundRepeat = false;
    var i = 0;
    var j = 0;

    if (temp.length !== 0) {
        while (foundRepeat == false && j <= temp.length) {
            if (temp[i].episode === chosenEp.episode) {
                foundRepeat = true;
            }
            j++;
        }
    }


    if (data.length !== 0) {
        if (foundRepeat === false) {
            while (foundRepeat == false && i <= data.length) {
                if (data[i] && data[i].episode === chosenEp.episode) {
                    foundRepeat = true;
                }
                i++;
            }
        }
    }


    return foundRepeat;
};

console.log('Starting app.');
var eps = fetchData();
randChooseEps(number, eps);
console.log('Saving data.');
saveData(eps);


