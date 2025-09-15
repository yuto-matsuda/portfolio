// Reference: https://mathlandscape.com/latex-bib/
// BibTeXがどこからかダウンロードできるなら，それをTS形式に変換する関数をつくるのもあり

export interface Research {
    id: string
    publications: {
        bibtex: boolean
        paper: boolean
        poster: boolean
        slide: boolean
    }
    award?: string
    entry: 'article' | 'inproceedings'
    title: string
    author: string
    bookTitle: string
    volume?: string
    number?: string
    pages: string
    date: string
    location: string
}

export const internationalConferences: Research[] = [
    {
        id: 'BraiLoop_202509_IPSJ-Kansai',
        publications: {
            bibtex: true,
            paper: true,
            poster: false,
            slide: false,
        },
        entry: 'inproceedings',
        title: '自転車ユーザ参加型路面画像センシングによる点字ブロック配置情報の収集手法の検討',
        author: '松田悠斗, 松田裕貴',
        bookTitle: '2025年度 情報処理学会関西支部 支部大会',
        number: 'G-03',
        pages: '1--8',
        date: '2025-9-28',
        location: 'オンライン',
    }
];

export const domesticConferences: Research[] = [
    {
        id: 'BraiLoop_202509_IPSJ-Kansai',
        publications: {
            bibtex: true,
            paper: true,
            poster: false,
            slide: false,
        },
        entry: 'inproceedings',
        title: '自転車ユーザ参加型路面画像センシングによる点字ブロック配置情報の収集手法の検討',
        author: '松田悠斗, 松田裕貴',
        bookTitle: '2025年度 情報処理学会関西支部 支部大会',
        number: 'G-03',
        pages: '1--8',
        date: '2025-9-28',
        location: 'オンライン',
    },
    {
        id: 'ytv_202509_UBI',
        publications: {
            bibtex: true,
            paper: true,
            poster: true,
            slide: true,
        },
        entry: 'inproceedings',
        title: '非特定テレビ視聴履歴データを用いた就寝前後における視聴チャンネルの関係性分析',
        author: '松田悠斗, 林虎太朗, 松田裕貴, 池尻拓巨, 横田哲弥, 松田裕貴',
        bookTitle: '研究報告ユビキタスコンピューティングシステム(UBI)',
        number: 'UBI87-18',
        volume: '2025-UBI-87',
        pages: '1--8',
        date: '2025-9-18',
        location: '富山県富山市 富山県民会館',
    },
];

export const theses: Research[] = [
    {
        id: 'BraiLoop_202509_IPSJ-Kansai',
        publications: {
            bibtex: true,
            paper: true,
            poster: false,
            slide: false,
        },
        entry: 'inproceedings',
        title: '自転車ユーザ参加型路面画像センシングによる点字ブロック配置情報の収集手法の検討',
        author: '松田悠斗, 松田裕貴',
        bookTitle: '2025年度 情報処理学会関西支部 支部大会',
        number: 'G-03',
        pages: '1--8',
        date: '2025-9-28',
        location: 'オンライン',
    }
];