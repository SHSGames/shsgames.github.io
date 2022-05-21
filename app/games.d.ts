declare namespace Games {
    type MANIFEST = GameManifest[];
    type SupportedType = "FLASH";
    interface GameManifest {
        name: string;
        type: SupportedType;
        thumbnail: string;
        tags: Tag[];
        width: number;
        height: number;
        executable: string;
    }
    interface Tag {
        name: string;
        color: string;
    }
}
