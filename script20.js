const container = document.getElementById("stockContainer");

let stocks = [

{symbol:"AAPL", name:"Apple Inc", price:182.30, change:1.23},
{symbol:"TSLA", name:"Tesla", price:245.50, change:-3.40},
{symbol:"MSFT", name:"Microsoft", price:410.10, change:2.11},
{symbol:"NVDA", name:"Nvidia", price:720.80, change:5.70},
{symbol:"AMZN", name:"Amazon", price:172.60, change:-1.05},
{symbol:"GOOGL", name:"Google", price:140.30, change:0.80},
{symbol:"META", name:"Meta", price:470.55, change:4.20}

];

function renderStocks(list){

container.innerHTML="";

list.forEach(stock=>{

let changeClass = stock.change>=0 ? "green":"red";

let card=document.createElement("div");

card.className="card";

card.innerHTML=`
<h2>${stock.symbol}</h2>
<p>${stock.name}</p>
<h3>$${stock.price}</h3>
<p class="${changeClass}">
Change: ${stock.change}
</p>
`;

container.appendChild(card);

});

}

function filterStocks(){

let value=document.getElementById("search").value.toUpperCase();

let filtered = stocks.filter(s => 
s.symbol.includes(value) || s.name.toUpperCase().includes(value)
);

renderStocks(filtered);

}

renderStocks(stocks);
