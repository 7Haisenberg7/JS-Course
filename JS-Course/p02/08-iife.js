var config = { currency: '₽'};
console.log('window.config:', window.config);
(function(){
    var secret = 'Внутренняя переменнная';
    console.log('Внутри IIFE:', secret);
})();
    console.log('Снаружи:', typeof secret);

    const PriceModule= (function(){
        const VAT = 20;
        function round(x){return Math.round(x * 100) / 100;}
        return {
            withVAT: (p) => round(p  * (1 + VAT / 100)),
        };
    })();
        console.log(PriceModule.withVAT(999.99));
        console.log(PriceModule.VAT , typeof round);