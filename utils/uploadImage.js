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

export const uploadImg = async (file, { onSuccess, onError }) => {
  console.log(file);
  let selectedImageFile = file && file?.files ? file.files[0] : null;
  if (!selectedImageFile) {
    const error = new Error("file not selected");
    onError(error);
    return;
  }
  const fileReader = new FileReader();
  fileReader.addEventListener("load", async () => {
    try {
      const blobUrl = fileReader.result;
      const res = await uploadImage(blobUrl);
      console.log(res.success);
      if (!res.success) {
        throw res;
      }
      onSuccess(res.data.imageData);
      return;
    } catch (error) {
      onError(error);
    }
  });
  fileReader.readAsDataURL(selectedImageFile);
};
