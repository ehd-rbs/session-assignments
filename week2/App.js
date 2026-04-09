// 📄 src/App.js

import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
      <ProfileCard
        name="최동균"
        age={25}
        dream="프론트엔드 개발자"
        emoji="🧑‍💻"
        hobby="잠자기"
        mbti="ISFP"
      />
    </div>
  );
}

export default App;