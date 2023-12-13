import React, { useEffect, useState } from 'react';

const ScrollAndPlayAudio = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!isScrolled && window.scrollY > 200) {
                // Điều kiện: trang chưa cuộn và đã cuộn qua 100px
                setIsScrolled(true);
            }
        };

        // Thêm lắng nghe sự kiện scroll khi component được mount
        window.addEventListener('scroll', handleScroll);

        // Loại bỏ lắng nghe sự kiện khi component bị unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]); // Dependency array chứa isScrolled để ngăn lặp vô hạn

    const onPlay = () => {
        // Phát nhạc audio (thay đổi đường dẫn phù hợp)
        const audio = new Audio('https://cdn.biihappy.com/ziiweb/wedding-musics/TaLaCuaNhau-DongNhiOngCaoThang.mp3');
        audio.play();
    }
    return (
        <div style={styles.container}>
            <div style={styles.playButton} onClick={onPlay}>
                ▶️ Play
            </div>
        </div>
    );
};
const styles = {
    container: {
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 999,
    },
    playButton: {
        cursor: 'pointer',
        backgroundColor: '#3498db',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
    },
};
export default ScrollAndPlayAudio;
