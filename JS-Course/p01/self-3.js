    const READ = 1, WRITE = 2, DELETE = 4, ADMIN = 8;
const has = (p, flag) => (p & flag) === flag;

function describe(perms) {
    let result = '';

    if (has(perms, READ)) {
        result += (result ? ', ' : '') + 'чтение';
    }
    if (has(perms, WRITE)) {
        result += (result ? ', ' : '') + 'запись';
    }
    if (has(perms, DELETE)) {
        result += (result ? ', ' : '') + 'удаление';
    }
    if (has(perms, ADMIN)) {
        result += (result ? ', ' : '') + 'администрирование';
    }

    console.log(result || 'нет прав');
}

describe(READ | DELETE);
describe(READ | WRITE | ADMIN);
describe(0);
