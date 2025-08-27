document.getElementById("file-upload").addEventListener("change", function (event) {
    const files = event.target.files;

    if (files.length > 0) {
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append("images[]", files[i]);
        }

        // 發送到伺服器
        fetch("/image-list", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    alert("圖片上傳成功！");
                } else {
                    alert("圖片上傳失敗！");
                }
            })
            .catch((error) => {
                console.error("上傳錯誤:", error);
                alert("圖片上傳失敗！");
            });
    }
});

document.getElementById("toggle-list").addEventListener("click", function () {
    const list = document.getElementById("image-list");
    const btn = document.getElementById("toggle-list");
    if (list.style.display === "none") {
        list.style.display = "block";
        btn.textContent = "▲收起";
    } else {
        list.style.display = "none";
        btn.textContent = "▼所有場景";
    }
});