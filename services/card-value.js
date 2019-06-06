// string/number (1-10/JQKA) => value of card (2-11)
module.exports = card => {
    if ('JQK'.indexOf(card) !== -1) return 10;
    const num = parseInt(card);
    return (num === 1 || card === 'A') ? 11 : num;
}