(function () {
  const clientData = {
    deal: "A3P9P2",
    seller: "@diego_bank",
    buyer: "老子财神",
    subject: "Wise personal + ByBit (EU)",
    price: "215 USDT",
    wallet: "THvaJGW6nrmBHhZm5emK8YZ8wsW4tSHtX4",
    transaction_id: "559a78fe4e009532e0df2f5de6c402e611f1931bd669a21b7b8acb31833f9f1e",
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
