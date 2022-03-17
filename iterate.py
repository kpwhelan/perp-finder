import csv
from csv import writer
import pandas as pd
import re

filename = 'codes.csv'


reader = csv.reader(open('codes.csv', 'r'))
writer = csv.writer(open('appended_output.csv', 'a'))
for row in reader:
    row = re.split(r'\t+', row[0])
    code = row[0].rstrip(' ')
    prison = row[2].rstrip(' ')
    state = row[1].rstrip(' ')
    
    line = f"<option value='{code}'>{prison}, {state}</option>"

    writer.writerow(line.split(','))

    