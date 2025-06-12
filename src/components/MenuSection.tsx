import React, { useState } from 'react';
// Import images
import blueBoost from '@/assets/images/acai-bowls/Blue Boost.png';
import coconutRecharge from '@/assets/images/acai-bowls/Coconut Recharge.png';
import dragonStrength from '@/assets/images/acai-bowls/Dragon Strength.png';
import goldenEnergy from '@/assets/images/acai-bowls/Golden energy.png';
import passionVitality from '@/assets/images/acai-bowls/Passion Vitality.png';
import creepyCrepe from '@/assets/images/acai-bowls/creepy crepe.png';
// Import juice images
import beetBoost from '@/assets/images/juice/Beet boost.png';
import citrusSunrise from '@/assets/images/juice/Citrus sunrise.png';
import coldCure from '@/assets/images/juice/Cold cure.png';
import coolSplash from '@/assets/images/juice/Cool splash.png';
import ironMan from '@/assets/images/juice/Iron man.png';
import kingGreen from '@/assets/images/juice/King Green.png';
import slimRose from '@/assets/images/juice/Slim rose.png';
import sweetKick from '@/assets/images/juice/Sweet Kick.png';
import zincBoost from '@/assets/images/juice/Zinc boost.png';

// Import protein images
import berryPower from '@/assets/images/protine/Berry power.png';
import cookieKing from '@/assets/images/protine/Cookie king.png';
import flaxPower from '@/assets/images/protine/Flax power.png';
import greenPower from '@/assets/images/protine/Green power.png';
import muscleMaker from '@/assets/images/protine/Muscle maker.png';
import oatsPower from '@/assets/images/protine/Oats power.png';
import powerBlend from '@/assets/images/protine/Power blend.png';
import strongForce from '@/assets/images/protine/Strong force.png';

// Import smoothie images
import berryBliss from '@/assets/images/smoothies/Berry Bliss.png';
import creamyDream from '@/assets/images/smoothies/Creamy Dream.png';
import goldenWave from '@/assets/images/smoothies/Golden wave.png';
import greenMonster from '@/assets/images/smoothies/Green monster.png';
import lemonade from '@/assets/images/smoothies/Lemonade.png';
import miniMint from '@/assets/images/smoothies/Mini mint.png';
import nuttyKick from '@/assets/images/smoothies/Nutty Kick.png';
import oreoBlend from '@/assets/images/smoothies/Oreo blend.png';
import powerHorse from '@/assets/images/smoothies/Power horse.png';
import fiveStars from '@/assets/images/smoothies/5 stars go fresh.png';
import brainBoost from '@/assets/images/smoothies/Brain boost.png';
import brightSunshine from '@/assets/images/smoothies/Bright Sunshine.png';
import chocoDate from '@/assets/images/smoothies/Choco date.png';
import honeymoon from '@/assets/images/smoothies/Honeymoon.png';

// Import tea images
import adaniTea from '@/assets/images/tea/Adani tea.png';
import blackTea from '@/assets/images/tea/Black Tea.png';
import chamomileTea from '@/assets/images/tea/Chamomile Tea.png';
import gingerTea from '@/assets/images/tea/Ginger Tea.png';
import greenTea from '@/assets/images/tea/Green tea.png';
import hibiscusTea from '@/assets/images/tea/Hibiscus Tea.png';
import mintTea from '@/assets/images/tea/Mint tea.png';
import whiteTea from '@/assets/images/tea/White Tea.png';

// Import shot images
import shot1 from '@/assets/images/shots/1.png';
import shot2 from '@/assets/images/shots/2.png';
import shot3 from '@/assets/images/shots/3.png';
import shot4 from '@/assets/images/shots/4.png';
import shot5 from '@/assets/images/shots/5.png';
import shot6 from '@/assets/images/shots/6.png';

// Import other images
import beanSandwich from '@/assets/images/others/Bean Sandwich.png';
import brownToast from '@/assets/images/others/Brown toast.png';
import crazySandwich from '@/assets/images/others/Crazy Sandwich.png';
import eggySandwich from '@/assets/images/others/Eggy Sandwich.png';
import sambosa from '@/assets/images/others/Sambosa.png';

const menuData = {
  acaiBowls: [
    {
      name: 'Blue Boost',
      price: '$14.99',
      description: 'Granola, Banana, Blueberry,Coconut Shaving, Honey',
      image: blueBoost
    },
    {
      name: 'Dragon Strength',
      price: '$14.99',
      description: 'Granola, Banana, Strawberry, Coconut Shaving, Nutella',
      image: coconutRecharge
    },
    {
      name: 'Passion Vitality',
      price: '$14.99',
      description: 'Granola, Banana, Blueberry, Blackberries, Coconut Shaving, Almond butter',
      image: dragonStrength
    },
    {
      name: 'Golden Energy',
      price: '$14.99',
      description: 'Granola, Banana, blackberry, Coconut Shaving, Peanut butter',
      image: goldenEnergy
    },
    {
      name: 'Coconut Recharge',
      price: '$14.99',
      description: 'Granola, Banana, blueberry,Strawberry, Chocolate',
      image: passionVitality
    },
    {
      name: 'Creepy Crepe',
      price: '$5.99',
    description: 'Banana, Strawberry, Blueberry, Kiwi, Almonds, Greek Yogurt, Icecream, Peanut butter, Chocolate',
      image: creepyCrepe
    },
  ],
  juice: [
    {
      name: 'Beet Boost',
      price: '$8.49 - $11.99',
      description: 'Beets, Apple, Carrot, Lemon, Ginger',
      image: beetBoost
    },
    {
      name: 'Citrus Sunrise',
      price: '$8.49 - $11.99',
      description: 'Orange, Carrots, Pineapple',
      image: citrusSunrise
    },
    {
      name: 'Cold Cure',
      price: '$8.49 - $11.99',
      description: 'Orange, Ginger, Lemon, Lime',
      image: coldCure
    },
    {
      name: 'Cool Splash',
      price: '$8.49 - $11.99',
      description: 'Watermelon, Cucumber, Mint, Lemon',
      image: coolSplash
    },
    {
      name: 'Iron Man',
      price: '$8.49 - $11.99',
      description: 'Apple, Beets, Pineapple, Ginger, Kale',
      image: ironMan
    },
    {
      name: 'King Green',
      price: '$8.49 - $11.99',
      description: 'Green Apple, Lime, Cucumber, Kale, Spinach',
      image: kingGreen
    },
    {
      name: 'Slim Rose',
      price: '$8.49 - $11.99',
      description: 'Pineapple, Lemon, Cucumber, Spinach, Celery',
      image: slimRose
    },
    {
      name: 'Sweet Kick',
      price: '$8.49 - $11.99',
      description: 'Pineapple, Kiwi, Orange, Ginger, Lime',
      image: sweetKick
    },
    {
      name: 'Zinc Boost',
      price: '$8.49 - $11.99',
      description: 'Kiwi, Apple, Lime, Ginger',
      image: zincBoost
    }
  ],
  protein: [
    {
      name: 'Berry Power',
      price: '$8.49 - $11.99',
      description: 'Strawberry, Blueberry, Banana, Dates, Flaxseeds, Choice of protein',
      image: berryPower
    },
    {
      name: 'Cookie King',
      price: '$8.49 - $11.99',
      description: 'Banana, Oreo, Milk,  Choice of protein',
      image: cookieKing
    },
    {
      name: 'Flax Power',
      price: '$8.49 - $11.99',
      description: 'Banana, Mile, Peanut butter, Flaxseeds, Choice of protein',
      image: flaxPower
    },
    {
      name: 'Green Power',
      price: '$8.49 - $11.99',
      description: 'Avocado, Banana, Mango, Kale, Spinach, Choice of protein',
      image: greenPower
    },
    {
      name: 'Muscle Maker',
      price: '$8.49 - $11.99',
      description: '4 Eggs whites, Banana, Peanut butter, Choice of protein',
      image: muscleMaker
    },
    {
      name: 'Oats Power',
      price: '$8.49 - $11.99',
      description: 'Oats, Banana, Milk, Chocolate,Choice of protein',
      image: oatsPower
    },
    {
      name: 'Power Blend',
      price: '$8.49 - $11.99',
      description: 'Banana, Spinach, Almond milk, Peanut butter, Choice of protein',
      image: powerBlend
    },
    {
      name: 'Strong Force',
      price: '$$8.49 - $11.99',
      description: 'Mango, Banana, Strawberry, Peanut butter, Choice of protein',
      image: strongForce
    }
  ],
  smoothies: [
    {
      name: 'Berry Bliss',
      price: '$7.99 - $10.99',
      description: 'Blackberry, Strawberry, Blueberry',
      image: berryBliss
    },
    {
      name: 'Creamy Dream',
      price: '$7.99 - $10.99',
      description: 'Avocado, Banana, Mango, Spinach, Chia seeds',
      image: creamyDream
    },
    {
      name: 'Golden Wave',
      price: '$7.99 - $10.99',
      description: 'Mango, Banana, Turmeric, Milk',
      image: goldenWave
    },
    {
      name: 'Green Zen',
      price: '$7.99 - $10.99',
      description: 'Banana, Pineapple, Cucumber, Spinach, Kale',
      image: greenMonster
    },
    {
      name: 'Lemonade',
      price: '$7.99 - $10.99',
      description: 'Lime, Water ( Mint, Ginger, Milk)',
      image: lemonade
    },
    {
      name: 'Mini Mint',
      price: '$7.99 - $10.99',
      description: 'Mango, Cucumber, Mint',
      image: miniMint
    },
    {
      name: 'Nutty Kick',
      price: '$7.99 - $10.99',
      description: 'Banana, Blueberry, Peanut butter, Almond milk',
      image: nuttyKick
    },
    {
      name: 'Oreo Blend',
      price: '$7.99 - $10.99',
      description: 'Banana, Oreo, Peanut butter, Milk',
      image: oreoBlend
    },
    {
      name: 'Power Horse',
      price: '$7.99 - $10.99',
      description: 'Banana, Ginger, Spinach, Yogurt, Honey, Almond, Maca powder',
      image: powerHorse
    },
    {
      name: '5 Stars Go Fresh',
      price: '$7.99 - $10.99',
      description: 'Apple, Banana, Mango, Pineapple, Dates, Ice cream, Toppings, Milk',
      image: fiveStars
    },
    {
      name: 'Brain Boost',
      price: '$7.99 - $10.99',
      description: 'Blueberries, banana, almond milk, honey',
      image: brainBoost
    },
    {
      name: 'Bright Sunshine',
      price: '$7.99 - $10.99',
      description: 'Orange, Mango, Pineapple, Banana, Lemon',
      image: brightSunshine
    },
    {
      name: 'Choco Date',
      price: '$7.99 - $10.99',
      description: 'Banana, Dates, Oats, Chocolate milk',
      image: chocoDate
    },
    {
      name: 'Honeymoon',
      price: '$7.99 - $10.99',
      description: 'Apple, Banana, Mango, Pineapple, Dates, Toppings, Milk',
      image: honeymoon
    }
  ],
  tea: [
    {
      name: 'Adani Tea',
      price: '$4.99',
      description: 'Enhances moods, boosts energy.',
      image: adaniTea
    },
    {
      name: 'Black Tea',
      price: '$4.99',
      description: 'Supports heart health, enhances focus',
      image: blackTea
    },
    {
      name: 'Chamomile Tea',
      price: '$4.99',
      description: 'Promotes relaxation, improves sleep.',
      image: chamomileTea
    },
    {
      name: 'Ginger Tea',
      price: '$4.99',
      description: 'Reduces inflammation, aids digestion.',
      image: gingerTea
    },
    {
      name: 'Green Tea',
      price: '$4.99',
      description: 'Improves brain function, supports heart health.',
      image: greenTea
    },
    {
      name: 'Hibiscus Tea',
      price: '$4.99',
      description: 'Lowers boold pressure, supports heart health.',
      image: hibiscusTea
    },
    {
      name: 'Mint Tea',
      price: '$4.99',
      description: 'Soothes digestion, relieves stress.',
      image: mintTea
    },
    {
      name: 'White Tea',
      price: '$4.99',
      description: 'Promotes healthy skin high in antioxidants.',
      image: whiteTea
    }
  ],
  shots: [
    {
      name: 'Aids digestion, Reduces bloatin and Supports gut health.',
      price: '$4.75',
      description: 'Pineapple, Ginger, Lemon and Mint Shot',
      image: shot1
    },
    {
      name: 'Perfect for colds and gut health. done',
      price: '$4.75',
      description: 'Ginger, Lemon Shot',
      image: shot2
    },
    {
      name: 'Supports immunity, Eye health and Skin glow.',
      price: '$4.75',
      description: 'Orange, Carrot, Lemon and Ginger Shot',
      image: shot3
    },
    {
      name: 'Detox, Digest and Immunity Boost with Vitamins. done',
      price: '$4.75',
      description: 'Celery, Green apple, Lemon, Ginger, Spinach Shot',
      image: shot4
    },
    {
      name: 'Great for detox and energy. done',
      price: '$4.75',
      description: 'Ginger, Lemon, Turmeric, Cayenne Shot',
      image: shot5
    },
    {
      name: 'Ideal for heart health and Endurance.',
      price: '$4.75',
      description: 'Beet, Red apple, Ginger, Lemon',
      image: shot6
    }
  ],
  Sandwichs: [
   
    {
      name: 'Bean Sandwich',
      price: '$5.99',
      description: 'A comforting sandwich filled with slow-cookedwhite beans, onions, tomatoes and hint of spice',
      image: beanSandwich
    },
    {
      name: 'Brown Toast',
      price: '$4.99',
      description: 'Tomato, Spinach, Creamy cheese, Boild egg, Avocado, Lettuce.',
      image: brownToast
    },
    {
      name: 'Crazy Sandwich',
      price: '$6.99',
      description: 'Boiled eggs, Shredded maxican cheese, Strawberry jam, Sweet halawa, Creamy cheese, Salty cheese',
      image: crazySandwich
    },

    {
      name: 'Eggy Sandwich',
      price: '$5.99',
      description: 'Tomato, Spinach, Creamy cheese, Boild egg, Avocado, Lettuce.',
      image: eggySandwich
    },
    {
      name: 'Sambosa',
      price: '$4.99',
      description: 'Crispy pastry stuffed with spiced meat or veggies',
      image: sambosa
    }
  ],
};

const getImageStyle = (category: string) => {
  switch(category) {
    case 'smoothies':
      return 'h-68 object-contain'; // Taller container for smoothies
    case 'juice':
      return 'h-68 object-contain'; // Medium height for juices
    case 'shots':
      return 'h-76 object-contain'; // Shorter for shots
    case 'tea':
      return 'h-76 object-contain'; // Medium height for tea
    case 'protein':
      return 'h-68 object-contain'; // Specific height for protein
    case 'Sandwichs':
      return 'h-62 object-cover'; // Taller for sandwiches
    case 'acaiBowls':
      return 'h-46 object-cover'; // Medium height for bowls
    default:
      return 'h-48 object-cover';
  }
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('juice');

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-green-900">Our Menu</h2>
      
      <div className="overflow-x-auto pb-4 mb-8">
        <div className="flex flex-nowrap justify-start md:justify-center gap-2 min-w-max px-4">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-base font-semibold transition-all
                ${activeCategory === category
                  ? 'bg-green-900 text-white'
                  : 'bg-green-900 text-white opacity-75 hover:opacity-100 hover:text-yellow-400'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className={`w-full ${getImageStyle(activeCategory)} transform hover:scale-110 transition-transform duration-300`}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold text-green-900">{item.name}</h3>
                <span className="text-xl text-yellow-600 font-bold">{item.price}</span>
              </div>
              <p className="text-lg text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;