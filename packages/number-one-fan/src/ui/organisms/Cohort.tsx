const Cohort = ({ cohort }: { cohort: any }) => (
  <div className="text-center mb-8">
    <h3 className="text-2xl mt-2 text-red">{cohort.title.toUpperCase()}</h3>
    <p className="text-l">{cohort.names.sort().reduce((a: string, c: string) => `${a} - ${c}`)}</p>
  </div>
);

export default Cohort;
