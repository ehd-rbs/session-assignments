// src/ProfileCard.jsx

import { useState } from 'react';

function ProfileCard({ name, age, dream, emoji, hobby, mbti }) {
    const [likes, setLikes] = useState(0);
    const [show, setShow] = useState(false);

    function handleLike() {
        setLikes(likes + 1);
    }

    function handleReset() {
        setLikes(0);
    }
    function toggleShow() {
        setShow(!show);
        
    }

    return (
        <div style={{
            border: '2px solid #61dafb',
            borderRadius: '16px',
            padding: '24px',
            width: '280px',
            textAlign: 'center',
            fontFamily: 'sans-serif'
        }}>
            <div style={{ fontSize: '48px' }}>{emoji}</div>
            <h2>{name}</h2>
            <p>나이: {age}세</p>
            <p>꿈: {dream}</p>
            <p>취미: {hobby}</p>
            <p>mbti: {mbti}</p>
            <button onClick={toggleShow} style={{ marginTop: '10px' }}>
                {show ? '소개 숨기기' : '소개 보기'}
            </button>
            {show && (
                <p style={{ marginTop: '10px' }}>
                    안녕하세요 저는 최동균입니다
                </p>

            )}
            <div style={{ marginTop: '16px' }}>
                <p style={{ fontSize: '20px' }}>❤️ {likes}</p>
                <button onClick={handleLike} style={{ marginRight: '8px' }}>+ 좋아요</button>
                <button onClick={handleReset}>초기화</button>
            </div>
        </div>
    );
}

export default ProfileCard;