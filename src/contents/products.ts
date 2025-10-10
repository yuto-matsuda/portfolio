import bugImg from '@/assets/buguttoru.jpg';
import cetImg from '@/assets/certificate-exam-tracer.png';
import coronaImg from '@/assets/coropita.png';
import hkImg from '@/assets/heiterkeit.png';
import sleemuuImg from '@/assets/sleemuu.png';
import sushiImg from '@/assets/sushiking.png';
import shImg from '@/assets/web-syntaxhighlighter.png';
import { BugttoruModal, CertificateExamModal, CoropitaModal, HeiterkeitModal, SleemuuModal, SushiKingModal, WebSyntaxHighlighterModal } from './productModals/modals';

export const products = [
    {
        id: 'coropita',
        title: 'コロピタ',
        img: coronaImg,
        description: 'ゲーミフィケーションでコロナ予防を促進。高3の卒業研究で制作。',
        tags: ['Ruby on Rails', 'jQuery'],
        modal: CoropitaModal,
    },
    {
        id: 'bugttoru',
        title: 'バグっとる',
        img: bugImg,
        description: '入った虫を自動で捕まえるIoT虫カゴ。(2023年度Web×IoTメイカーズチャレンジ)',
        tags: ['Python', 'Raspberry Pi'],
        modal: BugttoruModal,
        award: 'other',
    },
    {
        id: 'heiterkeit',
        title: 'Heiterkeit',
        img: hkImg,
        description: 'プログラミング・語学を中心に発信するブログ。オリジナルCMSも作成。',
        tags: ['Next.js', 'ConoHa VPS'],
        modal: HeiterkeitModal,
    },
    {
        id: 'sushi-king',
        title: 'SUSHI KING',
        img: sushiImg,
        description: 'おすし屋さんシミュレーションゲーム。大学講義でのチーム制作プロダクト。',
        tags: ['JavaScript', 'オブジェクト指向'],
        modal: SushiKingModal,
    },
    {
        id: 'web-syntax-highlighter',
        title: 'Web SyntaxHighlighter',
        img: shImg,
        description: 'VSCode風シンタックスハイライタ。独自のアルゴリズムでソース言語を解析。',
        tags: ['TypeScript', 'webpack'],
        modal: WebSyntaxHighlighterModal,
    },
    {
        id: 'certificate-exam-tracer',
        title: '情報技術検定1級対策モジュール',
        img: cetImg,
        description: '教育実習中の補助教材用に開発。ソートアルゴリズムのステップ実行等が可能。',
        tags: ['React', 'ソートアルゴリズム'],
        modal: CertificateExamModal,
    },
    {
        id: 'sleemuu',
        title: 'Sleemuu',
        img: sleemuuImg,
        description: '協力型睡眠改善アプリ。(Tornadoハッカソン2025)',
        tags: ['React Native', 'React'],
        award: 'silver',
        modal: SleemuuModal,
    }
];