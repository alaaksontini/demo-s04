import CompletionRadialChart from "./CompletionRateChart";
import ScoreEvolutionChart from "./ScoreEveolution";
import WeeklySubmissions from "./WeeklySubmissionChart";

function Home() {
  return (
    <div>
      <h1 className="text-3xl">Home</h1>

      <h2 className="text-2xl">Weekly Submissions</h2>
      <WeeklySubmissions />
      <h2>Score Eveolution</h2>
      <ScoreEvolutionChart></ScoreEvolutionChart>
      <h2>Taux de Completion</h2>
      <CompletionRadialChart percentage={75} />
    </div>
  );
}
export default Home;
