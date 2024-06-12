let step = 1;
        let fileUploaded = false;

        function previewFile(step) {
            const fileInput = document.getElementById('fileInput' + step);
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                const uploadPhotoDiv = document.getElementById('upload-photo-container');
                uploadPhotoDiv.innerHTML = '<img src="' + reader.result + '" style="width:100%; height:auto; border-radius: 8px;" />';
                fileUploaded = true;
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        }

        function submitForm() {
            if (fileUploaded) {
                const currentStepLi = document.getElementById(getStepId(step));
                currentStepLi.classList.add('complete');
                currentStepLi.querySelector('span').textContent = '✔';

                if (step < 3) {
                    step++;
                    updateForm(step);
                    scrollToTop();
                } else {
                    document.getElementById('selfie-section').style.display = 'none';
                    document.querySelector('.submit-button').style.display = 'none';
                    document.querySelector('.next-button').style.display = 'inline-block';
                }

                fileUploaded = false;
            } else {
                alert("Please upload a photo first.");
            }
        }

        function updateForm(step) {
            const selfieSection = document.querySelector('.selfie-section');
            const uploadPhotoDiv = document.getElementById('upload-photo-container');
            uploadPhotoDiv.innerHTML = '<img src="img/cam.png" alt="Upload Photo"><p>Upload a photo</p>';
            if (step === 2) {
                selfieSection.querySelector('h2').textContent = 'Upload a picture of your IC';
                selfieSection.querySelector('p').textContent = 'Make sure the IC details are clear to read with no blur or glare';
                selfieSection.querySelector('img').src = 'img/selfie_4696537.png'; //for the selfie image picture 
                uploadPhotoDiv.setAttribute('onclick', "document.getElementById('fileInput2').click();");
                uploadPhotoDiv.innerHTML += '<input type="file" id="fileInput2" accept="image/*" onchange="previewFile(2)">';
            } else if (step === 3) {
                selfieSection.querySelector('h2').textContent = 'Upload a picture of your Driver’s License';
                selfieSection.querySelector('p').textContent = 'Make sure the details are clear to read with no blur or glare';
                selfieSection.querySelector('img').src = 'img/driver-license_3381635.png';  //for the driverlicense pciture
                uploadPhotoDiv.setAttribute('onclick', "document.getElementById('fileInput3').click();");
                uploadPhotoDiv.innerHTML += '<input type="file" id="fileInput3" accept="image/*" onchange="previewFile(3)">';
            }
        }

        function getStepId(step) {
            switch (step) {
                case 1:
                    return 'facial-verification';
                case 2:
                    return 'selfie-with-ic';
                case 3:
                    return 'drivers-license';
            }
        }

        function redirectToNextPage() {
            window.location.href = 'newpage.html';
        }

      