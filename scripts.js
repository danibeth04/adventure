import {name, replay} from "./modules.js";
function startGame() {
    // Prompt to start game
    let mission = prompt("You are a hedgehog, quite content with your life. Suddenly, your daily activities are interrupted by a child who needs you to send an urgent message to her fairy godmother. Do you accept the mission? (Enter yes or no)");
    // User chooses to play game
    if (mission == "yes") {
        hide();
    // User chooses not to play game
    } else if (mission =="no") {
        alert("You continue along in your hedge-hoggy ways, none the wiser, and none the more adventurous. That's kind of boring, but you do you, my friend. The end.")
    }
    replay();
};
function hide() {
    let hide = prompt("You set off at a brisk trot, pleased to be the bearer of such an important missive. Suddenly, you hear a snuffling noise coming from just around the corner ahead. Do you (1) continue trotting on without a care in the world, or (2) hide under a nearby bush to see what is causing the noise? (Enter 1 or 2)");
    if (hide == 1) {
        alert("You realize too late the snuffling sound was coming from the Big Bad Wolf. He eats you (sad but true). End of game.")
    } else if (hide == 2) {
        alert("From your hiding place you see the Big Bad Wolf round the corner. He doesn't notice you. Whew!");
        bridge();
    };
};
function bridge () {
    let bridge = prompt("Once the Big Bad Wolf has passed, you creep out from your hiding place and continue on your journey. You come to a deep ravine. A nearby sign reads, 'WARNING: Invisible Bridge crossing.' Do you (1) continue following the path even though you can't see a bridge, or (2) double check the bridge's location by tossing a few pebbles onto it? (Enter 1 or 2)");
    if (bridge == 1 | bridge == 2) {
    alert("You are in luck! The bridge is right where you thought it would be! You cross without issue.");
    orange();
    };
};
function orange() {
    let orange = prompt("On the other side of the bridge is a strangely dressed man. He asks you if you have any spare change. Do you (1) politely tell him that hedgehogs don't carry money, (2) ignore him, or (3) rudely tell him that no, you do not have change, and if you did, you certainly wouldn't share it with him? (Enter 1, 2, or 3)");
    if (orange == 1) {
    alert("The man was a wizard. He appreciates your polite response and teleports you to the nearest Fairy Godmother. You arrive at the end of your journey feeling very accomplished and somewhat less likely to volunteer your services as a deliverer of messages in the future. The end.")
    } else {
    alert("Oh no! The man was a wizard. He is offended and turns you into a very spiky orange. The end.")
    };
};
replay();
/*
function replay() {
    let replay = confirm("Would you like to play again?")
    if (replay == true) {
    startGame();
    };
}; */

document.getElementById("playButton").addEventListener("click", startGame);
