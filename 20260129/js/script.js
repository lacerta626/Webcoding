document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorText = document.querySelector('.cursor-text');
    
    // 1. 마우스 움직임 감지
    window.addEventListener('mousemove', (e) => {
        // 커서 위치를 마우스 좌표로 업데이트
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 2. 호버 효과 (a 태그에 마우스 올렸을 때)
    const links = document.querySelectorAll('a, .logo img');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // 원디렉션처럼 커지는 효과
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.backgroundColor = 'rgba(153, 98, 183, 0.8)';
            cursorText.style.opacity = '1';
        });

        link.addEventListener('mouseleave', () => {
            // 다시 원래대로
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.backgroundColor = '#fb178d';
            cursorText.style.opacity = '0';
        });
    });
});
