import React from 'react'
import './Home.css'
import { HomeItems } from './HomeItems'

function Home() {

    const homeContent = 'My name is Aymar Sinaise. I was born and raised in Desruisseaux. Growing up I was blessed to be part of a community that looked out for each other. Though many of us were not the wealthiest monetarily, we could always count on a neighbor or friend for a few basic essentials. I am an alumnus of St.Mary’s college where I attended from 1993-1998. Besides my education, one of my passions as a kid was playing football where I had the honor of representing my county in an under 18 tournaments in Haiti. As a kid, I was unable to afford the gear needed to play the sport, so during my competitions I was able to borrow a pair of football boots, shin guards, or socks from my more fortunate friends. Fast forwarding a few years, because of my football abilities I was able to land an athletic scholarship to study and play at a high school in Minnesota. After doing a year in High school, I was also able to get another scholarship to the University of Wisconsin - Madison. There I played soccer at a division 1 level while getting bachelor’s degree in Accounting. After I was done with school, I began coaching as a secondary job. Whenever I visited home (St.Lucia), I always felt a sense of joy seeing the soccer field overflowing with kids eager to learn and enjoy the beautiful game in the evenings. It was also sad to see that many did not have the proper gear or even the coaches did not have the right equipment to teach the kids. This was a familiar sight that brought back many memories. Through my contacts in coaching in Wisconsin I was able to start equipment drives with the club I coached with. During those drives I was able to collect gently used football gear from families of the club and send it along to various clubs in St. Lucia. As I aforementioned, education was also an integral aspect of my life. Growing up on the island, not having the right football gear wasn’t the only problem faced by many kids and their families. I know that many families face financial difficulties as well. Many parents have to make the tough decision about whether to provide the basic needs for their kids or buy them the necessary textbooks and school supplies that they need. I am a firm believer that it is up to us adults to reinvest into the youth in our community. The Rico’s Foundation came about as a way to help give back to struggling kids and families in our community. Rico’s Foundation is a nonprofit organization dedicated to helping those in need overcome challenges, while developing meaningful relationships with them. Our objectives are:'
    return (
        <div className='home-container'>
            <h1 className='header'>Welcome to Rico&apos;s Foundation!</h1>
            <div className='home-body'>
                <div><img className='aymarHome' src='Aymar_Home.jpg' alt='Aymar' />{homeContent}</div>
                <div>
                    {HomeItems.map((item, index) => {
                        return (
                            <div key={index}>
                                <li className='bulletPts'>{item.content}</li>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
