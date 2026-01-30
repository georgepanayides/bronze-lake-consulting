import math

def rotate(point, angle, center):
    ox, oy = center
    px, py = point
    rad = math.radians(angle)
    qx = ox + math.cos(rad) * (px - ox) - math.sin(rad) * (py - oy)
    qy = oy + math.sin(rad) * (px - ox) + math.cos(rad) * (py - oy)
    return qx, qy

def generate_arrow():
    # Define an arrow pointing UP (0, -1) centered on Y axis
    # Then rotate it 45 degrees
    
    # Arrow Reference (pointing UP)
    # Total Height: 20 (from y=22 to y=2)
    # Tip at (12, 2)
    # Shaft width: 6
    # Head width: 12
    # Head length: 8
    
    # Points (Clockwise from Tip)
    tip = (12, 2)
    
    # Head Right Base
    head_r = (12 + 6, 2 + 8) # (18, 10)
    
    # Shaft Right Start (indented)
    shaft_r_start = (12 + 2, 10) # (14, 10) - Shaft width 4? users said "Chunky". Let's use shaft width 6 (radius 3).
    shaft_r_start = (12 + 3, 10) # (15, 10)
    
    # Shaft Right End
    shaft_r_end = (15, 22)
    
    # Shaft Left End
    shaft_l_end = (9, 22)
    
    # Shaft Left Start
    shaft_l_start = (9, 10)
    
    # Head Left Base
    head_l = (6, 10)
    
    points = [tip, head_r, shaft_r_start, shaft_r_end, shaft_l_end, shaft_l_start, head_l]
    
    # Rotate 45 degrees CLOCKWISE to point Up-Right
    # Wait, 0 degrees is UP? In SVG coords?
    # No, usually 0 is Right.
    # Current points are for UP (0, -1 direction roughly).
    # We want Top-Right.
    # Let's just rotate 45 degrees around center (12, 12).
    
    # If the arrow points UP, and we rotate 45 deg Clockwise -> It points Top-Right.
    
    rotated_points = []
    center = (12, 12)
    angle = 45 
    
    for p in points:
        rp = rotate(p, angle, center)
        rotated_points.append(rp)
        
    # Convert to path string
    path_d = "M "
    for i, p in enumerate(rotated_points):
        # Round to 1 decimal place for cleaner SVG
        px = round(p[0], 2)
        py = round(p[1], 2)
        if i == 0:
            path_d += f"{px} {py}"
        else:
            path_d += f" L {px} {py}"
    path_d += " Z"
    
    print(f'<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">')
    print(f'  <path d="{path_d}" />')
    print('</svg>')

if __name__ == "__main__":
    generate_arrow()
