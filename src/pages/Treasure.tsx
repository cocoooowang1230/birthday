import React from 'react';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { Heart, Gift, Cake } from 'lucide-react';
import { BackButton } from '../components/BackButton';
import { Confetti } from '../components/Confetti';

const photos = [
  "https://i.pinimg.com/736x/6c/1f/af/6c1faf758cf7cfbc5d7afb58432614be.jpg",
  "https://i.pinimg.com/736x/a6/82/3d/a6823d29d73bd450d08de80b5c9c9b06.jpg",
  "https://i.imghippo.com/files/paq1378SmI.JPG",
  "https://i.pinimg.com/736x/05/dc/38/05dc384a79c84115a708be1832e4dacd.jpg",
  "https://i.pinimg.com/736x/d8/21/81/d821815e16da5adf026a44b1c5506a15.jpg",
  "https://i.pinimg.com/736x/7f/ac/18/7fac182222561fc59830c66930a4fa60.jpg"
];

export const Treasure = () => {
  const [showConfetti, setShowConfetti] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout background="bg-gradient-to-br from-pink-100 via-red-100 to-purple-100">
      {showConfetti && <Confetti />}
      <div className="w-full max-w-6xl p-8 bg-white/90 rounded-2xl shadow-xl">
        <BackButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center gap-4 mb-6">
            <Cake className="w-12 h-12 text-pink-500" />
            <Heart className="w-12 h-12 text-red-500" />
            <Gift className="w-12 h-12 text-purple-500" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Alles Gute zum Geburtstag!
          </h1>
          <div className="text-xl text-gray-600 max-w-2xl mx-auto space-y-4 text-left">
            <p className="font-semibold mb-4">To Nora,</p>
            
            <p>22歲生日快樂，好像是第七年一起過生日了(?還是第六，總之在今年忙碌的生活中時間感覺過的超級漫長又超級迅速。</p>
            
            <p>想起去新加坡找你居然是年初的事而已，我一直時間錯亂以為是去年，還有明明暑假有見面但感覺又像是好久好久以前的事。</p>
            
            <p>可能是真的忙芬了，希望你的生活還是跟在文藻一樣輕鬆，不要被課業綁架、不要被金錢迷惑(你應該是沒有這個困擾都搭商務艙哈哈哈哈)，然後不要對未來焦慮，本人已經走到陷入畢業即失業的境地了XD</p>
            
            <p>祝你許的生日願望都能實現，成為超屌的工程師，進入大公司再內推我一波~</p>
            
            <p className="text-sm text-gray-500 mt-6">ps.這個網站有點破api接不上來，你如果很閒想搞一下也歡迎，我可以把程式碼傳給你哈哈哈哈</p>
            
            <p className="font-semibold text-right mt-4">Coco</p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">HBD {index + 1}</p>
                  <p className="text-sm"></p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-semibold text-purple-600">
            May this year bring you double the joy, double the success, and double the laughter.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};