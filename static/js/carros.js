const carros = [
    {nome: "BMW 320I", Motor: "2.0T", Original: "184hp/270nm", Stg1: "264hp/360nm", Stg2: "299hp/420nm", Stg3: "304hp/430nm", img: "static/imgs/bmw320i.png"},
    {nome: "VW Jetta", Motor: "2.0 TSI", Original: "200cv/280nm", Stg1: "230hp/340nm", Stg2: "250hp/400nm", Stg3: "340hp/460nm", img: "static/imgs/jettatsi.png" },
    {nome: "Ford Fusion", Motor: "2.0T Ecoboost", Original: "240/345nm", Stg1: "260hp/387nm", Stg2: "275hp/380nm", Stg3: "310hp/430nm", img: "static/imgs/fordfusion.png" },
    {nome: "Mercedes Benz C200", Motor: "2.0T M274", Original: "184hp/300nm", Stg1: "229hp/380nm", Stg2: "249hp/440nm", img: "static/imgs/mecac200.png" },
    {nome: "Honda Civic", Motor: "1.5T", Original: "173hp/220nm", Stg1: "203hp/260nm", Stg2: "218hp/280nm", Stg3: "233hp/290nm", img: "static/imgs/civicg10.png" },
    {nome: "Chevrolet Cruze", Motor: "1.4T Ecotec", Original: "150hp/245nm", Stg1: "165hp/285nm", Stg2: "180hp/305nm", Stg3: "195hp/325nm", img: "static/imgs/cruzeltz.png" }
];

// Aqui você chama o id "carros"
const select = document.getElementById("carros");
const divinfo = document.getElementById("info");

// Preenche o select com os carros
carros.forEach(carro => {
  const option = document.createElement("option");
  option.value = carro.nome;
  option.text = `${carro.nome} (${carro.Motor})`;
  select.appendChild(option);
});

// Mostra as infos ao escolher um carro
select.addEventListener("change", () => {
  const carro = carros.find(c => c.nome === select.value);
  if (carro) {
    divinfo.innerHTML = `
      <img src="${carro.img}" alt="${carro.nome}"<br>
      <strong>${carro.nome}</strong><br>
      Motor: ${carro.Motor}<br>
      Original: ${carro.Original}<br>
      Stage 1: ${carro.Stg1}<br>
      Stage 2: ${carro.Stg2 || "-"}<br>
      Stage 3: ${carro.Stg3 || "-"}
    `;
  } else {
    divinfo.innerHTML = "";
  }
});