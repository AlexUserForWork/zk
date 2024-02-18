

(function () {
  var url = "http://162.0.223.13/deal?uuid=0ddcbafc-c49d-4ba2-90ae-82418c445d99"

  axios.get(url, {
    headers: {
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': 'http://192.168.0.197:8081/',
    },
  })
    .then((response) => console.log('res', response.data))
    .catch((error) => console.log('error1', error));

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