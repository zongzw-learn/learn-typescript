namespace a {
    /**
     * 返回的函数里的this被设置成了window而不是deck对象。 
     * 因为我们只是独立的调用了 cardPicker()。 顶级的非方法式调用会将 this视为window。 
     * （注意：在严格模式下， this为undefined而不是window）。
     * 
     */

    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            return function () {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
                //                      ^
                // TypeError: Cannot read property '3' of undefined
            }
        }
    }

    let cardPicker = deck.createCardPicker();

    // 这里是报错的语句，cardPicker 被直接调用，所有this变量被设置成为undefined
    //let pickedCard = cardPicker();

    // 这个是成功的方式，call的第一个参数可以直接作为this的赋值。
    let pickedCard = cardPicker.call(deck)

    // 使用console.log 而不是alert。
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    //alert("card: " + pickedCard.card + " of " + pickedCard.suit);

}