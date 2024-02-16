(function () {
  const clientData = {
    deal: "revolutpersonal_PL",
    seller: "@TonyGBank",
    buyer: "@Jaremy12463",
    subject: "Revolut Personal PL",
    price: "210$",
    wallet: "0x1714e...60504",
    transaction_id: "0x9c979...e946c"
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
