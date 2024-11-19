/* eslint-disable react/prop-types */
import styles from '../Styles/ProductosDestacados.module.css';
import  { useState } from 'react';
import superstayMatteInk from '../Photos/products/superstay-matte-ink.webp';
import fentyProFiltrFoundation from '../Photos/products/fenty-pro-filtr-foundation.png';
import nakedHeatPalette from '../Photos/products/naked-heat-palette.jpg';
import narsCreamyConcealer from '../Photos/products/nars-creamy-concealer.jpg'
import macRubyWoo from '../Photos/products/mac-ruby-woo.avif'
import tarteShapeTape from '../Photos/products/tarte-shape-tape.webp'
import airbrushFlawlessFoundation from '../Photos/products/airbrush-flawless-foundation.avif'
import browWiz from '../Photos/products/brow-wiz.webp'

const products = [
  { name: 'Maybelline SuperStay Matte Ink', description: 'Long-lasting liquid lipstick with a matte finish.', price: '$20', image: superstayMatteInk, category: 'Lipsticks' },
  { name: 'Fenty Beauty Pro Filt\'r Soft Matte Foundation', description: 'A long-wear foundation with buildable coverage and a matte finish.', price: '$35', image: fentyProFiltrFoundation, category: 'Foundations' },
  { name: 'Urban Decay Naked Heat Palette', description: 'A warm-toned eyeshadow palette with 12 sultry shades.', price: '$54', image: nakedHeatPalette, category: 'Eye Shadows' },
  { name: 'NARS Radiant Creamy Concealer', description: 'Award-winning concealer with radiant coverage.', price: '$30', image: narsCreamyConcealer, category: 'Concealers' },
  { name: 'MAC Satin Lipstick - Ruby Woo', description: 'Iconic vivid red lipstick with a satin finish.', price: '$19', image: macRubyWoo, category: 'Lipsticks' },
  { name: 'Tarte Shape Tape Concealer', description: 'Full-coverage concealer for a flawless look.', price: '$27', image: tarteShapeTape, category: 'Concealers' },
  { name: 'Charlotte Tilbury Airbrush Flawless Foundation', description: 'Full-coverage foundation with a flawless finish.', price: '$44', image: airbrushFlawlessFoundation, category: 'Foundations' },
  { name: 'Anastasia Beverly Hills Brow Wiz', description: 'Ultra-slim brow pencil for precise detailing.', price: '$23', image: browWiz, category: 'Brows' },
]

function ProductosDestacados() {
 return (
   <div className={styles.container}>
     <div className={styles.titleSection}>
       <h1>Featured Products</h1>
     </div>
     <div className={styles.scrollContainerWrapper}>
       <div className={styles.scrollContainer}>
         {products.map((product, index) => (
           <div key={index} className={styles.productCard}>
             <img src={product.image} alt={product.name} className={styles.productImage} />
             <h3 className={styles.productName}>{product.name}</h3>
             <p className={styles.productDescription}>{product.description}</p>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
}

export default ProductosDestacados;
