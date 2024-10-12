export function render(data) {
    let mem = {};
    if (data.player.members.length >= data.i)
        mem = data.player.members[data.i - 1];
    else
        mem = {
            name: '',
            pronouns: 'Neutral',
            class: 'Fighter',
            feat: 'Survivor'
        };
    let printSelect = function(label, id, options, selected) {
        let HTML = `<label for="${id}">${label}</label>`;
        HTML += `<select id="${id}" name="${id}">`;
        for (let i = 0; i < options.length; ++i) {
            let opt = options[i];
            HTML += `<option value="${opt.val}"`;
            if (opt.val == selected)
                HTML += ' selected ';
            HTML += `>${opt.display}</option>`;
        }
        HTML += '</select>';
        return HTML;
    };
    let HTML = `
<div class="player-form" id="Player${data.i}">
    <label for="Player${data.i}Name">Player ${data.i}</label>
    <input id="Player${data.i}Name" name="Player${data.i}Name" type="text" placeholder="Member ${data.i}" value="${mem.name}">`;
    HTML += printSelect('Pronouns', `Player${data.i}Pronouns`,
        [
            {
                val: 'Neutral',
                display: 'They/Them'
            },
            {
                val: 'Fem',
                display: 'She/Her'
            },
            {
                val: 'Masc',
                display: 'He/Him'
            }
        ],
        mem.pronouns
    );
    HTML += printSelect('Class', `Player${data.i}Class`,
        [
            {
                val: 'Fighter',
                display: 'Fighter'
            },
            {
                val: 'Tank',
                display: 'Tank'
            },
            {
                val: 'Mage',
                display: 'Mage'
            }
        ],
        mem.class
    );
    HTML += printSelect('Feat', `Player${data.i}Feat`,
        [
            {
                val: 'Survivor',
                display: 'Survivor'
            },
            {
                val: 'Gatherer',
                display: 'Gatherer'
            },
            {
                val: 'Crafter',
                display: 'Crafter'
            },
            {
                val: 'Merchant',
                display: 'Merchant'
            }
        ],
        mem.feat
    );
    HTML += `</div>`;
    return HTML;
}
