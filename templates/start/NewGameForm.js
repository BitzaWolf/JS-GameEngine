export function render(data) {
    let HTML = `
<h1>New Game</h1>
<form onsubmit="CT.startNewGame()" id="NewGameForm">
    <h2>Team Creation</h2>
    <label for="TeamName">Team Name</label>
    <input id="TeamName" name="name" type="text" value="${data.player.teamName ?? ''}" placeholder="Critter Crew">
`
    let i = 1;
    for (i = 1; i <= 4; ++i)
        HTML += CT.render('player/PlayerForm', {...data, 'i': i});

    HTML += `
    <h2>Gameplay Options</h2>

    <label for="Difficulty">Difficulty</label>
    <select id="Difficulty" name="difficulty">
        <option value="Standard">Standard</option>
        <option value="Relaxed">Relaxed</option>
        <option value="Difficult">Difficult</option>
    </select>
    <dl>
        <dt>Standard</dt>
            <dd>Average gameplay experience. Some parts more challenging, still room for fun.</dd>
        <dt>Relaxed</dt>
            <dd>Easier gameplay and easier to win. More focused on just messing around and having fun!</dd>
        <dt>Difficult</dt>
            <dd>Gameplay is more challenging, gotta work harder and use more tools to achieve your goals.</dd>
    </dl>


    <button type="submit">Start Game</button>
</form>`;
    return HTML;
};
