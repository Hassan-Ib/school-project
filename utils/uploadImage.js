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
    if (!data.success) throw new Error("image upload error");
    return data;
  } catch (error) {
    throw error;
  }
};
