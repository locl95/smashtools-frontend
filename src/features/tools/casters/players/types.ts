export interface Player {
    name: string
}

export interface PlayersState {
    players: Player[]
    player1?: Player
    player2?: Player
}

export interface SetPlayerAction {

}