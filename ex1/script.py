# Convert csv to json
import csv
import json
import sys

# read from args
csvfile = open(sys.argv[1], 'r')
jsonfile = open('contratos.json', 'w')

fields = csvfile.readline().strip().split(';')

reader = csv.DictReader(csvfile, fields, delimiter=';')

jsonfile.write('[')

for row in reader:
    # remover valores vazios
    row = {k: v for k, v in row.items() if v}

    # field idcontrato to _id
    row['_id'] = row['idcontrato']
    del row['idcontrato']

    json.dump(row, jsonfile, ensure_ascii=False)
    jsonfile.write('\n')
    jsonfile.write(',')

jsonfile.seek(jsonfile.tell() - 1, 0)
jsonfile.write(']')


csvfile.close()
jsonfile.close()
print("CSV to JSON completed!")

