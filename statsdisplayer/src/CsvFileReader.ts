import fs from "fs";
import path from "path";

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(path.resolve(__dirname, this.filename), {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row) => row.split(","));
  }
}

// import fs from "fs";
// import path from "path";

// export abstract class CsvFileReader<T> {
//   data: T[] = [];
//   constructor(public filename: string) {}

//   abstract mapRow(row: string[]): T;

//   read(): void {
//     this.data = fs
//       .readFileSync(path.resolve(__dirname, this.filename), {
//         encoding: "utf-8",
//       })
//       .split("\n")
//       .map((row) => row.split(","))
//       .map(this.mapRow);
//   }
// }

// import fs from "fs";
// import path from "path";
// import { MatchResult } from "./MatchResult";
// import { dateStringToDate } from "./utils";

// type MatchData = [Date, string, string, number, number, MatchResult, string];

// export class CsvFileReader {
//   data: MatchData[] = [];
//   constructor(public filename: string) {}

//   read(): void {
//     this.data = fs
//       .readFileSync(path.resolve(__dirname, this.filename), {
//         encoding: "utf-8",
//       })
//       .split("\n")
//       .map((row) => row.split(","))
//       .map(
//         (row: string[]): MatchData => {
//           return [
//             dateStringToDate(row[0]),
//             row[1],
//             row[2],
//             parseInt(row[3]),
//             parseInt(row[4]),
//             row[5] as MatchResult,
//             row[6],
//           ];
//         }
//       );
//   }
// }
