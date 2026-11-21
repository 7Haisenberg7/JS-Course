    function level4() { return null.price; }
function level3() { return level4(); }
function level2() { return level3(); }
function level1() { return level2(); }

try {
    level1();
} catch (err) {
    const lines = err.stack.replace(/https?:\/\/[^/]+\//g, '').split('\n');
    for (const line of lines) console.log(line);
    console.log('Место ошибки:', lines[1].trim());
}

function safe(fn, ...args) {
    try {
        return { ok: true, value: fn(...args), error: null };
    } catch (error) {
        return { ok: false, value: null, error };
    }
}

console.log(safe(JSON.parse, '[1, 2]'));
const r = safe(JSON.parse, '[1,');
console.log(r.ok, r.error.name);
