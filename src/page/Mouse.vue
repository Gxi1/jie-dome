<script setup>
import {onMounted} from 'vue';

onMounted(() => {
    const body = document.querySelector("body");

    function setPosition(e, scale) {
        const element = document.getElementById("g-pointer-1");
        const element2 = document.getElementById("g-pointer-2");
        const halfAlementWidth = element.offsetWidth / 2;
        const halfAlementWidth2 = element2.offsetWidth / 2;

        element.style.transform = `translate(${e.clientX - halfAlementWidth}px, ${e.clientY - halfAlementWidth}px)`;
        element2.style.transform = `translate(${e.clientX - halfAlementWidth2}px, ${e.clientY - halfAlementWidth2}px) scale(${scale})`;
        let style = document.createElement('style');
        style.innerHTML = '* {cursor: none !important;}';
        document.head.appendChild(style);
    }

    function setOpacity(opacity) {
        const element = document.getElementById("g-pointer-1");
        const element2 = document.getElementById("g-pointer-2");

        element.style.opacity = opacity;
        element2.style.opacity = opacity;
    }

    body.addEventListener('mousemove', (e) => {
        window.requestAnimationFrame(function () {
            setPosition(e, 1);
        });
    });

    body.addEventListener('mousedown', (e) => {
        setPosition(e, 0.75);
    });

    body.addEventListener('mouseup', (e) => {
        setPosition(e, 1);
    });

    body.addEventListener('mouseleave', (e) => {
        setOpacity(0);
    });

    body.addEventListener('mouseenter', (e) => {
        setOpacity(1);
    });
});

</script>

<template>
    <div id="mouse">
        <div id="g-pointer-1"></div>
        <div id="g-pointer-2"></div>
    </div>
</template>

<style scoped>
#g-pointer-1,
#g-pointer-2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #fff;
    mix-blend-mode: exclusion;
    z-index: 1;
    pointer-events: none;
}

#g-pointer-2 {
    width: 24px;
    height: 24px;
    background: #222;
    transition: .2s ease-out;
    mix-blend-mode: exclusion;
    transform-origin: center;
}
</style>