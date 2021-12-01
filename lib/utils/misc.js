/**
 * converts to foo=bar&boo=boo to {foo: 'bar', boo: 'boo'}
 * @param {string} str 
 * @returns {Object.<string, string>}
 */
export const getOptionsFromQuery = str => !str ? {} : str.split('&')
    .filter(Boolean)
    .reduce((opts, pair) => {
        const [key, value] = pair.split('=')

        return {
            ...opts,
            [key]: value
        }
    }, {})
