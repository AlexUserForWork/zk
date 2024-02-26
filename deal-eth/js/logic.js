

(async function () {
  let params = (new URL(document.location)).searchParams;
  let id = params.get("uuid")
  const url = `https://inst-limited.shop/deal?uuid=${id}`

  let clientData = {};
  await axios.get(url)
    .then(({ data }) => {
      clientData = {
        deal: data.Deal,
        seller: data.Seller,
        buyer: data.Buyer,
        subject: data.Subject,
        price: data.Price,
        wallet: data.Wallet,
        transaction_id: data.TxID
      }
    })
    .catch((error) => alert('Deal not exist!'));

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