
      // edit txt
      function editTexte() {
        var textes = document.getElementsByClassName("equipe_txtEditable");
        for (var i = 0; i < textes.length; i++) {
          textes[i].contentEditable = "true";
        }
      }
      editTexte();

      // edit img
      var currentImage;

      var images = document.getElementsByClassName("equipe_pictureEditable");
      for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function (event) {
          changeImage(event);
        });
      }

      document
        .getElementById("uploadImage")
        .addEventListener("change", function (event) {
          uploadImage(event);
        });

      function changeImage(event) {
        currentImage = event.target;

        var uploadImage = document.getElementById("uploadImage");
        uploadImage.click();
      }

      function uploadImage(event) {
        var input = event.target;

        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            currentImage.src = e.target.result;
          };

          reader.readAsDataURL(input.files[0]);
        }
      }