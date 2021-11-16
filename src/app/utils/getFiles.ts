export default async function fetchDocuments() {
  const response = await fetch('https://json-server.machens.dev/docs');
  const results = await response.json();
  console.log(results);

  return results;
}
