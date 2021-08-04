import React from 'react';
import Image from 'next/image'
import { HomeBlockTwoWrapper, Intros, WomanBannner, TextAbsolute } from './HomeBlockTwoStyles';

const HomeBlockTwo: React.FC = () => {
    return (
        <HomeBlockTwoWrapper>
            <Intros>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus rerum quidem quae necessitatibus, nostrum deleniti accusantium culpa maiores explicabo aspernatur.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus rerum quidem quae necessitatibus, nostrum deleniti accusantium culpa maiores explicabo aspernatur.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus rerum quidem quae necessitatibus, nostrum deleniti accusantium culpa maiores explicabo aspernatur.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus rerum quidem quae necessitatibus, nostrum deleniti accusantium culpa maiores explicabo aspernatur.</p>
                </div>
            </Intros>
            <WomanBannner id="about">
                <Image priority src="https://images.pexels.com/photos/3746210/pexels-photo-3746210.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" layout="fill" alt="woman banner" />
                <TextAbsolute one>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam magni distinctio, consequuntur ipsum explicabo!</p>
                </TextAbsolute>
                <TextAbsolute two>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam magni distinctio, consequuntur ipsum explicabo!</p>
                </TextAbsolute>
                <TextAbsolute three>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam magni distinctio, consequuntur ipsum explicabo!</p>
                </TextAbsolute>
                <TextAbsolute four>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam magni distinctio, consequuntur ipsum explicabo!</p>
                </TextAbsolute>
            </WomanBannner>
        </HomeBlockTwoWrapper>
    )
}

export default HomeBlockTwo;