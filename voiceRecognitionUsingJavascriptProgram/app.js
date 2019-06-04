

const btn = document.querySelector('#talk');
const content = document.querySelector('.content');


//

const greetings = [
                    
                    'i am fine you little peice of love , tell me how you going?',
                    'Much better now that you are with me',
                    'Better now that I am talking to you.',
                    'Why do you ask? Are you a doctor?',
                    'My psychiatrist told me not to discuss it with strangers.'
                ];


const olive = [
                'hello humans, my name is OLIVE, a voice rekognition A P I programmed in java script on fourth of june 2019, have a good day thank you .'
];

const love = [
                'You must be a smooth-talking thief to have stolen my heart with just those simple words',
                'I will choose you over pizza every day of my life.',
                'I think you’re pretty awesome too.',
                'Fasten your seat belts, it is going to be a bumpy night, For a little date night ',
                'Roses are red, violets are blue. Sometimes you suck, but I love you too'
];

const bye = [

                'See yaaa goodbye',
                'Bye have a good day dear',
                'you too catch you later',
                'please dont go now'
];





const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('Voice Is activated, you can to microphone');
};

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    content.textContent = transcript;

    readOutLoud(transcript);
}

// add the llisten to button 

btn.addEventListener('click', () => {
    recognition.start();

});


function readOutLoud(message){

    const speech = new SpeechSynthesisUtterance();

    speech.text = 'what are you saying ? ';

    if(message.includes('how are you')) {
        const finalText =  greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    } 
    
    if(message.includes('how you know my name')) {
        const finalText =  name[Math.floor(Math.random() * name.length)];
        speech.text = finalText;
    }   

      if(message.includes('tell me about yourself')) {
        const finalText =  olive[Math.floor(Math.random() * olive.length)];
        speech.text = finalText;
    } 

    if(message.includes('I love you')) {
        const finalText =  love[Math.floor(Math.random() * love.length)];
        speech.text = finalText;
    } 

    if(message.includes('bye-bye')) {
        const finalText =  bye[Math.floor(Math.random() * bye.length)];
        speech.text = finalText;
    }     
 


    speech.volume = 4;

    speech.rate = 0.8;

    speech.pitch = 50;

    window.speechSynthesis.speak(speech);

}