fetch(
  'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_outstanding?sort=-record_date&format=json&page[number]=1&page[size]=100'
).then((response) => {
  if (!response.ok) {
    throw new Error('Failed to fetch data ', error);
  }
  console.log(response.json());
});

https://fiscaldata.treasury.gov/datasets/historical-debt-outstanding/historical-debt-outstanding
