declare namespace SHSGames {

    export type SupportedRunner =|
        "GAMEBOY";

    type MANIFEST = Game[];
    export const MANIFEST: MANIFEST;
    interface Tag {
        name: string;
        color: string;
    }

    interface MintedGame {
        id: string;
        data: string;
        hash: string;
        signature: string;
    }

    interface Game {
        name: string;
        type: SupportedRunner;
        width: number;
        height: number;
        thumbnail: string;
        executable: string;
    }

    interface PublishedGame extends Game {
        id: string;
        hash: string;
    }
}
