import React from 'react';

export const CurrencyFormat = (value, currency) => {
    if (!value) return "$ 0";
    const val = parseInt(value);
    let currencyFormat = currency;
    if (currency === 'ARS') currencyFormat = "$";
    if (currency === 'USD') currencyFormat = "U$S";

    return currencyFormat + " " + val.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};


export default CurrencyFormat;