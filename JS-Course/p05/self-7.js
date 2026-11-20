function escapeHtml(text) {
    return String(text)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
}

function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(text, query) {
    const safeText = escapeHtml(text);
    if (!query) return safeText;
    const re = new RegExp(escapeRegExp(escapeHtml(query)), 'gi');
    return safeText.replace(re, (found) => `<mark>${found}</mark>`);
}

console.log(highlight('Мышь <b>Logitech</b> и коврик для мыши', 'мыш'));

function parsePrice(text) {
    const re = /от\s+(?<from>[\d\s]+?)\s+до\s+(?<to>[\d\s]+?)\s*₽/;
    const found = text.match(re);
    if (!found) return null;
    const toNumber = (s) => Number(s.replace(/\s/g, ''));
    return {
        from: toNumber(found.groups.from),
        to: toNumber(found.groups.to),
    };
}

console.log(parsePrice('от 1 250 до 3 000 ₽'));
