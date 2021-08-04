import React from 'react';
import Image from 'next/image'
import { HomeBlockThreeWrapper, TextsFlex, DepoimentsWrapper } from './HomeBlockThreeStyles';

const HomeBlockThree: React.FC = () => {
    return (
        <HomeBlockThreeWrapper id="join">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem voluptas molestias temporibus vel unde error ullam possimus quisquam necessitatibus sed eum amet maxime nam ipsum repudiandae qui sequi eaque commodi alias eveniet, ad veritatis corporis asperiores? Nemo ad dignissimos repellat modi eligendi mollitia quis aliquid perferendis laborum quae? Ea ullam ipsum, doloremque provident aut temporibus repellat distinctio quo recusandae minus quia suscipit facere asperiores illo unde placeat at, quisquam nostrum itaque quibusdam quidem sequi. Itaque, id cum ab neque omnis corrupti, officia voluptatum similique aut aliquid assumenda dolore necessitatibus, quaerat doloremque soluta. Animi quasi iure enim voluptatum alias dolorem impedit!</p>
            <TextsFlex>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis quibusdam temporibus placeat magni delectus esse sed quo corrupti possimus eos, dolorem vel, saepe quaerat culpa dolorum eaque? Sequi ut aut totam consequatur minima?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas dolor facere reiciendis laboriosam eveniet quia dolores asperiores eius voluptatibus corrupti architecto, quo ipsam possimus laborum.</p>
            </TextsFlex>
            <DepoimentsWrapper>
                <div>
                    <Image src="https://images.pexels.com/photos/3310693/pexels-photo-3310693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width={100} height={100} alt="people" />
                    <h3>Amanda Ribeiro</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div>
                    <Image src="https://images.pexels.com/photos/1820934/pexels-photo-1820934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width={100} height={100} alt="people" />
                    <h3>Carla Pereira</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div>
                    <Image src="https://images.pexels.com/photos/2648203/pexels-photo-2648203.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width={100} height={100} alt="people" />
                    <h3>Julia Oliveira</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div>
                    <Image src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&w=500" width={100} height={100} alt="people" />
                    <h3>Carol Silva</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </DepoimentsWrapper>
        </HomeBlockThreeWrapper>
    )
}

export default HomeBlockThree;