    function factorial(n){
        if (n <= 1) return 1;
        return n * factorial(n-1);
    }
    console.log('5 ! = ', factorial(5));

    function countdown(n, depth = 0){
     const pad = ''.repeat(depth);
     console.log(pad + 'Вход , n = ', n);
     if (n > 0)  countdown(n - 1, depth + 1);
     console.log(pad +'Выход, n =' , n);       
    }
    countdown(2)

    const catalog = {
        name : 'Каталог', 
        children: [
            {name : 'Компьютеры', children : [
                {name : 'Клавитуры', children : []},
                {name : 'Мыши' , children : []},
            ]}, 
            {name: 'Кабели', children: []}
        ],
    };

    function printTree(node, level =0){
        console.log(' '.repeat(level) + '-', node.name);
        for(const child of node.children) printTree(child, level + 1);
    }

    function countnodes(node){
        let count  = 1;
        for(const child of node.children) count += countnodes(child);
        return count;
    }
    printTree(catalog);
    console.log('Всего категорий:', countnodes(catalog));

   
    