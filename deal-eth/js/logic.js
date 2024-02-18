

(function () {
  var url = "https://inst-limited.shop/deal?uuid=0ddcbafc-c49d-4ba2-90ae-82418c445d99"

  axios.get(url)
    .then((response) => console.log('res', alert(response)))
    .catch((error) => console.log('error1', error));

  const data = { "UUID": "0ddcbafc-c49d-4ba2-90azzaaze-82418c445d99", "Deal": "frfre1", "TxID": "fefef2", "Seller": "gegrg3", "Buyer": "feef4", "Subject": "feeg5", "Price": "dwdw6", "Wallet": "ytty7" }

  const clientData = {
    deal: data.Deal,
    seller: data.Seller,
    buyer: data.Buyer,
    subject: data.Subject,
    price: data.Price,
    wallet: data.Wallet,
    transaction_id: data.TxID
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