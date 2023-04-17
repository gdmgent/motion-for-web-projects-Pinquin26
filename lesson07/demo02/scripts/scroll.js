let articles  = gsap.utils.toArray('article');
articles.forEach(article => {
    gsap.from(article,{ 
        x:-300, 
        scrollTrigger: {trigger: article , toggleActions: 'restart reset play none'},
        duration:.5
    });
});

