function toggleModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");

  if (imageSrc) {
    modalImage.src = imageSrc;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    adjustModalSize();
  } else {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function adjustModalSize() {
  var modalContent = document.getElementById("modalContent");
  var modalImage = document.getElementById("modalImage");

  // 이미지의 원래 너비와 높이
  var originalWidth = modalImage.naturalWidth;
  var originalHeight = modalImage.naturalHeight;

  // 이미지의 비율 계산
  var imageRatio = originalWidth / originalHeight;

  // 모달의 너비와 높이
  var modalWidth = window.innerWidth * 0.9;
  var modalHeight = window.innerHeight * 0.9;

  // 모달의 너비와 높이에 따라 이미지 크기 조절
  if (imageRatio > 1) {
    // 이미지가 가로로 넓을 경우
    modalImage.style.width = modalWidth + "px";
    modalImage.style.height = modalWidth / imageRatio + "px";

    // 추가: 이미지의 크기가 모달의 높이보다 크면 모달의 높이에 맞게 가로 조절
    if (modalImage.height > modalHeight) {
      modalImage.style.width = modalHeight * imageRatio + "px";
      modalImage.style.height = modalHeight + "px";
    }
  } else {
    // 이미지가 세로로 길 경우
    modalImage.style.height = modalHeight + "px";
    modalImage.style.width = modalHeight * imageRatio + "px";
  }
}

window.addEventListener("resize", adjustModalSize);

// 이미지 클릭 시 모달 토글
document.addEventListener("DOMContentLoaded", function () {
  // 이미지 클릭 시 모달 토글
  var modalElement = document.getElementById("myModal");
  if (modalElement) {
    modalElement.addEventListener("click", function () {
      toggleModal();
    });
  } else {
    console.error("Modal element not found.");
  }
});
