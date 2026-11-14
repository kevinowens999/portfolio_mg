// Keep the supplied resume intact rather than regenerating its contents.
import { access } from "node:fs/promises";
await access(new URL("../public/matthew-garner-resume.pdf", import.meta.url));
console.log("Using the supplied Matthew Garner resume PDF.");
