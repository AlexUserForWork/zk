(function () {
  const clientData = {
    deal: "Revolut personal PL",
    seller: "@CashApp_Bank",
    buyer: "@deroperaf",
    subject: "Revolut personal PL (emulator)",
    price: "210$",
    wallet: "0xD3191F...019e1C",
    transaction_id: "0x6a6f97...c28f1e"
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
