// #region INIT
const readMoreBtn_1 = document.querySelector('.show-more-btn-1');
const text_content_1 = document.querySelector('.hidden-text-1');

const readMoreBtn_2 = document.querySelector('.show-more-btn-2');
const text_content_2 = document.querySelector('.hidden-text-2');

const topDiv = document.querySelector('.hero');
const navigator = document.querySelector('.navigator');

const mailNormal = document.querySelector('#mail');
const mailfreelance = document.querySelector('#mail-freelance');
const mailFullTime = document.querySelector('#mail-fulltime');

const baseMail = "https://mail.google.com/mail/?view=cm&to=priyanshkrkashyap@gmail.com";
// const isMobile = /iPhone|Android/i.test(navigator.userAgent);
// #endregion 

// #region Readmore
readMoreBtn_1.addEventListener('click' , (e)=>
    {   
        const span = readMoreBtn_1.querySelector('span');
        if(text_content_1.classList.contains('active'))
        {   
            text_content_1.classList.remove('active');
            text_content_1.style.maxHeight = "0px";
            span.textContent = 'Show More';
        }
        else
        {
            
            text_content_1.classList.add('active');
            text_content_1.style.maxHeight = text_content_1.scrollHeight + "px";
            span.textContent = 'Show Less';
        }
    });
    
    
readMoreBtn_2.addEventListener('click' , (e)=>
    {   
        const span = readMoreBtn_2.querySelector('span');
        if(text_content_2.classList.contains('active'))
        {   
            text_content_2.classList.remove('active');
            text_content_2.style.maxHeight = "0px";
            span.textContent = 'Show More';
        }
        else
        {
            
            text_content_2.classList.add('active');
            text_content_2.style.maxHeight = text_content_2.scrollHeight + "px";
            span.textContent = 'Show Less';
        }
    });
//#endregion

// #region Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           if(navigator.classList.contains('active'))
           {
                navigator.classList.remove('active');
           }
           console.log("Visible");
        } 
        else {
            if(!navigator.classList.contains('active'))
                {
                    navigator.classList.add('active');
                }
                console.log("Not Visisble");
        }
    });
});

observer.observe(topDiv);
// #endregion



// mailNormal.href = !isMobile ? baseMail : mailNormal.href;
// mailfreelance.href = !isMobile ? baseMail+"&su=Enquiry%20for%20a%20freelance%20project." : mailfreelance.href;
// mailFullTime.href = !isMobile ? baseMail+"&su=Job%20Proposal%20for%20[Enter%20Designation].":mailFullTime.href;
