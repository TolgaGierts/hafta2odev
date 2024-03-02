const ad = document.getElementById("ad");
const soyad = document.getElementById("soyad");
const dTarihi = document.getElementById('dTarihi')
const telNo = document.getElementById('tel')
const tshirtRenk = document.getElementById('tshirt-renk')
const yaziRenk = document.getElementById('yazi-renk')
const yazi = document.getElementById('yazi')
const adet = document.getElementById('adet')
const beden = document.getElementById('beden')
const seciliBeden = document.getElementById('seciliBeden')
const adres = document.getElementById('adres')
const teslimTarihi = document.getElementById('hafta')
const adSoyad = document.getElementById('ad-soyad')
const kartNo = document.getElementById('kart-no')
const cvv = document.getElementById('cvv')
const sonKullanma = document.getElementById('son-kullanma')


function siparisOlustur() {
    document.getElementById('ad-ozet').value = ad.value
    document.getElementById('soyad-ozet').value = soyad.value
    document.getElementById('dTarihi-ozet').value = dTarihi.value
    document.getElementById('tel-ozet').value = telNo.value
    document.getElementById('tshirt-renk-ozet').value = tshirtRenk.value
    document.getElementById('yazi-renk-ozet').value = yaziRenk.value
    document.getElementById('yazi-ozet').value = yazi.value
    document.getElementById('adet-ozet').value = adet.value
    document.getElementById('beden-ozet').value = beden.value
    document.getElementById('seciliBeden-ozet').value = seciliBeden.value
    document.getElementById('adres-ozet').value = adres.value
    document.getElementById('teslimTarihi-ozet').value = teslimTarihi.value
    document.getElementById('ad-soyad-ozet').value = adSoyad.value
    document.getElementById('kart-no-ozet').value = kartNo.value
    document.getElementById('cvv-ozet').value = cvv.value
    document.getElementById('son-kullanma-ozet').value = sonKullanma.value
}

