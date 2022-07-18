import React, { Component } from 'react'
import styled from 'styled-components'
export const Ruler = () => {
  return (
    <Wrapper>
   <div class="container">
      <div class="card">
         <div class="card-header">
            <img src="https://static.sanatanprabhat.org/wp-content/uploads/sites/7/2021/04/11210300/RS971_shivaji_maharaj_colour_Goa.jpg" alt="Tesla Truck"></img>
         </div>   
   
         <div class="card-body">
            <span class="tag tag-orange"> Maharashtra </span>
            <h4> Chatrapati Shivaji Maharaj </h4>
            <p> Chatrapati Shivaji Maharaj was the founder of the Maratha Empire in western India. He is considered to be one of the greatest warriors of his time and even today, stories of his exploits are narrated as a part of the folklore. With his valor and great administrative skills, Shivaji carved out an enclave from the declining Adilshahi sultanate of Bijapur. It eventually became the genesis of the Maratha Empire. After establishing his rule, Shivaji implemented a competent and progressive administration with the help of a disciplined military and well-established administrative set-up. Shivaji is well-known for his innovative military tactics that centered around non-conventional methods leveraging strategic factors like geography, speed, and surprise to defeat his more powerful enemies. </p>
         </div>   
      </div>

      <div class="card">
         <div class="card-header">
            <img src="https://www.dauniv.ac.in/public/frontassets/image/Ahilyabai_holkar_320.jpg" alt=""></img>
         </div>   
   
         <div class="card-body">
            <span class="tag tag-purple"> Madhya Pradesh </span>
            <h4>Ahilyabai Holkar</h4>
            <p> Already trained to be a ruler, Ahilya Bai petitioned Peshwa Madhav Rao I after Malhar Rao and her son's death to grant her the administration of the Holkar dynasty. Some in Malwa objected to her assumption of rule, but the Holkar faction of Maratha army sided with her. The Peshwa granted her permission on 11 December 1767, with subhedar Tukoji Rao Holkar (Malhar Rao's adopted son) as her military head. She proceeded to rule Malwa in the most enlightened manner, even reinstating a Brahmin who had previously opposed her. Ahilya Bai paid regular visits to her subjects, being always accessible to anyone needing her help. With his valor and great administrative skills, Shivaji carved out an enclave from the declining Adilshahi sultanate of Bijapur. It eventually became the genesis of the Maratha Empire. After establishing his rule, Shivaji implemented a competent and progressive administration with the help of a disciplined military and well-established administrative set-up. Shivaji is well-known for his innovative military tactics that centered around non-conventional methods leveraging strategic factors like geography, speed, and surprise to defeat his more powerful enemies. </p>
         </div>   
      </div>

      <div class="card">
         <div class="card-header">
            <img src="https://image.shutterstock.com/image-vector/illustration-indian-background-nation-hero-260nw-789545911.jpg" alt="Jhansi Ki Rani - Lakshmibai"></img>
         </div>   
   
         <div class="card-body">
            <span class="tag tag-pink"> Uttar Pradesh </span>
            <h4> Jhansi Ki Rani Lakshmibai </h4>
            <p> Rani Lakshmi Bai was the queen of the princely state of Jhansi, which is located on the northern side of India. She was one of the most leading personalities of the first war of India’s independence that started in 1857.On 18th June, the British attacked Gwalior from all sides. She decided to break the enemy front and go out rather than surrendering. While breaking the military front, she came across a garden. She was not riding her ‘Rajratan’ horse. The new horse started going round and round near a canal instead of jumping and crossing it. Jhansi ki Rani – Rani Lakshmi Bai realized the consequences and turned back to attack the British army. She got injured, started bleeding and fell from her horse. Being in a man’s costume, the soldiers did not recognize her and left her there. The faithful servants of Rani took her to a nearby Gangadas Mutt and gave her Gangajal. She expressed her last wish that her body should not be touched by any British men and embraced a brave death. The revolutionaries all over the world, the organization of Sardar Bhagat Singh and in the end even the army of Netaji Subhashchandra Bose were inspired by the valour shown by Jhansi ki Rani – Rani Lakshmi Bai. The Jhansi ki Rani – Rani Lakshmi Bai breathed her last at the young age of 23 years.

</p>
         </div>   
      </div>
   </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
background-color: #252d4a;
font-family: "Open Sans", sans-serif;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
margin: 0;

.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: auto;
  }
  
  .card {
    background-color: #CDDFF8;
    border-radius: 10px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    margin-top:5px
  }
  .card-header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;
    min-height: 250px;
  }
  
  .tag {
    background: darkgray;
    border-radius: 50px;
    font-size: 12px;
    margin: 0;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;
  }
  
  .tag-orange {
    background-color: orange;
  }
  
  .tag-purple {
    background-color: lightslategray;
  }
  
  .tag-pink {
    background-color: peru;
  }
  
  .card-body h4 {
    margin: 10px 0;
  }
  
  .card-body p {
    font-size: 14px;
    margin: 0 0 40px;
  }
  
  @media (max-width: 940px) {
    .container {
      grid-template-columns: 1fr;
      width: 150%;
      justify-items: center;
    }
  }
`