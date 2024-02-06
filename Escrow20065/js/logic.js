(function () {
  const clientData = {
    deal: "20065",
    seller: "@diego_bank",
    buyer: "老子财神",
    subject: "Wise personal + ByBit (EU)",
    price: "215 USDT",
    wallet: "THvaJG...tSHtX4",
    transaction_id: "559a78...3f9f1e",
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
