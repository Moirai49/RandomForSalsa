/*

    ©️ 2023 upio

    written by upio inspired by a tiktok video 
    i was bored ok idek why im doing this 💀

    https://www.upio.dev
    https://e-z.bio/upio

*/

// uses markdownit
function loadMessage(md) {
    const message = document.querySelector("#message");

    fetch("message.txt")
        .then(response => response.text())
        .then(data => {
            message.innerHTML = md.render(data);
        })
        .catch(error => {
            message.innerHTML = "Hello sall, sugeng siang, tepangaken nami kula Gregorio Arya Adyatma(your future husband), awoakwaok tak tak bercanda..., ih aku kangen sama kamu, belakangan kita susah ketemu ya, ayo kita ketemu mumpung sempet soalnya katamu umur ga ada yang tau, xixixi. Aslinya aku gabut aja, kalau long text di WA kayaknya udah mainstream jadi aku pake ini sekalian mau belajar. AAAAA bentar lagi pengumuman OSN, kira-kira aku lolos ga ya, aku gelisah banget. Kamu jaga kesehatan ya Culcu, ih ayo kita manggil cio sama culcu lagi, aku yang minta ini, cepatttt ganti nama kontak wa akuhh. Oh ya ini dada ayamnya kayaknya fail deh,sedih banget masa baru aku pegang sebentar sudah amburadul(memang tidak berbakat) gapapa lah yang penting proteinnya. Ngelihat masa depan emang suram ya sal, apakah kita akan sukses atau justru gagal, well sukses itu juga relatif kayaknya, seandainya kita jauhan gimana ya, misal kedinasanmu diluar semarang, aku kayaknya juga bakal cari univ yang deket kedinasanmu deh. Kalo masuk STAN ntar aku bakal usaha masuk UI, UI ges kayaknya agak impossible kecuali aku menang OSN pasti langsung tunduk semua univ, tapi agak susah coyy. Masa depan gimana ya sal, apakah kita yang sekarang ngerasa kita ga bakal bisa hidup kalau ga bareng bisa jadi yang bener-bener lost contact gitu, aku takut bayangin masa-masa itu, mungkin masa-masa itu akan terjadi tapi yang setidaknya sekarang kita bisa lakukan adalah menikmati masa-masa ini, masa yang kayaknya tinggal sebentar lagi cul, atau akankah kita bertemu lagi dan menikah, ya aku berharap bisa seindah itu cul, ayo bikin plan, bikin komitmen, jika kita lost contact suatu saat, jika dan hanya jika sih, jika dan hanya jika seperti itu, ayo kita ketemu lagi 10 tahun lagi di mixue banyumanik, inget ya berarti tanggal 8 April 2034 pukul 15:00, apapun yang terjadi waktu itu, mau aku atau kamu udah nikah atau belum, udah sukses atau belum, intinya jika kita lost contact, inget janji ini yaa.., itu juga kalau mixuenya belum tutup sih. Em kalau udah tutup gimana?, kalau mixuenya udah tutup ayo kita ke transmart, aku bakal tunggu di lantai timezone. Ya itu kalau kita lost contact sih. haiya sal, ini kali pertama aku berharap ke Tuhan, kalau ngerjain soal ujian aku bisa atasi sendir, waktu yangti yangkung ga ada aku ga bisa berharap karena emang kondisinya udah parah, tapi yang ini beda cul. Udah ya cul, sugeng sonten, asslamuallaikum  ";
        });
}

document.addEventListener('DOMContentLoaded', function() {
    let tempdata = {
        "did_open": false
    }

    const heart = document.querySelector("#solid-heart");
    const heart_container = document.querySelector(".heart-container");
    
    const msg_container = document.querySelector("#message-container");
    
    const md = window.markdownit({html: true});

    loadMessage(md);

    heart.addEventListener("click", function() {
        if (tempdata.did_open) {
            return;
        }
        tempdata.did_open = true;
        
        msg_container.style.display = "block";
        heart_container.style.marginTop = "-1.5%";
        
        const auto_css_height = msg_container.scrollHeight + 20; // 20 extra padding
        msg_container.style.height = auto_css_height + "px";

        // time it takes for the css to finally finish panning
        setTimeout(() => {
            msg_container.style.overflowY = "scroll";
        }, 1500);
    });

});