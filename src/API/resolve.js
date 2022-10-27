export async function resolve(promise) {
  let resolved;

  try {
    resolved = await promise;
  } catch(e) {
    resolved = new Error(e.response.data.message);
  }

  return resolved;
}
