import { templates, getTemplate, render } from '../templates/templates.js';

const out = document.querySelector('#Main');
window.out = out;

const CT = {
    getTemplate: getTemplate,
    render: render,

    data: {
        player: {
            members: [],
        },
    },

    clear: function () {
        out.innerHTML = '';
    },

    clearPrint: function (template) {
        this.clear();
        this.print(template);
    },

    print: function (template) {
        let html = this.render(template, this.data);
        let dom = document.createElement('div');
        dom.innerHTML = html;
        out.append(dom);
    },

    getRandomFromList: function (list) {
        if (! Array.isArray(list))
            console.error('Non-array passed into getRandomFromList');
        let i = Math.floor(Math.random() * a.length);
        return list[i];
    },

    // Game Logic
    startNewGame: function () {
        let form = document.getElementById('NewGameForm');
        form.querySelectorAll('[name]').forEach((input) => {
            
        });
    },
};
window.CT = CT;

for (let i = 1; i <= 4; ++i) {
    CT.data.player.members.push({
        'name': '',
        'pronouns': 'Neutral',
        'class': 'Fighter',
        'feat': 'Survivor',
    });
}

class Stats {
    ath = 0; // Athletics (str/dex)
    dur = 0; // Durability (stamina/wisdom)
    int = 0; // Intuition (int/cha)

    constructor(stats) {
        this.ath = stats.ath ?? 0;
        this.dur = stats.dur ?? 0;
        this.int = stats.int ?? 0;
    }
}

// A critter that's part of your team.
class Player {
    name = "Player";
    xp = 0;
    level = 1;
    stats = null;
    pronouns = "Neutral";

    constructor(data) {
        this.name = data.name;
        this.pronouns = data.pronouns;
        this.stats = new Stats(data);
    }
}
