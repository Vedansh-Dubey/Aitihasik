import React, { Component } from 'react'
import styled from 'styled-components'
export const Forts = () => 
{
  return (
    <Wrapper>
   <div class="container">
      <div class="card">
         <div class="card-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pratapgad_%282%29.jpg/1024px-Pratapgad_%282%29.jpg" alt="Pratapgad Fort"></img>
         </div>   
   
         <div class="card-body">
            <span class="tag tag-orange"> Maharashtra </span>
            <h4>Pratapgad Fort </h4>
            <p>Chhatrapati Shivaji, founder of Maratha empire in western India in 1664, was well known for his forts. Many, like Panhala Fort and Rajgad existed before him but others, like Sindhudurg and Pratapgad, were built by him from scratch.[citation needed] Also, the fort of Raigad was built as the place of throne, i.e., the capital, of Maratha Empire by Hirojee Indulkar on the orders of the Chhatrapati. This is the place where Shivaji was crowned and today also his Samadhi (shrine) stands in front of the Jagadishwar temple. These forts were central to his empire and their remains are among the foremost sources of information about his rule. The French missionary Father Fryer witnessed the fortifications of Gingee, Madras, built by Shivaji after its conquest, and appreciated his technical know-how and knowledge. </p>
         </div>   
      </div>

      <div class="card">
         <div class="card-header">
            <img src="https://images.indianexpress.com/2021/12/Eaigad.jpg" alt="Raigad Fort"></img>
         </div>   
   
         <div class="card-body">
            <span class="tag tag-orange"> Maharashtra </span>
            <h4>Raigad Fort</h4>
            <p> Raigad is a hill fort situated about 25 km from Mahad in the Raigad district and stands 2,851 feet above the sea level. The British Gazette states the fort was known to early Europeans as the Gibraltar of the East. Its decisive feature is a mile and a half flat top which has adequate room for buildings. In its prime, the fort had 300 stone houses and a garrison of 2,000 men. The fort, which was earlier called Rairi, was the seat of the Maratha clan Shirke in the 12th century. The fort changed hands a number of times from the dynasty of Bahaminis to the Nizamshahis and then the Adilshahis. In 1656, Chhatrapati Shivaji captured it from the More’s of Javli who were under the suzerainty of the Adilshahi Sultanate. The fort not only helped Shivaji challenge the supremacy of the Adilshahi dynasty but also opened up the routes towards Konkan for the extension of his power. Chhatrapati Shivaji is the tallest and the most revered icon in Maharashtra and there is a constant attempt by political parties of all hues to appropriate his legacy. Due to the significance of Raigad in his life, many political leaders make it a point to visit the fort.</p>
         </div>   
      </div>

      <div class="card">
         <div class="card-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Jhansi_fort2.JPG" alt="Jhansi Ka Kila"></img>
         </div>   
   
         <div class="card-body">
            <span class="tag tag-pink"> Uttar Pradesh </span>
            <h4> Jhansi Fort </h4>
            <p> The Jhansi fort is located in the middle of Jhansi city. Jhansi was besieged by the company forces of General Hugh Rose in March and April 1858 and was captured on 4 April 1858. Rani Lakshmi Bai fought bravely and then made a daring escape on horseback from the fort before the city was pillaged by Rose's troops.In 1861 the British Government gave the Jhansi fort and Jhansi city to Jiyaji Rao Scindia, the Maharaja of Gwalior, but the British took back Jhansi from Gwalior state in 1868.Every year in the month of January–February a grand occasion is held known as Jhansi Mahotsav when many eminent personalities and artists perform their play.

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