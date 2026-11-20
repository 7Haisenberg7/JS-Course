    let log = function (message) {
    console.log(message);
    log = function (nextMessage) {
        console.log('[повтор]', nextMessage);
    };
};

log('Первый запуск');
log('Второй запуск');
log('Третий запуск');
