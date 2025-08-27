document.getElementById("file-upload").addEventListener("change", function (event) {
    const files = event.target.files;

    if (files.length > 0) {
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append("images[]", files[i]);
        }

        // 發送到伺服器
        fetch("/upload", {
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