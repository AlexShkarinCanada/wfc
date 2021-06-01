import React from 'react';
import Welcome from 'react-welcome-page'
import './WelcomePage.css'

const WelcomePage = () => {
    return(
        <div id='my-container' 
        style = {{
            height: '70%', 
           textAlign: 'center', 
           marginTop: '30px',
           fontSize: '18px'
            }}
        >
        <Welcome
                loopDuration={2100}
                data={[
                {
                image: ('https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309__480.jpg'),
                text: 'Alex Shkarin',
                imageSize: '400px',
                imageAnimation: 'flipInX',
                textAnimation: 'bounce',
                backgroundColor: '#ffffff',
                textColor: 'black'
                },
                {
                image: ('https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550__480.jpg'),
                text: 'Test for Front-End Developer',
                backgroundColor: '#ffffff',
                },
                {
                backgroundColor: '#ffffff',
                image: ('https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664__480.jpg'),
                text: 'to World Fashion Channel',
                textAnimation: 'rotateIn',                
                }
            ]}        
        />       
            <span>
                <p> Здравствуйте, мое имя Александр Шкарин. </p>
                <p>  Я подал заявку на должность "Front-End Developer" </p>
                <p>  В данном проекте представлено три задания, по тем требованиям, которые были указаны. </p>
                <p>  Спасибо за предоставленную возможность. </p>
             </span>         
        </div>
        )  
}

export default WelcomePage;