export default function slug(name: string): string {
	return name.replace(/\s+/g, "-").toLowerCase();
}
