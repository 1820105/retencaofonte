function calcSal(){
    var saida = document.querySelector(".saida");

    var vbruto = document.querySelector(".vbruto").value;
    var vdesc = document.querySelector(".vdesc").value;

    //var c = vsal;

    var virrf= (vbruto * 0.015);
    var vcofins = (vbruto * 0.030);
    var vcsll = (vbruto * 0.010);
    var vpis = (vbruto * 0.0065);

    var vliq = (vbruto - virrf - vcofins - vcsll - vpis - vdesc);

    var dados = "<span class='dados'><span> Valor Bruto: <em>R$ " + vbruto + "</em></span><span>Outros Descontos: <em>" + vdesc + "</em></span><span> Valor Líquido: R$ " + vliq + "</span></span>";

    saida.innerHTML = ` <span><b>Imposto Retido: </b> <span class='rs flex cem'><b>IRRF........: </b>R\$ ${virrf.toFixed(2)}</span><span class='rs flex cem'><b>COFINS...: </b>R\$ ${vcofins.toFixed(2)}</span><span class='rs flex cem'><b>CSLL.......: </b>R\$ ${vcsll.toFixed(2)}</span><span class='rs flex cem'><b>PIS...........: </b></b>R\$ ${vpis.toFixed(2)}</span></span>${dados}`;
    //saida.innerHTML = " <span><b>Resultado: </b> <span class='rs flex cem'><b>Diária </b>R$ "  + vdia.toFixed(2) + "</span><span class='rs flex cem'> <b>Valor por Hora: </b>R$ " + vh.toFixed(2) + "</span></span>" + dados;
    //windows.alert(c);
};