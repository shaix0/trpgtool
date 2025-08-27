document.getElementById("file-upload").addEventListener("change", function (event) {
    const files = event.target.files;

    if (files.length > 0) {
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append("images[]", files[i]);
        }

        // �o�e����A��
        fetch("/image-list", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    alert("�Ϥ��W�Ǧ��\�I");
                } else {
                    alert("�Ϥ��W�ǥ��ѡI");
                }
            })
            .catch((error) => {
                console.error("�W�ǿ��~:", error);
                alert("�Ϥ��W�ǥ��ѡI");
            });
    }
});

document.getElementById("toggle-list").addEventListener("click", function () {
    const list = document.getElementById("image-list");
    const btn = document.getElementById("toggle-list");
    if (list.style.display === "none") {
        list.style.display = "block";
        btn.textContent = "�����_";
    } else {
        list.style.display = "none";
        btn.textContent = "���Ҧ�����";
    }
});