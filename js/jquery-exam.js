//vki hesaplama
$(function () {
    $("#vki_hesapla").on("click", function () {
      let kilo = Number($("#kilo").val());
      let boy = Number($("#boy").val()) / 100;
      let vki = Math.round(kilo / Math.pow(boy, 2));
  
      if (vki < 18) {
        $("#sonuc").html("ortalamanız " + vki + " Çok zayıfsınız");
      } else if (18 <= vki && vki < 25) {
        $("#sonuc").html("ortalamanız " + vki + " orta kilo");
      } else if (25 <= vki && vki < 27) {
        $("#sonuc").html("ortalamanız " + vki + "  kilolu");
      } else if (vki >= 27) {
        document.getElementById("sonuc").innerHTML="ortalamanız " + vki + "  çok kilonuz bulunuyor";
      }
  
      $("#ortalama").html(vki);
      console.log(vki);
  
    });
  });