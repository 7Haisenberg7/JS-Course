const articleRe = /^[A-Z]{2}-\d{5}$/;
const phoneRe = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log('--- Артикулы ---');
for (const s of ['AB-12345', 'XY-00001', 'ZZ-99999', 'ab-12345', 'AB-123', 'Артикул AB-12345']) {
    console.log(s.padEnd(20), articleRe.test(s));
}

console.log('--- Телефоны ---');
for (const s of ['+7 (999) 123-45-67', '+7 (495) 000-11-22', '+7 (800) 555-35-35', '8 (999) 123-45-67', '+79991234567', '+7 (99) 123-45-67']) {
    console.log(s.padEnd(20), phoneRe.test(s));
}

console.log('--- Email ---');
for (const s of ['user@mail.ru', 'anna.ivanova@shop.com', 'info@my-site.org', 'usermail.ru', 'user@', 'user @mail.ru']) {
    console.log(s.padEnd(22), emailRe.test(s));
}
