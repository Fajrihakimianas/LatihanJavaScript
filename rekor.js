function Rekor(nilai) {
      tertinggi = 0;
      terendah = 0;
      var nilaiTertinggi = nilai[0];
      var nilaiTerendah = nilai[0];
            for(var i = 1; i < nilai.length; i++) {

                  if (nilai[i] > nilaiTertinggi){
                        nilaiTertinggi = nilai[i];
                        tertinggi++;
                  }
                  if (nilai[i] < nilaiTerendah){
                        nilaiTerendah = nilai[i]
                        terendah++;
                  }
            }
            console.log(`Rekor Tertinggi : ${tertinggi} , Rekor Terendah : ${terendah}`);
      return;
}
Rekor([50, 30, 65, 20, 75, 80, 60, 40, 50, 85, 15]);
