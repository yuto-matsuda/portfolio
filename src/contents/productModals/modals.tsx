import bugImg from '@/assets/buguttoru.jpg';
import cetImg from '@/assets/certificate-exam-tracer.png';
import coronaImg from '@/assets/coropita.jpg';
import hkImg from '@/assets/heiterkeit.png';
import sleemuuImg from '@/assets/sleemuu.png';
import sushiVideo from '@/assets/sushi-king.mp4';
import sushiImg from '@/assets/sushiking.png';
import shImg from '@/assets/web-syntaxhighlighter.png';
import shMethodImg from '@/assets/web-syntaxhighlighter_method.png';
import { PMList, PMParagraph, PMSection, ProductModal } from "./components";

export function CoropitaModal({
  isOpen,
  closeModal
}: {
  isOpen: boolean
  closeModal: () => void
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='コロピタ' thumbnail={coronaImg}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          当時蔓延していたコロナの予防を促進することを目的としたWebアプリです。
          高3の卒業研究で制作しました。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>Ruby on Rails</li>
          <li>jQuery</li>
        </PMList>
      </PMSection>
      <PMSection heading='機能'>
        <PMParagraph>機能</PMParagraph>
      </PMSection>
   </ProductModal>     
  )
}

export function BugttoruModal({
  isOpen,
  closeModal
}: {
  isOpen: boolean
  closeModal: () => void
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='バグっとる' thumbnail={bugImg}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          入った虫を自動で捕まえるIoT虫カゴです。
          画像認識技術により虫を検知します。
          2023年度Web×IoTメイカーズチャレンジにて制作しました。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>Python</li>
          <li>Raspberry Pi</li>
        </PMList>
      </PMSection>
      <PMSection heading='受賞'>
        <PMParagraph>英田エンジニアリング賞</PMParagraph>
      </PMSection>
   </ProductModal>     
  )
}

export function HeiterkeitModal({
  isOpen,
  closeModal
}: {
  isOpen: boolean
  closeModal: () => void
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='Heiterkeit' thumbnail={hkImg}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          プログラミングや語学について発信する自作ブログです。
          フロントに加えCMSも制作し，独自のマークダウンで様々なReactコンポーネントを使用可能にしました。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>Next.js</li>
          <li>ConoHa VPS</li>
        </PMList>
      </PMSection>
      <PMSection heading='リンク'>
        <a href='https://heiterkeit.jp' target='_blank'>Heiteerkeit</a>
      </PMSection>
   </ProductModal>     
  )
}

export function SushiKingModal({
  isOpen,
  closeModal
}: {
  isOpen: boolean
  closeModal: () => void
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='SUSHI KING' thumbnail={sushiImg}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          Webブラウザ上で動作するおすし屋さんシミュレーションゲームです。
          大学の講義で6人チームで作成しました。
          ライブラリ等は一切使わず、Vanilla JSで作成しています。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>JavaScript</li>
        </PMList>
      </PMSection>
      <PMSection heading='デモ動画'>
        <video
          src={sushiVideo}
          controls
          muted
          className='w-full border border-gray-400 rounded-lg mx-auto mb-8'
        />
      </PMSection>
   </ProductModal>     
  )
}

export function WebSyntaxHighlighterModal({
  isOpen,
  closeModal
}: {
  isOpen: boolean
  closeModal: () => void
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='Web SyntaxHighlighter' thumbnail={shImg}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          Webコンテンツへの組み込みを目的として作成したVSCode風シンタックスハイライタです。
          簡易的なWYSIWYGエディタも一緒に実装しました。
          対応ソース言語はBash, C, HTML, CSS/SCSSの4つですが、随時アップデート予定です。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>TypeScript</li>
          <li>webpack</li>
        </PMList>
      </PMSection>
      <PMSection heading='実装方針'>
        <img
          src={shMethodImg}
          alt='Web SyntaxHighlighter 実装方針'
          className='w-full border border-gray-400 rounded-lg mx-auto mb-8'
        />
      </PMSection>
   </ProductModal>     
  )
}

export function CertificateExamModal({
  isOpen,
  closeModal
}: {
  isOpen: boolean
  closeModal: () => void
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='情報技術検定1級対策モジュール' thumbnail={cetImg}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          教育実習中に開発した、情報技術検定1級対策用の補助教材です。
          クイックソート等のアルゴリズムのステップ実行が可能で、ミスの多いトレースを可視化することで直感的な理解を図ります。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>React</li>
        </PMList>
      </PMSection>
   </ProductModal>     
  )
}

export function SleemuuModal({
  isOpen,
  closeModal
}: {
  isOpen: boolean
  closeModal: () => void
}) {
  return (
    <ProductModal isOpen={isOpen} closeModal={closeModal} title='Sleemuu' thumbnail={sleemuuImg}>
      <PMSection heading='プロダクト概要'>
        <PMParagraph>
          チームみんなで「良い睡眠」を取ることでペットを育てる、協力型睡眠改善アプリです。
          iOSアプリに加え、管理者用のWebアプリも制作しました。
          チームメンバーを管理し、睡眠レポートを作成する機能を学校・企業に提供することで、団体での睡眠改善も図ります。
        </PMParagraph>
      </PMSection>
      <PMSection heading='使用技術'>
        <PMList>
          <li>React Native</li>
          <li>React</li>
        </PMList>
      </PMSection>
   </ProductModal>     
  )
}