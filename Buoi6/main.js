const coinprice=
[
    {
      "buy": "66.450",
      "sell": "67.050",
      "type": "Vàng SJC 1L - 10L"
    },
    {
      "buy": "54.950",
      "sell": "55.900",
      "type": "Vàng nhẫn SJC 99,99 1 chỉ, 2 chỉ, 5 chỉ"
    },
    {
      "buy": "54.950",
      "sell": "56.000",
      "type": "Vàng nhẫn SJC 99,99 0,5 chỉ"
    },
    {
      "buy": "54.800",
      "sell": "55.500",
      "type": "Vàng nữ trang 99,99%"
    },
    {
      "buy": "53.650",
      "sell": "54.950",
      "type": "Vàng nữ trang 99%"
    },
    {
      "buy": "39.779",
      "sell": "41.779",
      "type": "Vàng nữ trang 75%"
    },
    {
      "buy": "30.510",
      "sell": "32.510",
      "type": "Vàng nữ trang 58,3%"
    },
    {
      "buy": "21.296",
      "sell": "23.296",
      "type": "Vàng nữ trang 41,7%"
    }
  ];
let rowinsert=1;
const deletetablecoin = document.getElementsByTagName("tr");
const n= deletetablecoin.length;
console.log(n);
const gettablecoin = document.getElementById("tablecoin");
let i=1;
for(i=1;i<n;i++)
{
    gettablecoin.deleteRow(1);
}
coinprice.forEach((item)=>{
    const tr=gettablecoin.insertRow(rowinsert);
const td0=tr.insertCell(0);
const td1=tr.insertCell(1);
const td2=tr.insertCell(2);
td0.innerHTML=item.type;
td1.innerHTML=item.buy;
td2.innerHTML=item.sell;
rowinsert++;
})

