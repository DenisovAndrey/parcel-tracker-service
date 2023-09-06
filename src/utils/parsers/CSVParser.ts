import fs from 'fs';
import csvParser from 'csv-parser';

export const parseCSV = <RawDataType>(filePath: string): Promise<RawDataType[]> => {
  return new Promise((resolve, reject) => {
    const data: RawDataType[] = [];
    let columns: string[] = [];

    fs.createReadStream(filePath, { encoding: 'utf-8' }) // Set the encoding to utf-8
      .pipe(csvParser({ separator: ';' })) // Specify the delimiter as a semicolon
      .on('data', (row) => {
        // If columns are not determined yet, use the first row as column names
        if (columns.length === 0) {
          columns = Object.keys(row);
        }

        const rowData: any = {};
        columns.forEach((column) => {
          rowData[column] = row[column];
        });

        data.push(rowData as RawDataType);
      })
      .on('end', () => {
        resolve(data);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}
