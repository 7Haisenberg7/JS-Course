    const rawPriceList = `
мышь ;  790 ;Электроника
КОВРИК;450;  аксессуары
некорректная строка без разделителей
  клавиатура ;  1250 ; Электроника  
пустая цена ; abc ; Разное
`;

const normalized = rawPriceList
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== '')
    .map((line) => {
        const parts = line.split(/\s*;\s*/);
        if (parts.length !== 3) return null;

        const [rawName, rawPrice, rawCategory] = parts;
        const price = Number(rawPrice);
        if (!rawName || !rawCategory || Number.isNaN(price)) return null;

        const lowerName = rawName.toLowerCase();
        const name = lowerName[0].toUpperCase() + lowerName.slice(1);

        return { name, price, category: rawCategory };
    })
    .filter((item) => item !== null);

console.log(normalized);
