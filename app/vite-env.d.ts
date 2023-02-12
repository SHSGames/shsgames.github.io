/// <reference types="vite/client" />

declare const PRODUCTION: boolean;

declare type ApplicationInfo = {

    /**
     * The name of the application.
     */
    name: string;

    /**
     * The version of the application.
     */
    version: string;

    /**
     * The description of the application.
     */
    description: string;

    /**
     * The author of the application.
     */
    author: string;

}

declare const APP_MANIFEST: ApplicationInfo;
