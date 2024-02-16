(function () {
  const clientData = {
    deal: "A3P9P2",
    seller: "@SELLER@",
    buyer: "@BUYER@",
    subject: "@SUBJECT@",
    price: "@PRICE@",
    wallet: "@WALLET@",
    transaction_id: "@transaction_id@"
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
