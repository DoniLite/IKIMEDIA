
/**
 * Fonction permettant d'intéragir avec une api JSON
 * @param {string} url 
 * @param {RequestInit & {json?: object}} options 
 */
export async function fecthJSON(url, options = {}) {
    const headers = {Accept: 'application/json', ...options.headers}
    if(options.json) {
        options.body = JSON.stringify(options.json)
        headers['Content-type'] = 'application/json'
    }

    const r = await fetch(url, {...options, headers})
    if(!r.ok) {
        throw new Error('Erreur serveur', {cause: r})
    }
    return await r.json()
}