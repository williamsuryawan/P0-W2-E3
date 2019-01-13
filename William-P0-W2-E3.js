var nama = "";
var peran = "";

if (nama == "") {
  console.log ("Nama harus diisi!");
} else if (peran == "") {
  console.log ( "Hi "+ nama + ", Pilih peranmu untuk memulai game!" );
} else if (peran == "Ksatria") {
  console.log ("Selamat datang di Dunia Proxytia, " + nama + "\nHalo " + peran +" "+ nama + ", kamu dapat menyerang dengan senjatamu!");
} else if (peran == "Tabib") {
  console.log ("Selamat datang di Dunia Proxytia, " + nama + "\nHalo " + peran +" "+ nama + ", kamu akan membantu temanmu yang terluka.");
}
  else if (peran == "Penyihir") {
    console.log ("Selamat datang di Dunia Proxytia, " + nama + "\nHalo " + peran +" "+ nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
} else {
    console.log ("Nama peranmu tidak terdaftar");
}