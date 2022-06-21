declare namespace Games {
    export namespace GameType {
        interface FLASH {
            name: "Flash Emulator",
            description: "Flash Emulator",
            tag: React.CSSProperties
        }
    }
    interface Game {
        name: string;
        type: string;
        thumbnail: string;
        tags: Tag[];
        width: number;
        height: number;
        executable: string;
    }
    type MANIFEST = Game[];
    export const MANIFEST: MANIFEST;
    interface Tag {
        name: string;
        color: string;
    }
    interface FullGame {
        id: string;
        hash: string | undefined;
        signed: string;
        ext: string | undefined;
        name: string;
        type: string;
        thumbnail: string;
        tags: Tag[];
        width: number;
        height: number;
        executable: string;
    }
}
