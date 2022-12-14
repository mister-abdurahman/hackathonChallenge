'use script'
// MTN: 07025, 07026, 0703, 0704, 0706, 0803, 0806, 0810, 0813, 0814, 0816, 0903 and 0906
// GLO: 0805 0807 0705 0815 0811 0905
// Airtel: 0802 0808 0708 0812 0701 0902
// 9Mobile: 0809 0818 0817 0909


const theImg = document.querySelector('.the-image')
const checkBtn = document.querySelector('.the-btn');
const inputPhone = document.querySelector('#phone');

// To hide Image
theImg.classList.add('hidden');

const mtnData = ["0702", "0703", "0704", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906"]
const gloData = ["0805", "0807", "0705", "0815", "0811", "0905"]
const airtelData = ['0802', '0808', '0708', '0812', '0701', '0902']
const nineMobileData = ['0809', '0818', '0817', '0909']

checkBtn.addEventListener('click', function(e){
    e.preventDefault()
    const numInput = inputPhone.value.slice(0, 4)
    // console.log(numInput)

    //the conditions to display each service provider image

    if(mtnData.some(cur => cur === numInput)){
        theImg.classList.remove('hidden')
        theImg.src = 'mtn.png'
    }
    if(gloData.some(cur => cur === numInput)){
        theImg.classList.remove('hidden')
        theImg.src = 'glo.png'
    }
    if(airtelData.some(cur => cur === numInput)){
        theImg.classList.remove('hidden')
        theImg.src = 'airtel.png'
    }
    if(nineMobileData.some(cur => cur === numInput)){
        theImg.classList.remove('hidden')
        theImg.src = '9mobile.png'
    }
})

// At this stage, all we're left with is the advanced features.

// Please if anyone can make the UI better. I obviuosly suck at design (but pls don't alter the class names😅)