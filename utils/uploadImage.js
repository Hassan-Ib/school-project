export const uploadImage = async (imageUrl) => {
  try {
    const response = await fetch("/api/articles/upload-Image", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ imageUrl }),
    });
    const data = await response.json();
    console.log("data", data);
    if (!data.success) throw new Error("image upload error ");
    return data;
  } catch (error) {
    throw error;
  }
};

export const uploadImg = async function (callback) {
  let selectedImageFile = file.files ? file.files[0] : null;
  if (!selectedImageFile) return null;
  const fileReader = new FileReader();
  fileReader.addEventListener("load", async () => {
    const blobUrl = fileReader.result;
    try {
      const res = await uploadImage(blobUrl);
      console.log(res);

      callback(res);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  });
  fileReader.readAsDataURL(selectedImageFile);
};
//  const {
//    data: {
//      imageData: { url },
//    },
//  } = res;
//  if (url) {
//    console.log("url", url);
//    editor.chain().focus().setImage({ src: url }).run();
//  }
