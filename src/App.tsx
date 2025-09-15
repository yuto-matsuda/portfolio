import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAward, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NoteIcon from './assets/logos/note.svg?react';
import mainVisual from './assets/main-visual.jpg';
import profileBg from './assets/profile-bg.jpg';
import profile from './assets/profile.jpg';
import Certification from './components/certification';
import Footer from './components/footer';
import MainContainer from './components/mainContainer';
import Product from './components/product';
import Research from './components/Research';
import { certifications } from './contents/certifications';
import { products } from './contents/products';
import { domesticConferences } from './contents/research';
import useModal from './hooks/useModal';

export default function App() {
  const [isOpen, openModal, closeModal] = useModal();

  return (
    <>
      {/* <Header /> */}
      <MainContainer>
        <section id='hero' className='h-screen bg-radial-dark px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center max-w-5xl h-full mx-auto'>
            <div className='md:flex md:flex-col md:items-start w-full md:w-1/2 text-mga-2 '>
              <div className='text-center'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4 md:mb-8'>Yuto Matsuda</h1>
                <p className='text-xl mb-4 md:mb-16'>Okayama Univ.</p>
                <div className='hidden md:flex md:justify-center gap-6 text-3xl'>
                  <a href='' className='cursor-pointer transition-colors duration-300 hover:text-mga-3'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href='' className='cursor-pointer transition-colors duration-300 hover:text-mga-3'>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a href='https://github.com/yuto-matsuda' target='_blank' className='cursor-pointer transition-colors duration-300 hover:text-mga-3'>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href='https://note.com/yuto__matsuda' target='_blank' className='flex items-center cursor-pointer transition-colors duration-300 hover:text-mga-3'>
                    <NoteIcon className='w-6 h-6 fill-current' />
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full max-w-[320px] md:max-w-none md:w-1/2'>
              <img
                src={mainVisual}
                alt='Yuto Matsuda'
                className='w-auto h-auto border-4 md:border-8 border-mga-2 rounded-xl'
              />
            </div>
            <div className='flex justify-center md:hidden gap-6 text-3xl text-mga-2 mt-8'>
              <a href=''>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href=''>
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href='https://github.com/yuto-matsuda' target='_blank'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href='https://note.com/yuto__matsuda' target='_blank' className='flex items-center'>
                <NoteIcon className='w-6 h-6 fill-current' />
              </a>
            </div>
          </div>
        </section>
        
        <section id='profile' className=' py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='text-3xl text-mga-black font-semibold text-center mb-8'>Profile</h1>
            <div className='flex flex-col md:flex-row border border-gray-300 rounded-xl shadow'>
              <div className='relative w-full md:w-2/5 h-[200px] md:h-[300px] object-cover'>
                <img src={profileBg} alt='Yuto Matsuda' className='w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl' />
                <div className='absolute inset-0 bg-black/20 rounded-t-xl md:rounded-tr-none rounded-l-xl' />
                <img src={profile} alt='Yuto Matsuda' className='absolute bottom-0 right-1/2 md:top-1/2 md:right-0 w-[100px] aspect-square rounded-full object-cover translate-x-[50%] md:translate-x-1/2 translate-y-1/2 md:translate-y-[-50%] border-4 border-white' />
              </div>
              <div className='grid grid-rows-[auto_1fr_auto] gap-4 md:gap-0 w-full mt-[60px] md:mt-4 md:w-3/5 my-4'>
                <div className='flex flex-col items-center'>
                  <p className='text-xl font-bold'>松田 悠斗</p>
                  <p className='text-sm'>Yuto Matsuda</p>
                </div>
                <div className='flex items-center justify-center mx-4 md:mx-0 md:ml-[70px] md:mr-4'>
                  <p>
                    岡山県出身21歳。
                    岡山大学4回生で、2025年度からは<a href='https://cocolab.jp/' target='_blank' className='text-mga-blue border-b border-mga-blue px-1'>コンヴィヴィアルコンピューティング研究室</a>にてセンシングやAI, データ分析をメインテーマに研究しています。
                    得意分野はWebアプリ開発です。
                  </p>
                </div>
                <div className='flex gap-4 justify-center text-sm'>
                  <button className='bg-mga-3 text-white rounded-3xl w-32 px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-mga-2 hover:text-mga-3'>
                    <FontAwesomeIcon icon={faGraduationCap} className='mr-1' />
                    学歴
                  </button>
                  <button className='bg-mga-3 text-white rounded-3xl w-32 px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-mga-2 hover:text-mga-3'>
                    <FontAwesomeIcon icon={faAward} className='mr-1' />
                    受賞歴
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='certifications' className='bg-radial-light py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='text-3xl text-mga-3 font-semibold text-center mb-8'>Certifications</h1>
            <div className='grid grid-cols-1 gap-4'>
              {certifications.map(({ category, name, association, result, date }) =>
                <Certification
                  key={name}
                  category={category}
                  name={name}
                  association={association}
                  result={result}
                  date={date}
                />
              )}
            </div>
          </div>
        </section>

        <section id='research' className=' py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='text-3xl text-mga-black font-semibold text-center mb-8'>Research</h1>
            <div className='space-y-4'>
              {/* <Research title='国際学会' works={internationalConferences} color='purple' /> */}
              <Research title='国内研究会' works={domesticConferences} color='blue' />
              {/* <Research title='学位論文' works={theses} color='green' /> */}
            </div>
          </div>
        </section>

        {/* <section id='products' className='bg-gradient-to-br from-orange-100 via-pink-100 to-purple-200 py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20'> */}
        <section id='products' className='bg-gradient-to-br from-green-200 via-teal-100 to-blue-200 py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20'>
          <div className='max-w-5xl mx-auto'>
            <h1 className='text-3xl text-emerald-800 font-semibold text-center mb-8'>Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8'>
              {products.map(({ id, title, img, description, tags, modal: Modal, award }) =>
                <div key={id}>
                  <Product
                    title={title}
                    img={img}
                    description={description}
                    tags={tags}
                    award={award}
                    onClick={() => openModal(id)}
                  />
                  <Modal isOpen={isOpen(id)} closeModal={closeModal} />
                </div>
              )}
            </div>
          </div>
        </section>

        <section id='sns' className='flex justify-center gap-6 text-3xl text-mga-black my-8'>
          <a href='' className='cursor-pointer transition-colors duration-300 hover:text-mga-1'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='' className='cursor-pointer transition-colors duration-300 hover:text-mga-1'>
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href='https://github.com/yuto-matsuda' target='_blank' className='cursor-pointer transition-colors duration-300 hover:text-mga-1'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://note.com/yuto__matsuda' target='_blank' className='flex items-center cursor-pointer transition-colors duration-300 hover:text-mga-1'>
            <NoteIcon className='w-6 h-6 fill-current' />
          </a>
        </section>
        
        {/* サイドバー */}
      </MainContainer>
      <Footer />
    </>
  )
}

// github,(webサイトのリンク←いる？),1:2でのサムネ作成,