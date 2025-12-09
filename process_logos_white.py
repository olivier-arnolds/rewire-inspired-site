from PIL import Image, ImageOps
import os

def process_logo_to_white(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        
        # Get the alpha channel
        r, g, b, a = img.split()
        
        # Create a white image with the same size
        white_img = Image.new("RGB", img.size, (255, 255, 255))
        
        # Put the alpha channel back
        white_img.putalpha(a)
        
        # Save the result
        white_img.save(output_path, "PNG")
        print(f"Processed: {input_path} -> {output_path}")
        
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# List of logos to process based on the user's screenshot and previous context
logos_to_process = [
    "viva-glint-logo.png",
    "azure-logo.svg",
    "microsoft-fabric-logo.png",
    "viva-insights-logo.png",
    "hibob-logo.png",
    "microsoft-startups-logo-final.png"
]

base_dir = "/home/ubuntu/rewire-inspired-site/client/public/images"

for logo in logos_to_process:
    input_path = os.path.join(base_dir, logo)
    output_path = os.path.join(base_dir, f"white-{logo}")
    
    if os.path.exists(input_path):
        process_logo_to_white(input_path, output_path)
    else:
        print(f"File not found: {input_path}")
