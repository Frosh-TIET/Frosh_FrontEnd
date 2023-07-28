import os

def find_files(folder_path):
    file_names = []
    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)
        if os.path.isfile(item_path):
            file_names.append(item)
    return file_names

if __name__ == "__main__":
    folder_path = "core-photos"  # Replace this with the actual folder path
    files = find_files(folder_path)
    if files:
        print("Files in the folder:")
        for file_name in files:
            print(file_name)
    else:
        print("No files found in the folder.")

names_list = [
    "Abhimanyu Mehta.jpg",
    "Abhimanyu Narayanan.jpg",
    "Akarsh Mahajan.png",
    "Akarsh Marwah.png",
    "Ananya.jpg",
    "Armaan.png",
    "Arushi.png",
    "Devashish.png",
    "Harman.png",
    "Ishika.png",
    "Ishita.png",
    "Ishnoor.png",
    "Lakshya.png",
    "Manan.png",
    "Muskan.png",
    "Swastik.png",
    "Tushyaj.png",
    "Vinayak.png"
]
