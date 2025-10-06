
const CUSTOM_API = '/persons.json';

const BASE = 'https://fakerapi.it/api/v2'

async function fetchPersons(quantity = 10) {
  const urls = [];


  if (CUSTOM_API) urls.push(CUSTOM_API);


  urls.push(`${BASE}/persons?_quantity=${quantity}`);
  urls.push(`${BASE}/persons?quantity=${quantity}`);

  let lastErr;
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      const items = Array.isArray(json) ? json : json.data;
      if (!Array.isArray(items)) throw new Error('Antwortformat unbekannt');

    
      const withPics = items.map((p, i) => {
        const seed = p.id ?? p.uuid ?? p.email ?? `${p.firstname}-${p.lastname}-${i}`;
        const image = `https://picsum.photos/seed/${encodeURIComponent(seed)}/200/300`;
        return { ...p, image };
      });

    
      return CUSTOM_API ? withPics.slice(0, quantity) : withPics;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('Unbekannter Fehler beim Laden der Personen');
}

export { fetchPersons }
