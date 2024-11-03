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
                        <a href="/auth/login" style={{color: '#2bba9b', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '25px', textDecorationThickness: '3px'}}>Masuk</a>
                        <a href="/auth/register">Daftar</a>
                    </div>
                    <hr />
                    <h2>Masuk ke akun ClipCraft Anda</h2>
                    <form action="#">
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="" id="" placeholder="Masukkan email" required/>
                        <label htmlFor="password">Kata sandi*</label>
                        <input type="password" name="" id="" placeholder="Masukkan kata sandi" required/>
                        <span>Lupa kata sandi</span>
                        <Link href={"/"}><button className="btn-masuk">Masuk</button></Link>
                        <h3>Atau masuk menggunakan</h3>
                        <button className="lain"><FaFacebook /> Masuk dengan Facebook</button>
                        <button className="lain"><FaGoogle /> Masuk dengan Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
}