from PIL import Image, ImageDraw

def genCircle(n, isfilled):
    # Grids less than 3 x 3 are meaningless
    # x o x
    # o x o
    # x o x

    fileName = "128.png"

    if isfilled:
        fillcolor = 'white'
    else:
        fillcolor = 'black'

    drawing = Image.new(mode = 'RGB', size = (n, n), color = (0,0,0))
    draw = ImageDraw.Draw(drawing)
    # Outline is ontop of fill not another layer around it
    draw.ellipse((0, 0, n - 1, n - 1), fill = fillcolor, outline ='white')
    drawing.save(fileName)

    im = Image.open(fileName)

genCircle(128,True)