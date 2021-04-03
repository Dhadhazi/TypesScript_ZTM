import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const wins = matches.filter(
      (row) =>
        (row[1] === "Man United" && row[5] === MatchResult.HomeWin) ||
        (row[2] === "Man United" && row[5] === MatchResult.AwayWin)
    ).length;
    return `Team ${this.team} won ${wins} games`;
  }
}
