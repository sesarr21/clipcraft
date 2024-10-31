import { Poppins } from "next/font/google";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
        <nav>
          <ul>
            <div className="clipcraft">
              <div className="logo">
                <img src="img/logo.png" alt="" />
              </div>
              <div className="cc-title">
                <h2>ClipCraft</h2>
                <h4>Bimbel</h4>
                <h6>by bahenowl team</h6>
              </div>
            </div>
            <li>Level <RiArrowDropDownLine /></li>
            <li>Kategori <RiArrowDropDownLine /></li>
            <input type="text" className="cari" placeholder="Kamu ingin menguasai skill editing apa hari ini?"/>
          <button className="btn-search"><CiSearch /></button>
          <Link href="/auth/register">
            <button className="btn-daftar">Daftar/Masuk</button>
          </Link>
          </ul>
        </nav>
        <div className="content">
          <div className="content-1">
            <h2>Pilih Kategori yang anda sukai</h2>
            <div className="scroll-content-1">
              <div className="sub-content-1 a1">
                <img src="img/desain.png" alt="" />
                <h4>Desain Grafis</h4>
                <p>Pelajari cara membuat poster yang menarik dan profesional dengan tips dan trik terbaru.</p>
                <button>Pilih</button>
              </div>
              <div className="sub-content-1 b1">
                <img src="img/foto.png" alt="" />
                <h4>Fotografi</h4>
                <p>Tingkatkan kemampuan fotografimu dengan panduan komposisi yang mudah diikuti.</p>
                <button>Pilih</button>
              </div>
              <div className="sub-content-1 c1">
                <img src="img/video.png" alt="" />
                <h4>Video Editing</h4>
                <p>Pelajari teknik pengeditan video untuk membuat video profesional yang menarik.</p>
                <button>Pilih</button>
              </div>
              <div className="sub-content-1 a1">
                <img src="img/desain.png" alt="" />
                <h4>Desain Grafis</h4>
                <p>Pelajari cara membuat poster yang menarik dan profesional dengan tips dan trik terbaru.</p>
                <button>Pilih</button>
              </div>
              <div className="sub-content-1 b1">
                <img src="img/foto.png" alt="" />
                <h4>Fotografi</h4>
                <p>Tingkatkan kemampuan fotografimu dengan panduan komposisi yang mudah diikuti.</p>
                <button>Pilih</button>
              </div>
              <div className="sub-content-1 c1">
                <img src="img/video.png" alt="" />
                <h4>Video Editing</h4>
                <p>Pelajari teknik pengeditan video untuk membuat video profesional yang menarik.</p>
                <button>Pilih</button>
              </div>
              <div className="sub-content-1 a1">
                <img src="img/desain.png" alt="" />
                <h4>Desain Grafis</h4>
                <p>Pelajari cara membuat poster yang menarik dan profesional dengan tips dan trik terbaru.</p>
                <button>Pilih</button>
              </div>
              <div className="sub-content-1 b1">
                <img src="img/foto.png" alt="" />
                <h4>Fotografi</h4>
                <p>Tingkatkan kemampuan fotografimu dengan panduan komposisi yang mudah diikuti.</p>
                <button>Pilih</button>
              </div>
              <div className="sub-content-1 c1">
                <img src="img/video.png" alt="" />
                <h4>Video Editing</h4>
                <p>Pelajari teknik pengeditan video untuk membuat video profesional yang menarik.</p>
                <button>Pilih</button>
              </div>
            </div>
          </div>
          <div className="content-2">
            <div className="sub-content-2">
              <h2>Videografi</h2>
              <div className="sc2 a2">
                <h2>Film Pendek</h2>
                <p>-Transition Cinematic</p>
                <p>-Color Grading Film</p>
                <p>-Subtitle & Text Style</p>
              </div>
              <div className="sc2 b2">
                <h2>Dokumenter</h2>
                <p>-Naration Tools</p>
                <p>-Slow Motion & Time-Lapse</p>
                <p>-Archival Footage Filter</p>
              </div>
              <div className="sc2 c2">
                <h2>Vlog Harian</h2>
                <p>-Naration Tools</p>
                <p>-Slow Motion & Time-Lapse</p>
                <p>-Archival Footage Filter</p>
              </div>
            </div>
            <div className="sub-content-2">
              <h2>Kategori Terpopuler</h2>
              <div className="sc2 c2">
                <h2>Vlog Harian</h2>
                <p>-Naration Tools</p>
                <p>-Slow Motion & Time-Lapse</p>
                <p>-Archival Footage Filter</p>
              </div>
            </div>
            <div className="sub-content-2">
              <h2>Fitur Unggulan</h2>
              <div className="sc2 a2">
                <h2>Film Pendek</h2>
                <p>-Transition Cinematic</p>
                <p>-Color Grading Film</p>
                <p>-Subtitle & Text Style</p>
              </div>
            </div>
          </div>
          <div className="content-3">
        
          </div>
        </div>
    </div>
  );
}