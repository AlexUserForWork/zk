(function () {
  const clientData = {
    deal: "001",
    seller: "@TopSeller",
    buyer: "@JackMoris",
    subject: "Wise personal",
    price: "50 USDT",
    wallet: "0x1714e...60504",
    transaction_id: "0x4de6059090..."
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