document.addEventListener("DOMContentLoaded", function() {
 
    const nameHeading = document.createElement("h1");
    nameHeading.textContent = "2020675071 한세윤";
    document.body.appendChild(nameHeading);

    const introText = document.createElement("h2");
    introText.textContent = "저는 경성대학교를 다니는 20학번 한세윤입니다.";
    document.body.appendChild(introText);

    const newDiv = document.createElement("div");
    newDiv.textContent = "현재 리액트에 관한 수업을 듣고 있으며 가장 좋아하는 언어는 파이썬입니다.";
    newDiv.style.fontSize = "12px";
    newDiv.style.color = "brown";
    document.body.appendChild(newDiv);

    const newImage = document.createElement("img");
    newImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCFSvITlLKx_aC_ioY4Vtypb-dTqi3FG9Xg&s";
    newImage.style.width = "150px";
    newImage.style.height = "150px";
    document.body.insertBefore(newImage, document.body.firstChild);
});
