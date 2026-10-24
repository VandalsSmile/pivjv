// Lets `node --test` import the app's extensionless TypeScript modules.
export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("@/")) {
    const rooted = new URL(`../${specifier.slice(2)}`, import.meta.url);
    return resolve(`${rooted.href}.ts`, context, nextResolve);
  }

  try {
    return await nextResolve(specifier, context);
  } catch (error) {
    const code = error && typeof error === "object" ? error.code : "";
    const relative =
      specifier.startsWith("./") ||
      specifier.startsWith("../") ||
      specifier.startsWith("file:");
    if (code === "ERR_MODULE_NOT_FOUND" && relative && !specifier.endsWith(".ts")) {
      return nextResolve(`${specifier}.ts`, context);
    }
    throw error;
  }
}
