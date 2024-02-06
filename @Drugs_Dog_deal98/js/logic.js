(function () {
  const clientData = {
    deal: "Deal №98",
    seller: "@Drugs_Dog",
    buyer: "@kolavand",
    subject: "Wise personal + ByBit(EU) same name",
    price: "210 USDT",
    wallet: "TL2uX1...dknFG3",
    transaction_id: "8fe660...d5915e",
    type: ''
  };

  Object.entries(clientData).forEach(([key, value]) => {
    const item = document.querySelectorAll(`[id=${key}]`);
    if (item[0]) {
      item[0].textContent = value;
    }
    if (item[1]) {
      item[1].textContent = value;
    }
    if (item[2]) {
      item[2].textContent = value;
    }
    if (item[3]) {
      item[3].textContent = value;
    }
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
})();
