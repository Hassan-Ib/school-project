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
  if (!selectedImageFile) return null;
  const fileReader = new FileReader();
  fileReader.addEventListener("load", async () => {
    const blobUrl = fileReader.result;
    try {
      const res = await uploadImage(blobUrl);
      if (res.ok) {
        onSuccess(res.data.imageData);
      }
      throw res;
    } catch (error) {
      onError(error);
    }
  });
  fileReader.readAsDataURL(selectedImageFile);
};
