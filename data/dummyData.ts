
import type { LegalDocument, DocumentCategory, Analysis, BlockchainNode, ForumComment, AnalysisDiscipline } from '../types';

export const documentCategories: DocumentCategory[] = [
  { id: 'ruu-prioritas', name: 'RUU Prioritas', description: 'Rancangan Undang-Undang yang menjadi fokus legislasi saat ini.', documentCount: 1 },
  { id: 'kuhp', name: 'KUHP', description: 'Kitab Undang-Undang Hukum Pidana.', documentCount: 1 },
  { id: 'kuhper', name: 'KUH Perdata', description: 'Kitab Undang-Undang Hukum Perdata.', documentCount: 0 },
  { id: 'pp', name: 'Peraturan Pemerintah', description: 'Peraturan yang dibuat oleh Pemerintah untuk menjalankan UU.', documentCount: 0 },
  { id: 'perda', name: 'Peraturan Daerah', description: 'Peraturan yang berlaku di tingkat provinsi atau kabupaten/kota.', documentCount: 0 },
];

export const legalDocuments: LegalDocument[] = [
  {
    id: 'ruu-perampasan-aset',
    title: 'RUU Perampasan Aset Terkait Tindak Pidana',
    category: 'ruu-prioritas',
    shortDescription: 'Mengatur mekanisme perampasan aset hasil kejahatan untuk dikembalikan kepada negara.',
    status: 'Dalam Pembahasan',
    articles: [
        { id: 'pasal-1', title: 'Pasal 1: Ketentuan Umum', content: 'Dalam Undang-Undang ini yang dimaksud dengan Aset Tindak Pidana adalah setiap harta benda yang diperoleh atau diduga diperoleh secara langsung atau tidak langsung dari Tindak Pidana.' },
        { id: 'pasal-3', title: 'Pasal 3: Subjek Hukum', content: 'Subjek hukum yang dapat dikenai tindakan perampasan aset adalah setiap orang, korporasi, dan/atau kelompok terorganisasi yang melakukan Tindak Pidana.' },
        { id: 'pasal-12-3', title: 'Pasal 12 Ayat (3)', content: 'Putusan perampasan aset dapat dijatuhkan meskipun terdakwa meninggal dunia, melarikan diri, atau sakit permanen.' }
    ],
  },
  {
    id: 'uu-perlindungan-anak',
    title: 'UU No. 35 Tahun 2014 tentang Perlindungan Anak',
    category: 'kuhp',
    shortDescription: 'Menjamin dan melindungi anak dan hak-haknya agar dapat hidup, tumbuh, berkembang, dan berpartisipasi.',
    status: 'Berlaku',
    articles: [
        { id: 'pasal-1-anak', title: 'Pasal 1: Definisi Anak', content: 'Anak adalah seseorang yang belum berusia 18 (delapan belas) tahun, termasuk anak yang masih dalam kandungan.' },
        { id: 'pasal-20', title: 'Pasal 20: Tanggung Jawab Negara', content: 'Negara, pemerintah, pemerintah daerah, masyarakat, keluarga, dan orang tua/wali berkewajiban dan bertanggung jawab terhadap penyelenggaraan perlindungan anak.' },
    ],
  }
];

export const analyses: { [docId: string]: Analysis[] } = {
  'ruu-perampasan-aset': [
    { id: '1', discipline: 'Kriminologi', summary: 'RUU ini menggeser fokus dari penghukuman pelaku (retributif) ke pemulihan kerugian negara (restoratif), berpotensi menekan motivasi kejahatan ekonomi.', fullText: 'Secara kriminologis, RUU Perampasan Aset merupakan instrumen penting dalam memerangi kejahatan kerah putih dan korupsi. Teori pilihan rasional (rational choice theory) menyatakan bahwa pelaku kejahatan menimbang potensi keuntungan dan risiko. Dengan meningkatkan risiko kehilangan seluruh aset hasil kejahatan, RUU ini secara signifikan mengubah kalkulasi tersebut. Ini tidak hanya menghukum, tetapi juga menghilangkan insentif utama untuk melakukan kejahatan ekonomi, yaitu akumulasi kekayaan. Dampaknya diharapkan dapat mengurangi angka kejahatan korupsi dan pencucian uang dalam jangka panjang.' },
    { id: '2', discipline: 'Ekonomi', summary: 'Potensi pengembalian aset negara sangat besar, dapat mendanai pembangunan. Namun, tantangan valuasi dan pengelolaan aset sitaan perlu diantisipasi.', fullText: 'Dari perspektif ekonomi, RUU ini adalah game-changer. Aset yang berhasil dirampas dan dikembalikan ke kas negara dapat menjadi sumber pendapatan non-pajak yang signifikan. Dana ini dapat dialokasikan untuk proyek-proyek infrastruktur, pendidikan, dan kesehatan. Namun, implementasinya memerlukan keahlian khusus dalam manajemen aset, termasuk valuasi, pemeliharaan, dan likuidasi aset sitaan yang beragam (properti, kendaraan, saham, dll.) agar nilainya tidak terdepresiasi.' },
    { id: '3', discipline: 'Politik & Kebijakan Publik', summary: 'Implementasi RUU ini akan menjadi ujian komitmen politik pemerintah dalam memberantas korupsi. Potensi perlawanan dari elite politik sangat tinggi.', fullText: 'RUU Perampasan Aset adalah sebuah kebijakan yang sarat dengan muatan politik. Keberhasilannya sangat bergantung pada political will dari eksekutif dan legislatif. Implementasinya akan menguji integritas aparat penegak hukum dan lembaga peradilan. Di sisi lain, RUU ini berpotensi besar mendapat perlawanan dari kelompok kepentingan (vested interests) yang selama ini diuntungkan oleh lemahnya penegakan hukum terhadap kejahatan ekonomi. Oleh karena itu, pengawasan publik dan media menjadi kunci untuk memastikan RUU ini tidak dilemahkan.' },
    { id: '4', discipline: 'Agama & Moral Publik', summary: 'Secara moral, merampas hasil kejahatan sejalan dengan prinsip keadilan dan pengembalian hak publik yang telah dirampok.', fullText: 'Dari sudut pandang etika dan moralitas publik, yang seringkali berakar pada nilai-nilai agama, perampasan aset hasil kejahatan adalah tindakan yang adil. Konsep "mengembalikan hak yang bukan miliknya" adalah prinsip universal. Dalam banyak ajaran agama, harta yang diperoleh dengan cara yang tidak sah (batil) harus dikembalikan. RUU ini melembagakan prinsip moral tersebut ke dalam sistem hukum, menegaskan bahwa negara tidak akan mentolerir pengayaan diri yang merugikan kepentingan masyarakat luas.' },
    { id: '5', discipline: 'HAM & Keadilan Sosial', summary: 'Perlu ada mekanisme perlindungan hak bagi pihak ketiga yang tidak bersalah dan jaminan due process of law agar tidak terjadi penyalahgunaan wewenang.', fullText: 'Meskipun tujuannya mulia, RUU Perampasan Aset harus diimplementasikan dengan hati-hati untuk tidak melanggar Hak Asasi Manusia. Prinsip due process of law harus tetap dipegang teguh. Perlu ada mekanisme yang jelas dan adil untuk melindungi hak-hak pihak ketiga yang beriktikad baik yang asetnya mungkin terkait dengan terdakwa. Keseimbangan antara kebutuhan pemberantasan korupsi dan perlindungan hak-hak individu adalah tantangan utama dalam implementasi kebijakan ini.' },
  ],
  'uu-perlindungan-anak': [
    { id: '6', discipline: 'Psikologi', summary: 'UU ini memberikan dasar hukum untuk melindungi perkembangan psikologis anak dari kekerasan, penelantaran, dan eksploitasi.', fullText: 'UU Perlindungan Anak sangat krusial dari sudut pandang psikologi perkembangan. Masa kanak-kanak adalah periode formatif di mana pengalaman, terutama yang traumatis seperti kekerasan atau penelantaran, dapat memiliki dampak jangka panjang pada kesehatan mental, perkembangan kognitif, dan kemampuan sosial anak. UU ini menyediakan payung hukum untuk intervensi dini, rehabilitasi, dan penciptaan lingkungan yang aman dan mendukung bagi tumbuh kembang optimal anak, sejalan dengan teori kebutuhan dasar Maslow dan teori kelekatan Bowlby.' },
    { id: '7', discipline: 'Sosiologi', summary: 'Mengakui bahwa perlindungan anak adalah tanggung jawab kolektif, bukan hanya keluarga, tetapi juga masyarakat dan negara.', fullText: 'Secara sosiologis, UU ini merefleksikan pergeseran pandangan dari anak sebagai "milik" keluarga menjadi individu yang memiliki hak dan merupakan tanggung jawab kolektif. Ini menempatkan isu perlindungan anak dalam konteks struktur sosial yang lebih luas, termasuk sekolah, komunitas, dan kebijakan negara. UU ini mengakui bahwa faktor-faktor sosial seperti kemiskinan, ketidaksetaraan akses pendidikan, dan norma budaya dapat menjadi risiko bagi kesejahteraan anak, sehingga pendekatannya bersifat sistemik.' },
    { id: '8', discipline: 'Administrasi Publik', summary: 'Menuntut negara untuk membangun lembaga dan layanan yang efektif untuk implementasi, seperti KPAI, P2TP2A, dan rumah aman.', fullText: 'Dari sisi administrasi publik, UU ini memberikan mandat kepada pemerintah untuk membentuk dan mendanai berbagai lembaga dan layanan publik. Ini mencakup lembaga pengawasan seperti Komisi Perlindungan Anak Indonesia (KPAI), pusat layanan terpadu seperti P2TP2A, hingga penyediaan rumah aman bagi anak korban kekerasan. Tantangannya adalah memastikan lembaga-lembaga ini memiliki sumber daya yang cukup, kapasitas SDM yang kompeten, dan birokrasi yang responsif dan tidak berbelit-belit dalam melayani kebutuhan anak.' },
  ]
};

export const blockchainTimeline: { [docId: string]: BlockchainNode[] } = {
  'ruu-perampasan-aset': [
    { id: 'node-1', date: '2023-03-15', actor: 'Pemerintah (Inisiatif Awal)', summary: 'Pengajuan draf awal RUU Perampasan Aset ke DPR.', hash: '0x8a2b...', articleId: 'pasal-1', before: 'Belum ada.', after: 'Dalam Undang-Undang ini yang dimaksud dengan Aset Tindak Pidana adalah setiap harta benda yang diperoleh atau diduga diperoleh secara langsung atau tidak langsung dari Tindak Pidana Korupsi.', reason: 'Fokus awal adalah pada tindak pidana korupsi sebagai prioritas utama.' },
    { id: 'node-2', date: '2023-09-22', actor: 'Panja Komisi III DPR', summary: 'Perluasan cakupan Tindak Pidana.', hash: '0x4f9e...', articleId: 'pasal-1', before: '...dari Tindak Pidana Korupsi.', after: '...dari Tindak Pidana.', reason: 'Diperluas untuk mencakup semua jenis kejahatan yang menghasilkan keuntungan ekonomi, seperti narkotika, terorisme, dan kejahatan lingkungan, agar lebih komprehensif.' },
    { id: 'node-3', date: '2024-02-05', actor: 'Pakar Hukum & Masyarakat Sipil', summary: 'Penambahan klausul mengenai terdakwa yang meninggal dunia atau melarikan diri.', hash: '0x1c7d...', articleId: 'pasal-12-3', before: 'Belum ada.', after: 'Putusan perampasan aset dapat dijatuhkan meskipun terdakwa meninggal dunia, melarikan diri, atau sakit permanen.', reason: 'Untuk menutup celah hukum di mana proses hukum berhenti dan aset tidak bisa dirampas jika terdakwa tidak dapat dihadirkan di persidangan.' },
  ]
};

export const forumComments: { [docId: string]: ForumComment[] } = {
  'ruu-perampasan-aset': [
    {
      id: 'comment-1', author: 'Dr. Budi Santoso', role: 'Ahli', timestamp: '3 hari yang lalu',
      content: 'Penting untuk memastikan definisi "Aset Tindak Pidana" di Pasal 1 cukup luas namun tidak multitafsir. Perluasan dari "Tindak Pidana Korupsi" menjadi "Tindak Pidana" sudah tepat untuk menjerat kejahatan ekonomi lainnya.',
      upvotes: 42, articleId: 'pasal-1', replies: [
        {
          id: 'reply-1-1', author: 'Andi W.', role: 'Warga', timestamp: '2 hari yang lalu',
          content: 'Setuju, Pak. Jangan sampai RUU ini hanya tajam ke bawah tapi tumpul ke atas. Semua kejahatan yang merugikan negara harus bisa dijerat.', upvotes: 15, replies: []
        },
        {
          id: 'reply-1-2', author: 'Kemenkumham', role: 'Pemerintah', timestamp: '1 hari yang lalu',
          content: 'Terima kasih atas masukannya. Pemerintah berkomitmen untuk memastikan definisi yang komprehensif dan dapat dipertanggungjawabkan secara hukum. Masukan ini akan kami bawa dalam pembahasan selanjutnya.', upvotes: 25, replies: []
        }
      ]
    },
    {
      id: 'comment-2', author: 'Citra Lestari', role: 'Warga', timestamp: '5 hari yang lalu',
      content: 'Saya khawatir soal Pasal 12 Ayat (3). Bagaimana kalau ada pihak ketiga yang beritikad baik membeli aset dari terdakwa sebelum ada putusan? Perlindungannya seperti apa?',
      upvotes: 28, articleId: 'pasal-12-3', replies: []
    }
  ]
};
