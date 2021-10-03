let name = 'Hendy';
let role = 'member baru';
let birthMonth = 'januari';

if (name === '') {
    console.log('Anda belum mengisi nama');
} else if (role === 'member baru') {
    if (birthMonth === 'januari' || birthMonth === 'Januari') {
        console.log(`Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 50%!`);
    } else {
        console.log(`Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`);
    }
} else if (role === 'member lama') {
    if (birthMonth === 'januari' || birthMonth === 'Januari') {
        console.log(`Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 30%!`);
    } else {
        console.log(`Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`);
    }
} else if (role !== 'member lama' || role !== 'member baru') {
console.log(`Selamat datang di Bikilipik, ${name}. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu.`);
}