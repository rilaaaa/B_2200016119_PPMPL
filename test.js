const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Pengujian Fungsi Matematika', function() {

  // Pengujian positif sebelumnya
  it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', function() {
    expect(tambah(2, 2)).to.equal(4);
  });

  it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function() {
    expect(kali(2, 3)).to.equal(6);
  });

  // Pengujian negatif: tambah
  it('seharusnya mengembalikan error saat input "2" + 2', function() {
    expect(() => tambah("2", 2)).to.throw('Input harus berupa angka');
  });

  it('seharusnya mengembalikan error saat input null + 2', function() {
    expect(() => tambah(null, 2)).to.throw('Input tidak boleh null atau undefined');
  });

  it('seharusnya mengembalikan error saat input undefined + 2', function() {
    expect(() => tambah(undefined, 2)).to.throw('Input tidak boleh null atau undefined');
  });

  // Pengujian negatif: kali
  it('seharusnya mengembalikan error saat input "2" * 3', function() {
    expect(() => kali("2", 3)).to.throw('Input harus berupa angka');
  });

  it('seharusnya mengembalikan error saat input null * 3', function() {
    expect(() => kali(null, 3)).to.throw('Input tidak boleh null atau undefined');
  });

  it('seharusnya mengembalikan error saat input undefined * 3', function() {
    expect(() => kali(undefined, 3)).to.throw('Input tidak boleh null atau undefined');
  });

  // Pengujian positif: kurang dan bagi
  it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function() {
    expect(kurang(2, 2)).to.equal(0);
  });

  it('seharusnya mengembalikan 2 saat membagi 6 / 3', function() {
    expect(bagi(6, 3)).to.equal(2);
  });

  // Pengujian negatif: bagi
  it('seharusnya mengembalikan error saat membagi dengan 0', function() {
    expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
  });
});