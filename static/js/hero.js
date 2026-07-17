// Inject CSS for hero into the document so this .js file is valid JavaScript
const css = `
/*==================================================
            PREMIUM HERO BOTTLE
==================================================*/

.hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    isolation: isolate;
}


/*==============================
        BOTTLE GLOW
==============================*/

.hero-image::before{

    content:"";

    position:absolute;

    width:550px;

    height:550px;

    border-radius:50%;

    background:
        radial-gradient(circle,
        rgba(255,255,255,.12) 0%,
        rgba(255,255,255,.05) 30%,
        transparent 72%);

    filter:blur(60px);

    z-index:-3;

}


/*==============================
        GLASS RING
==============================*/

.hero-image::after{

    content:"";

    position:absolute;

    width:430px;

    height:430px;

    border-radius:50%;

    border:1px solid rgba(255,255,255,.06);

    z-index:-2;

}


/*==============================
        PERFUME IMAGE
==============================*/

.hero-image img{

    width:100%;

    max-width:480px;

    object-fit:contain;

    position:relative;

    z-index:5;

    filter:

        drop-shadow(0 30px 60px rgba(0,0,0,.6))

        drop-shadow(0 20px 90px rgba(255,255,255,.05));

    transition:1s cubic-bezier(.19,1,.22,1);

}


/*==============================
        HOVER EFFECT
==============================*/

.hero-image:hover img{

    transform:

        translateY(-12px)

        scale(1.04);

}


/*==============================
        REFLECTION
==============================*/

.hero-reflection{

    position:absolute;

    bottom:-35px;

    left:50%;

    transform:translateX(-50%);

    width:220px;

    height:60px;

    border-radius:50%;

    background:rgba(255,255,255,.06);

    filter:blur(40px);

    z-index:-1;

}
`;

const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

export default css;