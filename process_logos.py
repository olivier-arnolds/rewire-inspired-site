from PIL import Image, ImageOps
import os

def process_logo(input_path, output_path, target_color=(255, 255, 255, 255)):
    try:
        img = Image.open(input_path).convert("RGBA")
        
        # Create a new image with the same size
        new_img = Image.new("RGBA", img.size)
        
        datas = img.getdata()
        new_data = []
        
        for item in datas:
            # If the pixel is not transparent (alpha > 0)
            if item[3] > 0:
                # Check if it's close to white (for white logos on transparent bg)
                # or close to black (for black logos on transparent bg)
                
                # Calculate brightness
                brightness = (item[0] + item[1] + item[2]) / 3
                
                # If it's a dark logo, we want to make it white
                if brightness < 128:
                    new_data.append(target_color)
                # If it's already light/white, keep it white
                else:
                    new_data.append(target_color)
            else:
                new_data.append((0, 0, 0, 0))
                
        new_img.putdata(new_data)
        new_img.save(output_path, "PNG")
        print(f"Processed {input_path} -> {output_path}")
        
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Define logos to process
logos = [
    # Source paths from search results or existing files
    ("/home/ubuntu/upload/search_images/Ef8eG3y5npyl.png", "/home/ubuntu/rewire-inspired-site/client/public/images/ipsos-logo-white-v3.png"),
    ("/home/ubuntu/upload/search_images/Whh2XihfBLUM.png", "/home/ubuntu/rewire-inspired-site/client/public/images/softwareone-logo-white-v2.png"),
    # Add more mappings as we find/upload them
]

# Process each logo
for input_path, output_path in logos:
    if os.path.exists(input_path):
        process_logo(input_path, output_path)
    else:
        print(f"Input file not found: {input_path}")
