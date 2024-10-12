export const templates = {};

// TODO we'll wanna compile templates into 1 file so we're not fetching 600 files on load.
const fetchTemplate = function (path) {
    let fullPath = `./templates/${path}.ejs`;
    fetch(fullPath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Fetch error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((text) => {
            templates[path] = text;
        });
    };
;

//fetchTemplate('start/NewGame');
//fetchTemplate('start/NewGameForm');
//fetchTemplate('player/PlayerForm');

import * as StartNewGameForm from './start/NewGameForm.js';
import * as PlayerPlayerForm from './player/PlayerForm.js';

templates['start/NewGameForm'] = StartNewGameForm;
templates['player/PlayerForm'] = PlayerPlayerForm;


export function getTemplate(path) {
    return templates[path];
}
export function render(path, data) {
    return templates[path].render(data);
}
