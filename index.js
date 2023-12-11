// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "시험공부 하기 싫다" },
  { "number": 2, "message": "시험기간엔 뭘 해도 재밌다" },
  { "number": 3, "message": "코딩도 아니고 그냥 복붙하기만 했어" },
  { "number": 4, "message": "다들 크리스마스에 뭐하니" },
  { "number": 5, "message": "이걸 계속 눌러보는 아이들이 있을까" },
  { "number": 6, "message": "만약 그렇다면, 정말 고마워" },
  { "number": 7, "message": "씨에씨에 한자가 입력이 안 되네" },
  { "number": 8, "message": "나는 22일에 광주 가" },
  { "number": 9, "message": "1월부터는 서울임" },
  { "number": 10, "message": "이거 만들 수 있는 거 오늘까지긴 한데" },
  { "number": 11, "message": "원한다면 제 거 공유해드려요. 이 다음부터는 유료구독" },
  { "number": 12, "message": "방문해줘서 고마워. 12.12 서울의 봄 보고 오렴" },
  { "number": 13, "message": "내일 영어발표인데 과연 내가 준비했을까" },
  { "number": 14, "message": "설마 오늘까지도 보고 있다면 사랑해. 행복한 하루 보내길!" },
  { "number": 15, "message": "내일까지 디인입 서평, 퀴즈, 프로그래밍 과제를 끝내야 한다고 내게 일러주렴" },
  { "number": 16, "message": "크리스마스까지 9일! 종강까지 5일! 내 과제 마감까지 18시간!" },
  { "number": 17, "message": "포콜 공부를 해야해 제일 어렵고 하기 싫은 거 으윽" },
  { "number": 18, "message": "크리스마스까지 일주일 남았다! 포콜 시험까지는 하루 다들 행복하니? 적어도 난 이때 아닐 듯" },
  { "number": 19, "message": "포콜 시험을 치를 예정이야. 너희는 종강했다고? 배신자들" },
  { "number": 20, "message": "내일 아잉이랑 중국어 시험 있음. 과연 내가 우체국 박스를 샀을까. 지금도 봐주는 친구들이 있다면 덕담을 말해야지 워아이니" },
  { "number": 21, "message": "모두에게 다가오는 24일, 행복이 함께하기를!" },
  { "number": 22, "message": "갑자기 웬 감성적인 문구냐고? 원래 디폴트 문구였어. 이거 쓰는 것도 조금 질려가. 광주 간다!" },
  { "number": 23, "message": "다 함께하는 24일, 행복한 느낌이 가득할 거예요. 누군가는 오늘 데이트를 한다더라" },
  { "number": 24, "message": "미리메리크리스마스! 얘들아 올 한 해 고생 많았고 2024도 잘 부탁해 <3" }
];