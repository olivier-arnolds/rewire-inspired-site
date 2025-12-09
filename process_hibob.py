import xml.etree.ElementTree as ET
import os

def make_svg_white(input_path, output_path):
    try:
        # Register namespaces to prevent "ns0" prefixes
        ET.register_namespace('', "http://www.w3.org/2000/svg")
        
        tree = ET.parse(input_path)
        root = tree.getroot()
        
        # Function to recursively update fill and stroke colors
        def update_colors(element):
            # Update fill color if it exists and isn't "none"
            if 'fill' in element.attrib and element.attrib['fill'].lower() != 'none':
                element.attrib['fill'] = '#FFFFFF'
            
            # Update stroke color if it exists and isn't "none"
            if 'stroke' in element.attrib and element.attrib['stroke'].lower() != 'none':
                element.attrib['stroke'] = '#FFFFFF'
                
            # Handle style attribute (inline CSS)
            if 'style' in element.attrib:
                styles = element.attrib['style'].split(';')
                new_styles = []
                for style in styles:
                    if ':' in style:
                        key, value = style.split(':', 1)
                        key = key.strip()
                        if key == 'fill' and value.strip().lower() != 'none':
                            new_styles.append('fill:#FFFFFF')
                        elif key == 'stroke' and value.strip().lower() != 'none':
                            new_styles.append('stroke:#FFFFFF')
                        else:
                            new_styles.append(style)
                    else:
                        new_styles.append(style)
                element.attrib['style'] = ';'.join(new_styles)
            
            # Recurse for children
            for child in element:
                update_colors(child)

        # Apply color update
        update_colors(root)
        
        # If the root element doesn't have a fill, set it to white (often needed for simple paths)
        if 'fill' not in root.attrib:
            root.attrib['fill'] = '#FFFFFF'
            
        tree.write(output_path, encoding='utf-8', xml_declaration=True)
        print(f"Processed {input_path} -> {output_path}")
        
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Define SVGs to process
svgs = [
    ("/home/ubuntu/rewire-inspired-site/client/public/images/hibob-logo.svg", "/home/ubuntu/rewire-inspired-site/client/public/images/hibob-logo-white.svg"),
]

# Process each SVG
for input_path, output_path in svgs:
    if os.path.exists(input_path):
        make_svg_white(input_path, output_path)
    else:
        print(f"Input file not found: {input_path}")
