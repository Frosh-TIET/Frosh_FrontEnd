import os
from PIL import Image

def compress_image(input_path, output_path, quality=85):
    """
    Compresses an image.

    Parameters:
        input_path (str): Path to the input image file.
        output_path (str): Path to save the compressed image.
        quality (int): The image quality to use for compression (0 to 100).
                       Higher values result in better quality but larger file size.

    Returns:
        None
    """
    try:
        image = Image.open(input_path)
        image.save(output_path, optimize=True, quality=quality)
        print(f"Image compression completed: {output_path}")
    except Exception as e:
        print(f"Error compressing image {input_path}: {e}")


def compress_folder(input_folder, output_folder, quality=85):
    """
    Compresses all images in a folder.

    Parameters:
        input_folder (str): Path to the folder containing input images.
        output_folder (str): Path to the folder where compressed images will be saved.
        quality (int): The image quality to use for compression (0 to 100).
                       Higher values result in better quality but larger file size.

    Returns:
        None
    """
    try:
        # Create the output folder if it doesn't exist
        os.makedirs(output_folder, exist_ok=True)

        # Get a list of all image files in the input folder
        image_files = [file for file in os.listdir(input_folder) if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]

        # Compress each image in the folder
        for file in image_files:
            input_path = os.path.join(input_folder, file)
            output_path = os.path.join(output_folder, file)
            compress_image(input_path, output_path, quality)
        
        print("Folder compression completed.")
    except Exception as e:
        print(f"Error compressing folder: {e}")


# Example usage
input_folder_path = "C:\\Users\\ycgos\\Downloads\\CORE and stuff\\Team-Photos"
output_folder_path = "C:\\Users\\ycgos\\Downloads\\CORE and stuff\\Team-Photos_1"
compress_folder(input_folder_path, output_folder_path)
