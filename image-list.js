document.getElementById("file-upload").addEventListener("change", function (event) {
    const files = event.target.files;

    if (files.length > 0) {
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append("images[]", files[i]);
        }

        // �o�e����A��
        fetch("/upload", {
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