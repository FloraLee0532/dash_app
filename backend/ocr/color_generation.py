#######color helper########

def interpolar_color(color1, color2, factor):
    """interpolates between two RGB colors"""
    result = []
    for c1,c2 in zip(color1,color2):
        result.append(int(c1 + (c2 - c1) * factor))
    return tuple(result)

def rgb_to_hex(color:tuple) :
    return "#{:02x}{:02x}{:02x}".format(color[0],color[1],color[2])

def generate_gradient_colors(start_color: str, end_color: str, num_colors: int) -> list:
    """generates a gradient of colors"""
    start_color = tuple(int(start_color[i:i+2], 16) for i in (1, 3, 5))
    end_color = tuple(int(end_color[i:i+2], 16) for i in (1, 3, 5))
    colors = []
    for i in range(num_colors):
        factor = i / (num_colors - 1)
        color = interpolar_color(start_color, end_color, factor)
        colors.append(rgb_to_hex(color))
    return colors

def get_all_color(num) :
    start_color = "#EEBD89"
    end_color = "#D13ABD"
    num_colors = 2
    gradient_colors1 = generate_gradient_colors(start_color, end_color,  num_colors)
    return gradient_colors1
