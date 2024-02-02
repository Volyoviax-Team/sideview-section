function sv_playerMovement() {
    if(kb.pressing('a')) {
        svPlayer.x -= 5;
    }

    if(kb.pressing('d')) {
        svPlayer.x += 5;
    }
}