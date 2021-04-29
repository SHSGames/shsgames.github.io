interface MySQL {
	configure(conf: MySQLConfig, mysql: module): void;
	query(query: string): Promise<object[]>;
}

declare module "mysql-promise" {
	export default function(): MySQL;
}

interface MySQLConfig {
	use?: boolean;
	host: string;
	user: string;
	password: string;
	database: string;
}

interface Config {
	"remote-address": string;
	"timeout-time": number;
	port: number;
	ssl: {
		"cert-root": string;
		use: boolean;
		redirect: boolean;
		port: number;
	};
	mysql: MySQLConfig;
}

interface GlobalBackend extends NodeJS.Global {

	api(path: string, params?: object): Promise<object>;
    config: Config;
	mysql: MySQL;

}
