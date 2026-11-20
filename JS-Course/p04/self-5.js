    class CartView {
    state = { items: [], promo: null };

    setState(patch) {
        this.state = { ...this.state, ...patch };
        console.log(this.render());
    }

    addItem(name, price, qty = 1) {
        const newItems = [...this.state.items, { name, price, qty }];
        this.setState({ items: newItems });
    }

    removeItem(name) {
        const newItems = this.state.items.filter((i) => i.name !== name);
        this.setState({ items: newItems });
    }

    applyPromo(code) {
        this.setState({ promo: code });
    }

    render() {
        const { items, promo } = this.state;
        if (items.length === 0) return 'Корзина пуста';

        const lines = items.map((i) => `- ${i.name} x ${i.qty} = ${i.price * i.qty} ₽`);
        const total = items.reduce((s, i) => s + i.price * i.qty, 0);
        const final = promo ? Math.round(total * 0.9) : total;

        lines.push(`Итого: ${final} ₽${promo ? ' (промокод ' + promo + ')' : ''}`);
        return lines.join('\n');
    }
}

const view = new CartView();
console.log(view.render());

view.addItem('Клавиатура', 1250, 1);
view.addItem('Мышь', 790, 2);
view.applyPromo('SALE10');
view.removeItem('Клавиатура');
