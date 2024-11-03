import { Poppins } from "next/font/google";
import Link from "next/link";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { GiAchievement } from "react-icons/gi";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function Page() {
    return (
        <div className="container-daftar">
            <div className="content-daftar">
                <div className="left-section">
                    <div className="clipcraft-daftar">
                        <img src="/img/logo.png" alt="" />
                        <h2>ClipCraft</h2>
                    </div>
                    <div className="isi-daftar">
                        <h2><IoPhonePortraitOutline /></h2>
                        <h3>Materi dapat diakses selamanya</h3>
                    </div>
                    <div className="isi-daftar">
                        <h2><IoPerson /></h2>
                        <h3>Belajar dari instruktur terbaik</h3>
                    </div>
                    <div className="isi-daftar">
                        <h2><GiAchievement /></h2>
                        <h3>Sertifikat untuk tiap kelasnya</h3>
                    </div>
                </div>
                <div className="right-section">
                    <div className="header">
                        <a href="/auth/login">Masuk</a>
                        <a href="/auth/register" style={{color: '#2bba9b', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '25px', textDecorationThickness: '3px'}}>Daftar</a>
                    </div>
                    <hr />
                    <form action="" style={{marginBottom: '30px'}}>
                        <label htmlFor="nama">Nama Lengkap*</label>
                        <input type="text" placeholder="Nama Lengkap" required />
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="" id="" placeholder="Email" required />
                        <label htmlFor="konfirmasi-email">Konfirmasi Email*</label>
                        <input type="email" name="" id="" placeholder="Konfirmasi Email" required/>
                        <label htmlFor="no-hp">Nomor Handphone*</label>
                        <input type="text" placeholder="(contoh:081234567890)" required />
                        <label htmlFor="password">Kata Sandi*</label>
                        <input type="password" name="" id="" placeholder="Kata Sandi" required />
                        <label htmlFor="konfirmasi-password">Konfirmasi Kata Sandi*</label>
                        <input type="password" name="" id="" placeholder="Konfirmasi Kata Sandi" required />
                        <div className="sk">
                            <input type="checkbox" name="" id="" />
                            <p>
                            Dengan menandai kotak di samping, Anda telah membaca dan menyetujui <a href="#">Ketentuan Penggunaan</a> dan <a href="#">Kebijakan Privasi</a>. Jika Anda berusia di bawah 18 tahun, Anda wajib dan kami anggap telah mendapatkan persetujuan orang tua/wali Anda untuk mengisi formulir ini.</p>
                        </div>
                        <Link href={"/"}><button className="btn-masuk">Daftar</button></Link>
                        <h3>Atau masuk menggunakan</h3>
                        <button className="lain"><FaFacebook /> Masuk dengan Facebook</button>
                        <button className="lain"><FaGoogle /> Masuk dengan Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
}