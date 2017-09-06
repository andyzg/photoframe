from PIL import Image
import os
import sys


MAX_SIZE = 2000
PADDING = 0.952


def create(dirname, filename, padding, max_size):
    image = Image.open(dirname + '/' + filename, 'r')

    image_size = image.size
    width = image_size[0]
    height = image_size[1]
    multiplier = max_size / float(width) if width > height else max_size / float(height)

    new_width = int(float(width) * multiplier * padding)
    new_height = int(float(height) * multiplier * padding)
    new_image = image.resize((new_width, new_height), Image.ANTIALIAS)

    left_offset = int((MAX_SIZE - round(new_width)) / 2)
    top_offset = int((MAX_SIZE - round(new_height)) / 2)

    background = Image.new('RGBA', (max_size, max_size), (255, 255, 255, 255))
    background.paste(new_image, (left_offset, top_offset))
    background.save(dirname + '/framed-' + filename[:-4] + '.png')
    print 'Done processing ' + filename


if __name__ == '__main__':
    for filename in os.listdir(sys.argv[1]):
        if not filename.startswith('framed-') and filename.endswith('.jpg'):
            create(sys.argv[1], filename, PADDING, MAX_SIZE)
