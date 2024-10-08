const MAX_ITEMS = 100; // 최대 항목 수

const stories = [];
const posts = [];
const memos = [];

// 스토리 추가 버튼 클릭 시
document.getElementById('add-story').addEventListener('click', () => {
    document.querySelector('#stories .file-upload').classList.toggle('hidden');
});

// 게시물 추가 버튼 클릭 시
document.getElementById('add-post').addEventListener('click', () => {
    document.querySelector('#posts .file-upload').classList.toggle('hidden');
});

// 스토리 확인 버튼 클릭 시
document.getElementById('confirm-story').addEventListener('click', () => {
    const storyImg = document.getElementById('story-img').files[0];
    if (storyImg) {
        const reader = new FileReader();
        reader.onload = function(event) {
            if (stories.length >= MAX_ITEMS) {
                stories.shift(); // 가장 오래된 항목 삭제
                document.getElementById('story-container').firstChild.remove(); // UI에서 첫 번째 항목 삭제
            }
            stories.push(event.target.result);
            const storyDiv = document.createElement('div');
            storyDiv.innerHTML = `<img src="${event.target.result}" style="width: 100%; border-radius: 20px;">`;
            document.getElementById('story-container').appendChild(storyDiv);
            document.getElementById('story-img').value = ''; // 입력 필드 초기화
            document.querySelector('#stories .file-upload').classList.add('hidden'); // 드롭다운 숨김
        };
        reader.readAsDataURL(storyImg);
    }
});

// 게시물 확인 버튼 클릭 시
document.getElementById('confirm-post').addEventListener('click', () => {
    const postImg = document.getElementById('post-img').files[0];
    const postText = document.getElementById('post-text').value;
    if (postImg && postText) {
        const reader = new FileReader();
        reader.onload = function(event) {
            if (posts.length >= MAX_ITEMS) {
                posts.shift(); // 가장 오래된 항목 삭제
                document.getElementById('post-container').firstChild.remove(); // UI에서 첫 번째 항목 삭제
            }
            posts.push({ Img: event.target.result, Text: postText });
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `<img src="${event.target.result}" style="width: 100%; border-radius: 10px;"><p>${postText}</p>`;
            document.getElementById('post-container').appendChild(postDiv);
            document.getElementById('post-img').value = ''; // 입력 필드 초기화
            document.getElementById('post-text').value = '';
            document.querySelector('#posts .file-upload').classList.add('hidden'); // 드롭다운 숨김
        };
        reader.readAsDataURL(postImg);
    }
});

// 메모 추가 버튼 클릭 시
document.getElementById('add-memo').addEventListener('click', () => {
    document.querySelector('#memos .input-area').classList.toggle('hidden');
});

// 메모 제출
document.getElementById('submit-memo').addEventListener('click', () => {
    const memoText = document.getElementById('memo-text').value;
    if (memoText) {
        if (memos.length >= MAX_ITEMS) {
            memos.shift(); // 가장 오래된 항목 삭제
            document.getElementById('memo-container').firstChild.remove(); // UI에서 첫 번째 항목 삭제
        }
        memos.push(memoText);
        const memoDiv = document.createElement('div');
        memoDiv.innerHTML = `<p>${memoText}</p>`;
        document.getElementById('memo-container').appendChild(memoDiv);
        document.getElementById('memo-text').value = ''; // 입력 필드 초기화
        document.querySelector('#memos .input-area').classList.add('hidden'); // 드롭다운 숨김
    }
});

// 내 계정 버튼 클릭 시
document.getElementById('account-btn').addEventListener('click', () => {
    document.getElementById('stories').classList.add('hidden');
    document.getElementById('posts').classList.add('hidden');
    document.getElementById('memos').classList.add('hidden');
    document.getElementById('account').classList.remove('hidden');
});

// 홈으로 돌아가기 버튼 클릭 시
document.getElementById('back-home').addEventListener('click', () => {
    document.getElementById('account').classList.add('hidden');
    document.getElementById('stories').classList.remove('hidden');
    document.getElementById('posts').classList.remove('hidden');
    document.getElementById('memos').classList.remove('hidden');
});

// 추가 버튼 클릭 시 드롭다운 토글
document.getElementById('add-dropdown').addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('hidden');
});

// 드롭다운 메뉴에서 스토리 추가 클릭 시
document.getElementById('add-story-dropdown').addEventListener('click', () => {
    document.querySelector('#stories .file-upload').classList.remove('hidden');
    document.querySelector('.dropdown').classList.add('hidden');
});

// 드롭다운 메뉴에서 게시물 추가 클릭 시
document.getElementById('add-post-dropdown').addEventListener('click', () => {
    document.querySelector('#posts .file-upload').classList.remove('hidden');
    document.querySelector('.dropdown').classList.add('hidden');
});

// 드롭다운 메뉴에서 메모 추가 클릭 시
document.getElementById('add-memo-dropdown').addEventListener('click', () => {
    document.querySelector('#memos .input-area').classList.remove('hidden');
    document.querySelector('.dropdown').classList.add('hidden');
});